import type { ContactFormData } from "../../domain/entities/ContactFormData";

// ─── Service label map (duplicated here for independence) ─────────────────────
const SERVICE_LABELS: Record<string, string> = {
  tributaria: "Asesoría Tributaria",
  laboral: "Asesoría Laboral",
  constitucion: "Constitución de Empresas",
  planillas: "Administración de Planillas",
  seleccion: "Selección de Personal",
  "auditoria-contable": "Auditoría Contable y Financiera",
  "auditoria-laboral": "Auditoría Laboral",
  juridica: "Asesoría Jurídica",
  otros: "Otros / Consulta general",
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ─── Confirmation email (user receives) ──────────────────────────────────────
// Friendly acknowledgment confirming their message was received.

export function buildConfirmationEmail(data: ContactFormData): {
  subject: string;
  html: string;
} {
  const serviceLabel =
    SERVICE_LABELS[data.servicio] ?? escapeHtml(data.servicio);
  const firstName = escapeHtml(data.nombre.split(" ")[0]);

  const subject = `Recibimos tu mensaje — Riviera Live Consulting`;

  const html = /* html */ `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#F8F4EC;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">

  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
    style="background-color:#F8F4EC;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
          style="max-width:600px;width:100%;">

          <!-- ── HEADER ──────────────────────────────────────────────────── -->
          <tr>
            <td style="background:linear-gradient(135deg,#0F1E35 0%,#1A2E4A 55%,#243D5F 100%);
                       border-radius:16px 16px 0 0;padding:48px 40px 40px;text-align:center;">
              <!-- Diamond ornament -->
              <div style="width:14px;height:14px;background:#C4983C;
                          transform:rotate(45deg);margin:0 auto 24px;
                          display:inline-block;">
              </div>
              <p style="margin:0 0 6px;color:#C4983C;font-size:10px;font-weight:700;
                        letter-spacing:4px;text-transform:uppercase;">
                Riviera Live Consulting
              </p>
              <h1 style="margin:0 0 12px;color:#ffffff;font-size:26px;font-weight:700;
                         line-height:1.25;">
                ¡Gracias, ${firstName}!
              </h1>
              <p style="margin:0;color:#8AA5C3;font-size:14px;line-height:1.6;
                        max-width:360px;margin-left:auto;margin-right:auto;">
                Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad posible.
              </p>
              <!-- Gold divider -->
              <div style="margin:28px auto 0;height:1px;width:80px;
                          background:linear-gradient(90deg,rgba(196,152,60,0),#C4983C,rgba(196,152,60,0));">
              </div>
            </td>
          </tr>

          <!-- ── BODY ────────────────────────────────────────────────────── -->
          <tr>
            <td style="background:#ffffff;padding:40px;">

              <!-- Greeting paragraph -->
              <p style="margin:0 0 24px;color:#334155;font-size:15px;line-height:1.75;">
                Estimado/a <strong style="color:#1A2E4A;">${escapeHtml(data.nombre)}</strong>,
                <br /><br />
                hemos recibido correctamente tu consulta desde nuestra página web.
                Nuestro equipo la revisará y te responderá en el menor tiempo posible
                durante nuestro horario de atención.
              </p>

              <!-- Summary card -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                style="background:#F8F4EC;border:1px solid #F0EAE0;border-radius:12px;
                       margin-bottom:28px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 16px;color:#94A3B8;font-size:10px;font-weight:700;
                               letter-spacing:2.5px;text-transform:uppercase;">
                      Resumen de tu consulta
                    </p>

                    <!-- Row: Servicio -->
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                      style="margin-bottom:12px;">
                      <tr>
                        <td width="36%" valign="top">
                          <p style="margin:0;color:#94A3B8;font-size:12px;">Servicio:</p>
                        </td>
                        <td>
                          <span style="display:inline-block;background:#F5E9CC;color:#7B5520;
                                       font-size:11px;font-weight:700;padding:4px 12px;
                                       border-radius:20px;border:1px solid #E4C278;">
                            ${serviceLabel}
                          </span>
                        </td>
                      </tr>
                    </table>

                    <!-- Row: Empresa -->
                    ${
                      data.empresa
                        ? `<table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                        style="margin-bottom:12px;">
                        <tr>
                          <td width="36%" valign="top">
                            <p style="margin:0;color:#94A3B8;font-size:12px;">Empresa:</p>
                          </td>
                          <td>
                            <p style="margin:0;color:#1A2E4A;font-size:13px;font-weight:600;">
                              ${escapeHtml(data.empresa)}
                            </p>
                          </td>
                        </tr>
                      </table>`
                        : ""
                    }

                    <!-- Row: Mensaje -->
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td width="36%" valign="top">
                          <p style="margin:0;color:#94A3B8;font-size:12px;">Mensaje:</p>
                        </td>
                        <td>
                          <p style="margin:0;color:#475569;font-size:13px;line-height:1.65;
                                     white-space:pre-wrap;">
                            ${escapeHtml(data.mensaje)}
                          </p>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- Commitment note -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                style="background:#F0F5FA;border-left:3px solid #C4983C;
                       border-radius:0 8px 8px 0;margin-bottom:28px;">
                <tr>
                  <td style="padding:14px 18px;">
                    <p style="margin:0;color:#475569;font-size:13px;line-height:1.65;">
                      🕐 <strong style="color:#1A2E4A;">Horario de atención:</strong>
                      Lunes a Viernes, 9:00 am – 6:00 pm (Lima, Perú).
                      Te responderemos dentro de las próximas 24 horas hábiles.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Social / contact note -->
              <p style="margin:0;color:#94A3B8;font-size:12px;line-height:1.7;text-align:center;">
                Si tienes alguna consulta urgente, puedes escribirnos directamente a
                <a href="mailto:hernan.riveralive@gmail.com"
                   style="color:#2E4D74;text-decoration:none;font-weight:600;">
                  hernan.riveralive@gmail.com
                </a>
              </p>

            </td>
          </tr>

          <!-- ── FOOTER ───────────────────────────────────────────────────── -->
          <tr>
            <td style="background:#0F1E35;border-radius:0 0 16px 16px;
                       padding:28px 40px;text-align:center;">
              <p style="margin:0 0 4px;color:#C4983C;font-size:11px;font-weight:700;
                         letter-spacing:3px;text-transform:uppercase;">
                Riviera Live Consulting
              </p>
              <p style="margin:0 0 16px;color:#475569;font-size:11px;">
                Soluciones asertivas para tu empresa
              </p>
              <div style="height:1px;width:60px;margin:0 auto 16px;
                          background:linear-gradient(90deg,transparent,#C4983C,transparent);">
              </div>
              <p style="margin:0;color:#334155;font-size:10px;line-height:1.6;">
                Este es un correo automático de confirmación — por favor no responder.<br />
                Nos comunicaremos contigo a través del correo con el que te registraste.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;

  return { subject, html };
}
