"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Navigation links — update labels/hrefs here to change the menu
const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Misión & Visión", href: "#mision-vision" },
  { label: "Valores", href: "#valores" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add shadow and background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* ── Desktop / Mobile Header Bar ───────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/30"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo — white pill container ensures contrast on any dark background.
               logo.png (881×898 ≈ square icon) + nombre.png (1592×286 wordmark).
               Wordmark is hidden on very small screens to save space. */}
          <Link
            href="#inicio"
            className="group flex-shrink-0"
            onClick={closeMenu}
          >
            <div className="flex items-center gap-2 md:gap-2.5 bg-white/95 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow-md shadow-navy-950/30 group-hover:shadow-lg group-hover:shadow-navy-950/40 group-hover:bg-white transition-all duration-200">
              {/* Square icon — always visible */}
              <Image
                src="/images/logo.png"
                alt="Riviera Live Consulting"
                width={881}
                height={898}
                className="h-8 w-auto md:h-10"
                priority
              />
              {/* Wordmark — hidden on xs, visible from sm up */}
              <Image
                src="/images/nombre.png"
                alt="Riviera Live Consulting — Soluciones asertivas para tu empresa"
                width={1592}
                height={286}
                className="hidden sm:block h-6 w-auto md:h-7"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-navy-100 hover:text-gold-300 transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contacto"
                className="ml-4 px-5 py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-px active:translate-y-0"
              >
                Contáctanos
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
            className="md:hidden flex flex-col gap-1.5 p-2 group"
          >
            <span className="block w-6 h-0.5 bg-white transition-all duration-200 group-hover:bg-gold-300" />
            <span className="block w-4 h-0.5 bg-white transition-all duration-200 group-hover:bg-gold-300" />
            <span className="block w-6 h-0.5 bg-white transition-all duration-200 group-hover:bg-gold-300" />
          </button>
        </nav>
      </header>

      {/* ── Mobile Full-Screen Menu ────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col bg-navy-950 transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-6 h-16">
          {/* Mobile menu logo — white pill, same treatment as navbar */}
          <div className="flex items-center gap-2 bg-white/95 rounded-xl px-2.5 py-1.5 shadow-md shadow-navy-950/30">
            <Image
              src="/images/logo.png"
              alt="Riviera Live Consulting"
              width={881}
              height={898}
              className="h-8 w-auto"
            />
            <Image
              src="/images/nombre.png"
              alt="Riviera Live Consulting — Soluciones asertivas para tu empresa"
              width={1592}
              height={286}
              className="h-6 w-auto"
            />
          </div>
          <button
            onClick={closeMenu}
            aria-label="Cerrar menú"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-navy-700 text-white hover:border-gold-400 hover:text-gold-400 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Decorative line */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent mx-6" />

        {/* Nav links */}
        <nav className="flex flex-col justify-center flex-1 px-8 gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="group flex items-center gap-4 py-4 border-b border-navy-800 last:border-b-0"
              style={{
                transitionDelay: isOpen ? `${i * 60}ms` : "0ms",
              }}
            >
              <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover:bg-gold-300 transition-colors duration-200 flex-shrink-0" />
              <span className="text-2xl font-heading font-medium text-white group-hover:text-gold-300 transition-colors duration-200">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Bottom tagline */}
        <p className="text-navy-400 text-xs text-center pb-8 tracking-widest uppercase">
          Soluciones asertivas para tu empresa
        </p>
      </div>
    </>
  );
}
