"use client";

import { useState } from "react";
import { servicesData } from "../../../infrastructure/data/services.data";
import ServiceModal from "../ui/ServiceModal";
import type { ServiceItem } from "../../../domain/entities/types";
import { useInView } from "../../hooks/useInView";

// ─── Services Section ────────────────────────────────────────────────────────
// Cards with a "threading line" visual effect: each card has horizontal accent
// lines + a diamond connector at the top, creating a continuous visual thread
// across all cards in a row. Click any card to open its detail modal.

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { ref, isInView } = useInView();

  return (
    <>
      <section id="servicios" className="py-20 md:py-28 bg-cream-100 relative overflow-hidden">
        {/* Subtle background dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1A2E4A 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-600 text-xs font-semibold uppercase tracking-widest">
                Lo que ofrecemos
              </span>
              <div className="h-px w-8 bg-gold-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900">
              Nuestros Servicios
            </h2>
            <p className="text-navy-500 mt-3 max-w-xl mx-auto">
              Haz clic en cualquier servicio para conocer todos los detalles de
              lo que podemos hacer por tu empresa.
            </p>
          </div>

          {/* ── Cards grid with threading line effect ───────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                isVisible={isInView}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>

          {/* Bottom note */}
          <p
            className={`text-center text-xs text-navy-400 mt-10 transition-all duration-700 delay-500 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            ¿No encuentras lo que buscas?{" "}
            <a href="#contacto" className="text-gold-600 hover:text-gold-500 font-medium underline underline-offset-2">
              Consúltanos
            </a>
          </p>
        </div>
      </section>

      {/* Detail modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  isVisible: boolean;
  onClick: () => void;
}

function ServiceCard({ service, index, isVisible, onClick }: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group text-left w-full bg-white rounded-2xl overflow-hidden border border-cream-300 hover:border-gold-300 hover:shadow-xl hover:shadow-navy-900/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 70}ms` : "0ms",
      }}
      aria-label={`Ver detalles de ${service.title}`}
    >
      {/* ── Threading line element at card top ──────────────────────────── */}
      {/* The line + diamond creates a visual "thread" connecting all cards  */}
      <div className="flex items-center px-0 -mb-px relative">
        {/* Left line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-300 group-hover:to-gold-500 transition-colors duration-300" />
        {/* Diamond connector */}
        <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 group-hover:bg-gold-500 group-hover:border-gold-500 bg-white transition-all duration-300 flex-shrink-0 mx-0.5 relative z-10" />
        {/* Right line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-300 group-hover:to-gold-500 transition-colors duration-300" />
      </div>

      {/* Card body */}
      <div className="p-6">
        {/* Icon */}
        <div className="w-11 h-11 rounded-xl bg-navy-50 group-hover:bg-navy-800 flex items-center justify-center mb-4 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-navy-700 group-hover:text-gold-400 transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={service.icon}
            />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-navy-800 group-hover:text-navy-900 mb-2 leading-snug transition-colors">
          {service.title}
        </h3>

        {/* Short description */}
        <p className="text-xs text-navy-400 leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>

        {/* CTA */}
        <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold-600 group-hover:text-gold-500 transition-colors">
          <span>Ver detalles</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>

      {/* Bottom accent bar — visible on hover */}
      <div className="h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </button>
  );
}
