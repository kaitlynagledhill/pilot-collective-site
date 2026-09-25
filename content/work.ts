export type WorkItem = {
  title: string;
  category: string;
  summary: string;
  size: "large" | "medium" | "small";
  featured?: boolean;
  image?: string;
  slug: string; // e.g. "meals-on-wheels"
};

export const workItems: WorkItem[] = [
  {
    title: "Meals on Wheels America",
    category: "Social impact · Talent",
    summary:
      "Mission-driven campaigns and talent partnerships built for national awareness.",
    size: "medium",
    featured: true,
    image: "/work/meals-on-wheels.jpg",
    slug: "meals-on-wheels",
  },
  {
    title: "Zion Forever Project",
    category: "Conservation · Nonprofit · Talent",
    summary:
      "Talent partnership strategy supporting the official nonprofit partner of Zion National Park.",
    size: "large",
    featured: true,
    image: "/work/zion-forever.jpg",
    slug: "zion-forever-project",
  },
  {
    title: "The Adam Ray Show",
    category: "Entertainment · Podcast · Talent",
    summary:
      "Talent partnership work supporting a Netflix original podcast blending celebrity interviews with character comedy.",
    size: "medium",
    featured: true,
    image: "/work/adam-ray-show.jpg",
    slug: "adam-ray-show",
  },
  {
    title: "Path of Liberty",
    category: "Public art · Storytelling · Culture",
    summary:
      "A six-acre public art installation with C&G Partners, capturing voices from across the country to explore what it means to be American.",
    size: "large",
    featured: true,
    image: "/work/path-of-liberty.jpg",
    slug: "path-of-liberty",
  },
  {
    title: "Los Angeles Clippers",
    category: "Sports · Brand partnerships",
    summary:
      "Talent partnership strategy supporting one of the NBA's most recognizable franchises.",
    size: "medium",
    featured: true,
    slug: "los-angeles-clippers",
  },
];