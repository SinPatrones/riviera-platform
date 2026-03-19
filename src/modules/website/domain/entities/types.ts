// ─── Company & Content Types ───────────────────────────────────────────────

export interface CompanyInfo {
  name: string;
  tagline: string;
  about: string;
  mission: string;
  vision: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
  social: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

// ─── Values ────────────────────────────────────────────────────────────────

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path data
}

// ─── Services ──────────────────────────────────────────────────────────────

export interface ServiceSection {
  title?: string;
  items: string[];
}

export interface ServiceDetails {
  description: string;
  sections: ServiceSection[];
  benefits?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  icon: string; // SVG path data
  details: ServiceDetails;
}
