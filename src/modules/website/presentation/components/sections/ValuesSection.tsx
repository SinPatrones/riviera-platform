"use client";

import { valuesData } from "../../../infrastructure/data/values.data";
import { useInView } from "../../hooks/useInView";

// ─── Values Section ──────────────────────────────────────────────────────────

export default function ValuesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="valores" className="py-20 md:py-28 bg-cream-200">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-600 text-xs font-semibold uppercase tracking-widest">
              Lo que nos define
            </span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900">
            Valores Institucionales
          </h2>
          <p className="text-navy-500 mt-3 max-w-xl mx-auto">
            Los principios que guían cada acción y decisión de nuestra firma.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((value, i) => (
            <div
              key={value.id}
              className={`group bg-cream-100 rounded-2xl p-6 border border-cream-300 hover:border-gold-300 hover:shadow-lg hover:shadow-gold-100 hover:-translate-y-1 transition-all duration-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isInView ? `${i * 60}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-navy-800 group-hover:bg-gold-500 flex items-center justify-center mb-4 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gold-400 group-hover:text-navy-950 transition-colors duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={value.icon}
                  />
                </svg>
              </div>

              <h3 className="text-sm font-bold text-navy-800 mb-2 group-hover:text-navy-900 transition-colors">
                {value.title}
              </h3>
              <p className="text-xs text-navy-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
