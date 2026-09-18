export type WorkItem = {
  title: string;
  category: string;
  summary: string;
  size: "large" | "medium" | "small"; // controls box size in the grid
};

export const workItems: WorkItem[] = [
  {
    title: "Path of Liberty",
    category: "Public art · Storytelling · Culture",
    summary:
      "A six-acre public art installation with C&G Partners, capturing voices from across the country to explore what it means to be American.",
    size: "large",
  },
  {
    title: "Meals on Wheels America",
    category: "Social impact · Talent",
    summary:
      "Mission-driven campaigns and talent partnerships built for national awareness.",
    size: "medium",
  },
  // add more here as placeholders — same shape, no extra setup needed
];