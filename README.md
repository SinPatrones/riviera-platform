# Riviera Platform

Landing page corporativa de **Riviera Live Consulting** — firma especializada en asesoría empresarial, tributaria, laboral y contable.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **next/font** — Geist Sans + Geist Mono + Playfair Display

## Arquitectura

El proyecto sigue **Arquitectura Hexagonal**. Todo lo relacionado con la landing page vive en `src/modules/website`:

```
src/
├── app/
│   ├── (website)/
│   │   ├── layout.tsx        # Layout con Navbar + Footer
│   │   └── page.tsx          # Página principal (home)
│   ├── globals.css           # Paleta de colores + keyframes
│   ├── layout.tsx            # Root layout (fuentes, metadata global)
│   ├── sitemap.ts            # Sitemap generado en build
│   └── robots.ts             # robots.txt
│
└── modules/
    └── website/
        ├── domain/
        │   └── entities/
        │       └── types.ts              # Tipos TypeScript
        ├── infrastructure/
        │   └── data/
        │       ├── company.data.ts       # Info empresa y contacto (JSON)
        │       ├── services.data.ts      # 8 servicios (JSON)
        │       └── values.data.ts        # 8 valores institucionales (JSON)
        └── presentation/
            ├── hooks/
            │   └── useInView.ts          # IntersectionObserver hook
            └── components/
                ├── ui/
                │   ├── Navbar.tsx        # Navbar fija + menú mobile full-screen
                │   ├── Footer.tsx        # Footer con columnas y redes sociales
                │   └── ServiceModal.tsx  # Modal de detalle de servicio
                └── sections/
                    ├── HeroSection.tsx
                    ├── AboutSection.tsx
                    ├── MissionVisionSection.tsx
                    ├── ValuesSection.tsx
                    ├── ServicesSection.tsx
                    └── ContactSection.tsx
```

## Paleta de colores

Definida en `src/app/globals.css` bajo `@theme`. Se puede extender añadiendo nuevas variables al bloque.

| Token | Valor | Uso |
|-------|-------|-----|
| `navy-800` | `#1A2E4A` | Color primario de marca |
| `gold-500` | `#C4983C` | Acento / CTAs |
| `cream-100` | `#FDFAF5` | Fondo principal |

## Edición de contenido

Toda la información del sitio está en objetos JSON — no hace falta tocar los componentes:

| Archivo | Qué contiene |
|---------|-------------|
| `company.data.ts` | Nombre, tagline, about, misión, visión, contacto |
| `services.data.ts` | Los 8 servicios con título, descripción corta, detalle completo y beneficios |
| `values.data.ts` | Los 8 valores institucionales con icono SVG |

## Assets

| Archivo | Descripción |
|---------|-------------|
| `public/images/logo.png` | Ícono cuadrado (881×898) — usado como favicon y en navbar |
| `public/images/nombre.png` | Wordmark horizontal (1592×286) — usado en navbar |

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Favicon

El favicon se controla desde `src/app/layout.tsx` en el campo `metadata.icons`. Para cambiarlo, reemplaza `public/images/logo.png` o actualiza la ruta en ese campo.

## Build

```bash
npm run build
npm start
```
