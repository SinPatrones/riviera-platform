import type { Metadata } from "next";
import Navbar from "@/modules/website/presentation/components/ui/Navbar";
import Footer from "@/modules/website/presentation/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "Riviera Live Consulting | Soluciones asertivas para tu empresa",
    template: "%s | Riviera Live Consulting",
  },
  description:
    "Firma especializada en asesoría empresarial, tributaria, laboral y contable en Perú. Soluciones integrales para el crecimiento sostenible de tu empresa.",
  openGraph: {
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Riviera Live Consulting",
      },
    ],
  },
};

// ─── Website Route Group Layout ──────────────────────────────────────────────
// Wraps all pages under (website) with the shared Navbar and Footer.

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
