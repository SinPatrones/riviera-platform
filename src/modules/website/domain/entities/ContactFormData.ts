// ─── Contact Form Data ────────────────────────────────────────────────────────
// Shape of the data submitted from the contact form.

export interface ContactFormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
  recaptchaToken: string;
}
