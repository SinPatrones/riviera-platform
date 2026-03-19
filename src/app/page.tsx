import type { Metadata } from "next";
import HeroSection from "@/modules/website/presentation/components/sections/HeroSection";
import AboutSection from "@/modules/website/presentation/components/sections/AboutSection";
import MissionVisionSection from "@/modules/website/presentation/components/sections/MissionVisionSection";
import ValuesSection from "@/modules/website/presentation/components/sections/ValuesSection";
import ServicesSection from "@/modules/website/presentation/components/sections/ServicesSection";
import ContactSection from "@/modules/website/presentation/components/sections/ContactSection";
import Navbar from "@/modules/website/presentation/components/ui/Navbar";
import Footer from "@/modules/website/presentation/components/ui/Footer";

// ─── SEO structured data (JSON-LD) ──────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Riviera Live Consulting",
  description:
    "Firma especializada en asesoría empresarial, tributaria, laboral y contable en Perú.",
  slogan: "Soluciones asertivas para tu empresa",
  url: "https://www.rivieraliveconsulting.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  serviceType: [
    "Asesoría Tributaria",
    "Asesoría Laboral",
    "Constitución de Empresas",
    "Administración de Planillas",
    "Selección de Personal",
    "Auditoría Contable y Financiera",
    "Auditoría Laboral",
    "Asesoría Jurídica",
  ],
};

export const metadata: Metadata = {
  title: "Riviera Live Consulting | Soluciones asertivas para tu empresa",
  description:
    "Firma especializada en asesoría empresarial, tributaria, laboral y contable en Perú. Somos tu aliado estratégico para el crecimiento sostenible de tu empresa.",
  alternates: {
    canonical: "/",
  },
};

// ─── Home Page ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ValuesSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
