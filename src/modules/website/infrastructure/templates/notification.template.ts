import type { ContactFormData } from "../../domain/entities/ContactFormData";

// ─── Service label map ────────────────────────────────────────────────────────
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

// ─── Notification email (company receives) ────────────────────────────────────
// Elegant branded HTML email indicating it came from the landing page.

export function buildNotificationEmail(data: ContactFormData): {
  subject: string;
  html: string;
} {
  const serviceLabel =
    SERVICE_LABELS[data.servicio] ?? escapeHtml(data.servicio);
  const now = new Date().toLocaleString("es-PE", {
    timeZone: "America/Lima",
    dateStyle: "full",
    timeStyle: "short",
  });

  const subject = `Nuevo contacto desde la Landing Page — ${escapeHtml(data.nombre)}`;

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
                       border-radius:16px 16px 0 0;padding:40px 40px 36px;">
              <!-- Eyebrow -->
              <p style="margin:0 0 6px;color:#C4983C;font-size:10px;font-weight:700;
                        letter-spacing:4px;text-transform:uppercase;">
                Riviera Live Consulting
              </p>
              <!-- Title -->
              <h1 style="margin:0 0 8px;color:#ffffff;font-size:24px;font-weight:700;
                         line-height:1.25;">
                Nuevo mensaje de contacto
              </h1>
              <!-- Source badge -->
              <p style="margin:0;display:inline-block;background:rgba(196,152,60,0.15);
                        border:1px solid rgba(196,152,60,0.35);color:#E4C278;
                        font-size:11px;font-weight:600;letter-spacing:1px;
                        padding:4px 12px;border-radius:20px;">
                ✦ Recibido desde tu Landing Page oficial
              </p>
              <!-- Gold divider -->
              <div style="margin-top:28px;height:1px;
                          background:linear-gradient(90deg,rgba(196,152,60,0),#C4983C,rgba(196,152,60,0));">
              </div>
            </td>
          </tr>

          <!-- ── BODY ────────────────────────────────────────────────────── -->
          <tr>
            <td style="background:#ffffff;padding:40px;">

              <!-- Info banner -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                style="background:#F0F5FA;border-left:3px solid #C4983C;
                       border-radius:0 8px 8px 0;margin-bottom:32px;">
                <tr>
                  <td style="padding:14px 18px;">
                    <p style="margin:0;color:#475569;font-size:13px;line-height:1.65;">
                      Un visitante de tu sitio web
                      <strong style="color:#1A2E4A;">rivieraliveconsulting.com</strong>
                      ha enviado el siguiente mensaje a través del formulario de contacto
                      el <strong style="color:#1A2E4A;">${now}</strong>.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- ── Contact details ───────────────────────────────────── -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">

                <!-- Nombre -->
                <tr>
                  <td colspan="2" style="padding-bottom:20px;
                                         border-bottom:1px solid #EAF0F8;">
                    <p style="margin:0 0 5px;color:#94A3B8;font-size:10px;font-weight:700;
                               letter-spacing:2.5px;text-transform:uppercase;">
                      Nombre completo
                    </p>
                    <p style="margin:0;color:#0F1E35;font-size:17px;font-weight:700;">
                      ${escapeHtml(data.nombre)}
                    </p>
                  </td>
                </tr>
                <tr><td colspan="2" style="height:20px;"></td></tr>

                <!-- Empresa + Email -->
                <tr>
                  <td width="50%" valign="top"
                    style="padding-bottom:20px;padding-right:16px;
                           border-bottom:1px solid #EAF0F8;">
                    <p style="margin:0 0 5px;color:#94A3B8;font-size:10px;font-weight:700;
                               letter-spacing:2.5px;text-transform:uppercase;">
                      Empresa
                    </p>
                    <p style="margin:0;color:#1A2E4A;font-size:14px;">
                      ${data.empresa ? escapeHtml(data.empresa) : "<em style='color:#94A3B8;'>No especificada</em>"}
                    </p>
                  </td>
                  <td width="50%" valign="top"
                    style="padding-bottom:20px;border-bottom:1px solid #EAF0F8;">
                    <p style="margin:0 0 5px;color:#94A3B8;font-size:10px;font-weight:700;
                               letter-spacing:2.5px;text-transform:uppercase;">
                      Correo electrónico
                    </p>
                    <a href="mailto:${escapeHtml(data.email)}"
                       style="color:#2E4D74;font-size:14px;text-decoration:none;
                              font-weight:600;">
                      ${escapeHtml(data.email)}
                    </a>
                  </td>
                </tr>
                <tr><td colspan="2" style="height:20px;"></td></tr>

                <!-- Servicio de interés -->
                <tr>
                  <td colspan="2"
                    style="padding-bottom:20px;border-bottom:1px solid #EAF0F8;">
                    <p style="margin:0 0 10px;color:#94A3B8;font-size:10px;font-weight:700;
                               letter-spacing:2.5px;text-transform:uppercase;">
                      Servicio de interés
                    </p>
                    <span style="display:inline-block;background:#F5E9CC;color:#7B5520;
                                 font-size:12px;font-weight:700;letter-spacing:0.5px;
                                 padding:7px 16px;border-radius:20px;
                                 border:1px solid #E4C278;">
                      ${serviceLabel}
                    </span>
                  </td>
                </tr>
                <tr><td colspan="2" style="height:20px;"></td></tr>

                <!-- Mensaje -->
                <tr>
                  <td colspan="2">
                    <p style="margin:0 0 10px;color:#94A3B8;font-size:10px;font-weight:700;
                               letter-spacing:2.5px;text-transform:uppercase;">
                      Mensaje
                    </p>
                    <div style="background:#F8F4EC;border:1px solid #F0EAE0;
                                border-radius:10px;padding:20px;">
                      <p style="margin:0;color:#334155;font-size:14px;line-height:1.75;
                                 white-space:pre-wrap;">
                        ${escapeHtml(data.mensaje)}
                      </p>
                    </div>
                  </td>
                </tr>

              </table>

              <!-- ── Reply CTA ─────────────────────────────────────────── -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                style="margin-top:36px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Tu%20consulta%20en%20Riviera%20Live%20Consulting"
                       style="display:inline-block;
                              background:linear-gradient(135deg,#1A2E4A,#2E4D74);
                              color:#ffffff;font-size:14px;font-weight:700;
                              padding:14px 36px;border-radius:50px;text-decoration:none;
                              letter-spacing:0.5px;">
                      Responder a ${escapeHtml(data.nombre)} →
                    </a>
                  </td>
                </tr>
              </table>

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
                Este correo fue generado automáticamente desde la Landing Page oficial.<br />
                No responder directamente a este mensaje — usa el botón de arriba.
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
