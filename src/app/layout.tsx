import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rivieraliveconsulting.com"),
  title: {
    default: "Riviera Live Consulting | Soluciones asertivas para tu empresa",
    template: "%s | Riviera Live Consulting",
  },
  description:
    "Firma especializada en asesoría empresarial, tributaria, laboral y contable en Perú. Soluciones integrales para el crecimiento sostenible de tu empresa.",
  keywords: [
    "asesoría contable",
    "asesoría tributaria",
    "consultoría empresarial",
    "SUNAT",
    "planilla",
    "auditoría financiera",
    "auditoría laboral",
    "constitución de empresas",
    "selección de personal",
    "Perú",
    "Lima",
  ],
  authors: [{ name: "Riviera Live Consulting" }],
  creator: "Riviera Live Consulting",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://www.rivieraliveconsulting.com",
    siteName: "Riviera Live Consulting",
    title: "Riviera Live Consulting | Soluciones asertivas para tu empresa",
    description:
      "Firma especializada en asesoría empresarial, tributaria, laboral y contable en Perú.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riviera Live Consulting",
    description:
      "Soluciones integrales de consultoría empresarial, tributaria y laboral.",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
