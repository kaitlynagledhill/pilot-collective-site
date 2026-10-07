// content/clients.ts
// Powers the homepage "client logo wall" ONLY — a curated, compact subset.

export type Client = {
  name: string;
  logo?: string;
  featured?: boolean;
  scale?: number;
mobileScale?: number;
  paid?: boolean;
  sector?: "nonprofit" | "brand";
  workSlug?: string;
};

export const clients: Client[] = [
  // --- Nonprofit & Foundations ---
  {
    name: "Meals on Wheels America",
    logo: "/images/clients/meals-on-wheels.png",
    featured: true,
    scale: 2.6,
    sector: "nonprofit",
    workSlug: "meals-on-wheels",
  },
  {
    name: "Zion Forever Project",
    logo: "/images/clients/zion-forever-project.webp",
    featured: true,
    scale: 1.4,
    sector: "nonprofit",
    workSlug: "zion-forever-project",
  },
  {
    name: "The Soloviev Foundation",
    logo: "/images/clients/soloviev-foundation.webp",
    featured: true,
    scale: 1.55,
    paid: true,
    sector: "nonprofit",
    workSlug: "soloviev-foundation",
  },
  {
    name: "American Immigration Council",
    logo: "/images/clients/american-immigration-council.jpg",
    featured: true,
    scale: 3.4,
    sector: "nonprofit",
    workSlug: "american-immigration-council",
  },
  {
    name: "EMERGE125",
    logo: "/images/clients/emerge-125.webp",
    featured: true,
    scale: 1.75,
      mobileScale: 1.4,
    sector: "nonprofit",
    workSlug: "emerge125",
  },
  {
    name: "NorCal Public Media",
    featured: true,
    sector: "nonprofit",
    workSlug: "climate-podcast",
        logo: "/images/clients/norcal-public.webp",
        scale: 3.9,
          mobileScale: 2.8,


  },

  // --- Brands ---
  {
    name: "CBS",
    logo: "/images/clients/cbs.webp",
    featured: true,
    scale: 1.1,
    paid: true,
    sector: "brand",
    workSlug: "cbs",
  },
  {
    name: "Los Angeles Clippers",
    logo: "/images/clients/la-clippers.webp",
    featured: true,
    scale: 1.2,
    sector: "brand",
    workSlug: "los-angeles-clippers",
  },
 
        {
    name: "Paramount",
    sector: "brand",
    scale: 1.3,
    featured: true,
    logo: "/images/clients/paramount.svg",
  },
  {
    name: "Netflix",
    featured: true,
    sector: "brand",
    scale: 2.4,
    logo: "/images/clients/netflix.png",
    workSlug: "dangerous-world-of-comedy",
  },
  {
    name: "National Geographic",
    featured: true,
    sector: "brand",
    logo: "/images/clients/nat-geo.webp",
    workSlug: "bachelors-abroad",
  },

  {
    name: "CNN",
    featured: true,
    sector: "brand",
    logo: "/images/clients/cnn.webp",
    workSlug: "national-comedy-center-cnn",
  },
    {
    name: "Comedy Central",
    featured: true,
    sector: "brand",
        logo: "/images/clients/comedy-central.svg",

  },
  {
    name: "FX",
    sector: "brand",
    featured: true,
        logo: "/images/clients/fx.png",
  },
    {
    name: "National Comedy Center",
    sector: "brand",
    scale: 1.7,
    featured: true,
    logo: "/images/clients/national-comedy-center.png",
  },

    {
    name: "American Public Media",
    logo: "/images/clients/american-public-media.webp",
    featured: true,
    scale: 1.3,
      mobileScale: 1.1,

    sector: "brand",
    workSlug: "american-public-media",
  }, 


];