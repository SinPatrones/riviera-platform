"use client";

import { useInView } from "../../hooks/useInView";
import { contactInfo } from "../../../infrastructure/data/company.data";

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

export default function ContactSection() {
  const { ref, isInView } = useInView();

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
          {/* ── Left: info ──────────────────────────────────────────────── */}
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

            {/* Contact items */}
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
                        className="w-4.5 h-4.5 text-gold-400 w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={item.icon}
                        />
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

          {/* ── Right: contact form ──────────────────────────────────────── */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-navy-800/60 backdrop-blur-sm border border-navy-700/50 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-heading font-semibold text-white mb-6">
                Envíanos un mensaje
              </h3>

              {/* NOTE: Form action/handler should be wired to a backend or service */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-xs text-navy-300 uppercase tracking-wider mb-1.5"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 bg-navy-900/50 border border-navy-600 focus:border-gold-500 text-white placeholder-navy-500 rounded-xl text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-xs text-navy-300 uppercase tracking-wider mb-1.5"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      placeholder="Tu empresa"
                      className="w-full px-4 py-3 bg-navy-900/50 border border-navy-600 focus:border-gold-500 text-white placeholder-navy-500 rounded-xl text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-navy-300 uppercase tracking-wider mb-1.5"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 bg-navy-900/50 border border-navy-600 focus:border-gold-500 text-white placeholder-navy-500 rounded-xl text-sm outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="servicio"
                    className="block text-xs text-navy-300 uppercase tracking-wider mb-1.5"
                  >
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="w-full px-4 py-3 bg-navy-900/50 border border-navy-600 focus:border-gold-500 text-white rounded-xl text-sm outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="bg-navy-900">
                      Selecciona un servicio
                    </option>
                    <option value="tributaria" className="bg-navy-900">
                      Asesoría Tributaria
                    </option>
                    <option value="laboral" className="bg-navy-900">
                      Asesoría Laboral
                    </option>
                    <option value="constitucion" className="bg-navy-900">
                      Constitución de Empresas
                    </option>
                    <option value="planillas" className="bg-navy-900">
                      Administración de Planillas
                    </option>
                    <option value="seleccion" className="bg-navy-900">
                      Selección de Personal
                    </option>
                    <option value="auditoria-contable" className="bg-navy-900">
                      Auditoría Contable y Financiera
                    </option>
                    <option value="auditoria-laboral" className="bg-navy-900">
                      Auditoría Laboral
                    </option>
                    <option value="juridica" className="bg-navy-900">
                      Asesoría Jurídica
                    </option>
                    <option value="otros" className="bg-navy-900">
                      Otros
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-xs text-navy-300 uppercase tracking-wider mb-1.5"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos sobre tu empresa y cómo podemos ayudarte..."
                    className="w-full px-4 py-3 bg-navy-900/50 border border-navy-600 focus:border-gold-500 text-white placeholder-navy-500 rounded-xl text-sm outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5 active:translate-y-0 text-sm"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
