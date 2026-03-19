import Link from "next/link";
import { companyInfo } from "../../../infrastructure/data/company.data";

// ─── Hero Section ────────────────────────────────────────────────────────────
// Full-viewport landing hero with animated text and scroll indicator

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Layered background ──────────────────────────────────────────── */}
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

      {/* Geometric decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle — top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-gold-500/10" />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-gold-500/10" />

        {/* Gold accent shapes */}
        <div className="absolute top-1/4 -left-10 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-navy-600/20 blur-3xl" />

        {/* Diagonal lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C4983C 0px, #C4983C 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-gold-300 text-xs font-semibold tracking-widest uppercase">
            Consultoría Empresarial Integral
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading font-bold text-white mb-4 animate-fade-in-up">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            {companyInfo.name}
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-gold-400 text-lg sm:text-xl md:text-2xl font-heading font-medium tracking-wide mb-6 animate-fade-in-up [animation-delay:150ms]">
          {companyInfo.tagline}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in [animation-delay:250ms]">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
          <div className="w-2 h-2 rotate-45 bg-gold-500" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
        </div>

        {/* Short description */}
        <p className="text-navy-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up [animation-delay:300ms]">
          Asesoría empresarial especializada en tributaria, laboral, contable y
          jurídica. Su aliado estratégico para el crecimiento sostenible.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:450ms]">
          <Link
            href="#servicios"
            className="w-full sm:w-auto px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Ver nuestros servicios
          </Link>
          <Link
            href="#contacto"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/30 hover:border-white/60 text-white rounded-full transition-all duration-200 hover:bg-white/5"
          >
            Contáctanos
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto animate-fade-in [animation-delay:600ms]">
          {[
            { value: "8+", label: "Servicios" },
            { value: "100%", label: "Personalizado" },
            { value: "∞", label: "Confianza" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-heading font-bold text-gold-400">
                {stat.value}
              </p>
              <p className="text-xs text-navy-400 uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in [animation-delay:800ms]">
        <span className="text-navy-400 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-navy-500 flex items-start justify-center pt-1.5">
          <div
            className="w-1 h-2 rounded-full bg-gold-400"
            style={{
              animation: "scrollDot 1.5s ease-in-out infinite",
            }}
          />
        </div>
        <style>{`
          @keyframes scrollDot {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(8px); opacity: 0.3; }
          }
        `}</style>
      </div>
    </section>
  );
}
