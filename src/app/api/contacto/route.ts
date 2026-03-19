import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData } from "@/modules/website/domain/entities/ContactFormData";
import type { IEmailService } from "@/modules/website/domain/ports/IEmailService";
import { NodemailerEmailService } from "@/modules/website/infrastructure/services/NodemailerEmailService";
import { buildNotificationEmail } from "@/modules/website/infrastructure/templates/notification.template";
import { buildConfirmationEmail } from "@/modules/website/infrastructure/templates/confirmation.template";

// ─── Dependency injection ─────────────────────────────────────────────────────
// Swap this line to use a different provider (SendGrid, Resend, AWS SES, etc.)
const emailService: IEmailService = new NodemailerEmailService();

// ─── reCAPTCHA verification ───────────────────────────────────────────────────
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("[contacto] RECAPTCHA_SECRET_KEY is not set");
    return false;
  }

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }).toString(),
  });

  const data = (await res.json()) as { success: boolean; score?: number };
  return data.success;
}

// ─── Field validation ─────────────────────────────────────────────────────────
function validate(body: Partial<ContactFormData>): string | null {
  if (!body.nombre?.trim()) return "El nombre es requerido.";
  if (!body.email?.trim()) return "El correo electrónico es requerido.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return "Correo inválido.";
  if (!body.mensaje?.trim()) return "El mensaje es requerido.";
  if (!body.recaptchaToken) return "Token reCAPTCHA ausente.";
  return null;
}

// ─── POST /api/contacto ───────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactFormData>;

    // 1. Validate fields
    const validationError = validate(body);
    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    const data = body as ContactFormData;

    // 2. Verify reCAPTCHA server-side
    const captchaOk = await verifyRecaptcha(data.recaptchaToken);
    if (!captchaOk) {
      return NextResponse.json(
        { message: "Verificación reCAPTCHA fallida. Inténtalo de nuevo." },
        { status: 422 }
      );
    }

    // 3. Parse recipient list from env
    const recipientList = (process.env.EMAIL_TO ?? "")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    if (recipientList.length === 0) {
      console.error("[contacto] EMAIL_TO is not set or empty");
      return NextResponse.json(
        { message: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    // 4. Send notification email to the company
    const { subject: notifSubject, html: notifHtml } =
      buildNotificationEmail(data);

    await emailService.send({
      to: recipientList,
      subject: notifSubject,
      html: notifHtml,
      replyTo: data.email, // reply goes directly to the user
    });

    // 5. Optionally send confirmation email to the user
    const sendConfirmation =
      process.env.EMAIL_SEND_CONFIRMATION?.toLowerCase() === "true";

    if (sendConfirmation) {
      const { subject: confSubject, html: confHtml } =
        buildConfirmationEmail(data);

      await emailService.send({
        to: [data.email],
        subject: confSubject,
        html: confHtml,
      });
    }

    return NextResponse.json(
      { message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contacto] Error sending email:", error);
    return NextResponse.json(
      { message: "Ocurrió un error al enviar el mensaje. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}
