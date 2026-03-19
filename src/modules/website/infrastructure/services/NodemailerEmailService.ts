import nodemailer from "nodemailer";
import type { IEmailService, EmailPayload } from "../../domain/ports/IEmailService";

// ─── Nodemailer adapter ───────────────────────────────────────────────────────
// Concrete implementation of IEmailService using Nodemailer + Zoho SMTP.
// To switch providers: create a new class implementing IEmailService and
// replace this one in route.ts — zero changes to domain or templates.

export class NodemailerEmailService implements IEmailService {
  private readonly transporter: nodemailer.Transporter;
  private readonly fromAddress: string;

  constructor() {
    const port = Number(process.env.EMAIL_PORT ?? 465);

    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port,
      // Port 465 uses implicit SSL; 587 uses STARTTLS
      secure: port === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const fromName = process.env.EMAIL_FROM_NAME ?? "Riviera Live Consulting";
    this.fromAddress = `"${fromName}" <${process.env.EMAIL_USER}>`;
  }

  async send(payload: EmailPayload): Promise<void> {
    await this.transporter.sendMail({
      from: this.fromAddress,
      to: payload.to.join(", "),
      subject: payload.subject,
      html: payload.html,
      ...(payload.replyTo ? { replyTo: payload.replyTo } : {}),
    });
  }
}
