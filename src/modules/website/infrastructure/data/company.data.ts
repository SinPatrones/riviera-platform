import type { CompanyInfo, ContactInfo } from "../../domain/entities/types";

// ─── Company Information ────────────────────────────────────────────────────
// Edit this object to update all company info displayed on the site

export const companyInfo: CompanyInfo = {
  name: "Riviera Live Consulting",
  tagline: "Soluciones asertivas para tu empresa",
  about:
    "Somos una firma especializada en brindar servicios integrales de asesoría empresarial, orientados a fortalecer la gestión y el desarrollo sostenible de las organizaciones. Nuestro enfoque abarca diversas áreas estratégicas del ámbito empresarial, permitiendo ofrecer soluciones completas que contribuyen al crecimiento, la eficiencia operativa y la toma de decisiones informadas.\n\nContamos con un equipo multidisciplinario de profesionales altamente calificados, comprometidos con la excelencia y con la generación de valor para cada uno de nuestros clientes. Trabajamos con un enfoque basado en la confianza, la responsabilidad y la mejora continua, con el propósito de convertirnos en un aliado estratégico que acompañe a nuestros clientes en el logro de sus objetivos empresariales.",
  mission:
    "Somos una consultora empresarial comprometida con el fortalecimiento y desarrollo de las organizaciones a las que servimos. Nuestra misión es brindar soluciones integrales que optimicen los procesos administrativos y financieros, garantizando una gestión contable oportuna, seguridad en el cumplimiento de las obligaciones tributarias y una adecuada administración en áreas clave como el marketing y la gestión del talento humano. Actuamos con estricto apego a la normativa vigente y con altos estándares de calidad en el servicio.",
  vision:
    "Ser una firma de consultoría empresarial reconocida por su excelencia profesional, innovación y compromiso con el desarrollo sostenible de las organizaciones. Aspiramos a consolidarnos como un aliado estratégico para empresas y emprendedores, destacándonos por la calidad de nuestros servicios, la confianza que generamos en nuestros clientes y nuestra capacidad para ofrecer soluciones integrales que impulsen el crecimiento y la competitividad empresarial.",
};

// ─── Contact Information ────────────────────────────────────────────────────

export const contactInfo: ContactInfo = {
  email: "info@rivieraliveconsulting.com",
  phone: "+51 978 880 277",
  address: "Arequipa, Perú",
  hours: "Lunes a Viernes: 9:00 am - 6:00 pm",
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
};
