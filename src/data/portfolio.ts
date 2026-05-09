// To add a new portfolio item:
// 1. Drop the image or video into /public/media/portfolio/
// 2. Add an entry below referencing the filename
// 3. Save — the dev server hot-reloads automatically

export type PortfolioCategory =
  | "festivals"
  | "corporate"
  | "clubs"
  | "private"
  | "projection";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  year: number;
  client?: string;
  location?: string;
  description?: string;
  // Media: file paths relative to /public, OR external (Vimeo/YouTube) embed URLs
  type: "image" | "video";
  src: string;          // e.g. "/media/portfolio/festival-2024.jpg"
  poster?: string;      // optional poster image for videos
  aspect?: "square" | "portrait" | "landscape" | "wide"; // grid hint, default landscape
  featured?: boolean;   // if true, may appear on homepage preview
};

export const portfolio: PortfolioItem[] = [
  // Placeholder — replace once real media is added.
  {
    id: "placeholder-01",
    title: "Sample Project",
    category: "festivals",
    year: 2025,
    client: "Replace me",
    location: "Replace me",
    description:
      "Replace this placeholder once real media is added to /public/media/portfolio/",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
    featured: true,
  },
];

export const categories: { id: PortfolioCategory | "all"; label: string }[] = [
  { id: "all",        label: "All Work" },
  { id: "festivals",  label: "Festivals" },
  { id: "clubs",      label: "Clubs" },
  { id: "corporate",  label: "Corporate" },
  { id: "private",    label: "Private Events" },
  { id: "projection", label: "Projection Mapping" },
];
