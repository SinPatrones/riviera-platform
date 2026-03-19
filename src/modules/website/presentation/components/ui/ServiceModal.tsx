"use client";

import { useEffect } from "react";
import type { ServiceItem } from "../../../domain/entities/types";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm animate-fade-in" />

      {/* Modal panel */}
      <div
        className="relative bg-cream-100 rounded-2xl shadow-2xl shadow-navy-950/40 w-full max-w-2xl max-h-[90vh] flex flex-col animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-start gap-4 p-6 border-b border-cream-300">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center flex-shrink-0">
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
                d={service.icon}
              />
            </svg>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-1">
              Nuestros Servicios
            </p>
            <h2
              id="modal-title"
              className="text-xl md:text-2xl font-heading font-bold text-navy-900 leading-tight"
            >
              {service.title}
            </h2>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="w-9 h-9 rounded-full border border-cream-300 flex items-center justify-center text-navy-400 hover:border-navy-300 hover:text-navy-700 transition-colors duration-200 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Description */}
          <p className="text-navy-600 leading-relaxed">
            {service.details.description}
          </p>

          {/* Sections */}
          {service.details.sections.map((section, idx) => (
            <div key={idx}>
              {section.title && (
                <h3 className="text-sm font-semibold text-navy-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-4 h-px bg-gold-500 inline-block" />
                  {section.title}
                </h3>
              )}
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-navy-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Benefits */}
          {service.details.benefits && (
            <div className="bg-navy-800 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">
                Beneficios para tu empresa
              </h3>
              <ul className="space-y-2">
                {service.details.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-navy-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="border-t border-cream-300 p-4 flex items-center justify-between gap-4">
          <p className="text-xs text-navy-400">
            ¿Te interesa este servicio?
          </p>
          <a
            href="#contacto"
            onClick={onClose}
            className="px-5 py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-md hover:shadow-gold-500/30"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
}
