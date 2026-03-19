"use client";

import { companyInfo } from "../../../infrastructure/data/company.data";
import { useInView } from "../../hooks/useInView";

// ─── Mission & Vision Section ────────────────────────────────────────────────

export default function MissionVisionSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="mision-vision"
      className="py-20 md:py-28 bg-navy-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold-500/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-navy-800/50 translate-x-1/2 translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C4983C 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
              Quiénes somos
            </span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Misión &amp; Visión
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission card */}
          <div
            className={`bg-navy-800/60 border border-navy-700/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm transition-all duration-700 delay-100 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gold-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-heading font-bold text-white mb-1">
              Misión
            </h3>
            <div className="h-px w-12 bg-gold-500 mb-5" />
            <p className="text-navy-300 leading-relaxed text-sm md:text-base">
              {companyInfo.mission}
            </p>
          </div>

          {/* Vision card */}
          <div
            className={`bg-gold-500/5 border border-gold-500/20 rounded-2xl p-8 md:p-10 transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gold-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-heading font-bold text-white mb-1">
              Visión
            </h3>
            <div className="h-px w-12 bg-gold-500 mb-5" />
            <p className="text-navy-300 leading-relaxed text-sm md:text-base">
              {companyInfo.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
