"use client";

import Image from "next/image";
import { companyInfo } from "../../../infrastructure/data/company.data";
import { useInView } from "../../hooks/useInView";

// ─── About / Nosotros Section ────────────────────────────────────────────────

export default function AboutSection() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Image column ────────────────────────────────────────────── */}
          <div
            className={`relative transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-300/40 rounded-2xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Equipo profesional de Riviera Live Consulting"
                width={640}
                height={480}
                className="object-cover w-full h-72 md:h-96"
                priority={false}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-navy-800 text-white rounded-xl px-5 py-4 shadow-xl shadow-navy-950/30">
              <p className="text-gold-400 font-heading font-bold text-2xl">
                Aliados
              </p>
              <p className="text-navy-200 text-xs tracking-wider uppercase">
                Estratégicos
              </p>
            </div>
          </div>

          {/* ── Text column ─────────────────────────────────────────────── */}
          <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-600 text-xs font-semibold uppercase tracking-widest">
                Nosotros
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 leading-tight mb-6">
              Una firma comprometida con tu{" "}
              <span className="text-gold-600">crecimiento</span>
            </h2>

            {/* About paragraphs */}
            {companyInfo.about.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-navy-600 leading-relaxed mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}

            {/* Feature badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Ética Profesional",
                "Confidencialidad",
                "Innovación",
                "Compromiso",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy-50 border border-navy-100 rounded-full text-xs font-medium text-navy-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
