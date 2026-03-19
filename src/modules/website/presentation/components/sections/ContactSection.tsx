"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useInView } from "../../hooks/useInView";
import { contactInfo } from "../../../infrastructure/data/company.data";
import type { ContactFormData } from "../../../domain/entities/ContactFormData";

// Public site key — safe to expose in client code
const RECAPTCHA_SITE_KEY = "6LeTepAsAAAAAMzNXsC34N9nzZ1ZYMF3lGR9PdXL";

// ─── Contact info items ──────────────────────────────────────────────────────
const contactItems = [
  {
    label: "Correo electrónico",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    label: "Teléfono",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    label: "Ubicación",
    value: contactInfo.address,
    href: "#",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    label: "Horario de atención",
    value: contactInfo.hours,
    href: "#",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

// ─── Form submission status ───────────────────────────────────────────────────
type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const { ref, isInView } = useInView();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // ── Form submit handler ────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Collect reCAPTCHA token
    const recaptchaToken = recaptchaRef.current?.getValue() ?? "";
    if (!recaptchaToken) {
      setStatus("error");
      setErrorMessage("Por favor completa el reCAPTCHA antes de enviar.");
      return;
    }

    // Collect form fields via FormData
    const formData = new FormData(e.currentTarget);
    const payload: ContactFormData = {
      nombre: (formData.get("nombre") as string).trim(),
      empresa: (formData.get("empresa") as string).trim(),
      email: (formData.get("email") as string).trim(),
      telefono: (formData.get("telefono") as string).trim(),
      servicio: (formData.get("servicio") as string).trim(),
      mensaje: (formData.get("mensaje") as string).trim(),
      recaptchaToken,
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await res.json()) as { message: string };

      if (!res.ok) {
        throw new Error(json.message ?? "Error desconocido.");
      }

      setStatus("success");
      formRef.current?.reset();
      recaptchaRef.current?.reset();
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Ocurrió un error. Inténtalo de nuevo.";
      setStatus("error");
      setErrorMessage(msg);
      recaptchaRef.current?.reset();
    }
  };

  const handleRetry = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-navy-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-gold-500/10" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #C4983C 0px, #C4983C 1px, transparent 1px, transparent 50px)",
          }}
        />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: contact info ──────────────────────────────────────── */}
          <div
            className={`transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
                Comunícate con nosotros
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Hablemos sobre tu empresa
            </h2>

            <p className="text-navy-300 leading-relaxed mb-10">
              Estamos listos para acompañarte en cada etapa del crecimiento de
              tu negocio. Contáctanos y recibe orientación especializada sin
              compromiso.
            </p>

            <ul className="space-y-5">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-start gap-4 hover:text-gold-300 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-navy-800 group-hover:bg-gold-500/10 border border-navy-700 group-hover:border-gold-500/30 flex items-center justify-center flex-shrink-0 transition-all duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gold-400"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-navy-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-white text-sm font-medium group-hover:text-gold-300 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: form ─────────────────────────────────────────────── */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-navy-800/60 backdrop-blur-sm border border-navy-700/50 rounded-2xl p-6 md:p-8">

              {/* ── Success state ──────────────────────────────────────── */}
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-8 gap-5">
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8 text-gold-400"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-navy-300 text-sm leading-relaxed max-w-xs mx-auto">
                      Recibimos tu consulta. Nos pondremos en contacto contigo
                      a la brevedad posible.
                    </p>
                  </div>
                  <button
                    onClick={handleRetry}
                    className="mt-2 text-xs text-navy-400 hover:text-gold-400 underline underline-offset-2 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-heading font-semibold text-white mb-6">
                    Envíanos un mensaje
                  </h3>

                  {/* ── Error banner ─────────────────────────────────── */}
                  {status === "error" && (
                    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                      <p className="text-red-300 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  {/* ── Form ─────────────────────────────────────────── */}
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nombre" className="block text-xs text-navy-300 uppercase tracking-wider mb-1.5">
                          Nombre <span className="text-gold-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          placeholder="Tu nombre"
                          required
                          disabled={status === "loading"}
                          className="w-full px-4 py-3 bg-navy-900/50 border border-navy-600 focus:border-gold-500 text-white placeholder-navy-500 rounded-xl text-sm outline-none transition-colors duration-200 disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label htmlFor="empresa" className="block text-xs text-navy-300 uppercase tracking-wider mb-1.5">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          placeholder="Tu empresa"
                          disabled={status === "loading"}
                          className="w-full px-4 py-3 bg-navy-900/50 border border-navy-600 focus:border-gold-500 text-white placeholder-navy-500 rounded-xl text-sm outline-none transition-colors duration-200 disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs text-navy-300 uppercase tracking-wider mb-1.5">
                          Correo electrónico <span className="text-gold-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="tu@correo.com"
                          required
                          disabled={status === "loading"}
                          className="w-full px-4 py-3 bg-navy-900/50 border border-navy-600 focus:border-gold-500 text-white placeholder-navy-500 rounded-xl text-sm outline-none transition-colors duration-200 disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-xs text-navy-300 uppercase tracking-wider mb-1.5">
                          Teléfono / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          placeholder="+51 999 999 999"
                          disabled={status === "loading"}
                          className="w-full px-4 py-3 bg-navy-900/50 border border-navy-600 focus:border-gold-500 text-white placeholder-navy-500 rounded-xl text-sm outline-none transition-colors duration-200 disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="servicio" className="block text-xs text-navy-300 uppercase tracking-wider mb-1.5">
                        Servicio de interés
                      </label>
                      <select
                        id="servicio"
                        name="servicio"
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 bg-navy-900/50 border border-navy-600 focus:border-gold-500 text-white rounded-xl text-sm outline-none transition-colors duration-200 appearance-none disabled:opacity-50"
                      >
                        <option value="" className="bg-navy-900">Selecciona un servicio</option>
                        <option value="tributaria" className="bg-navy-900">Asesoría Tributaria</option>
                        <option value="laboral" className="bg-navy-900">Asesoría Laboral</option>
                        <option value="constitucion" className="bg-navy-900">Constitución de Empresas</option>
                        <option value="planillas" className="bg-navy-900">Administración de Planillas</option>
                        <option value="seleccion" className="bg-navy-900">Selección de Personal</option>
                        <option value="auditoria-contable" className="bg-navy-900">Auditoría Contable y Financiera</option>
                        <option value="auditoria-laboral" className="bg-navy-900">Auditoría Laboral</option>
                        <option value="juridica" className="bg-navy-900">Asesoría Jurídica</option>
                        <option value="otros" className="bg-navy-900">Otros</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-xs text-navy-300 uppercase tracking-wider mb-1.5">
                        Mensaje <span className="text-gold-500">*</span>
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={4}
                        required
                        disabled={status === "loading"}
                        placeholder="Cuéntanos sobre tu empresa y cómo podemos ayudarte..."
                        className="w-full px-4 py-3 bg-navy-900/50 border border-navy-600 focus:border-gold-500 text-white placeholder-navy-500 rounded-xl text-sm outline-none transition-colors duration-200 resize-none disabled:opacity-50"
                      />
                    </div>

                    {/* reCAPTCHA widget */}
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        theme="dark"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5 active:translate-y-0 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <svg
                            className="animate-spin w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12" cy="12" r="10"
                              stroke="currentColor" strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        "Enviar mensaje"
                      )}
                    </button>

                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
