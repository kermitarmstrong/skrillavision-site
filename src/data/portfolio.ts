// To add a new portfolio item:
// 1. Drop the image or video into /public/media/portfolio/
// 2. Add an entry below referencing the filename
// 3. Save — the dev server hot-reloads automatically
//
// Items with `featured: true` appear on the homepage's 2×2 work preview grid.

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
  type: "image" | "video";
  src: string;          // e.g. "/media/portfolio/festival-2024.jpg"
  poster?: string;      // optional poster for videos
  aspect?: "square" | "portrait" | "landscape" | "wide";
  featured?: boolean;
};

export const portfolio: PortfolioItem[] = [
  // ===== Placeholders — replace these with real work =====
  // The homepage shows up to 4 featured items. Drop real media into
  // /public/media/portfolio/, then update each entry's `src` (and `poster`
  // for videos) to point at the new files.
  {
    id: "placeholder-01",
    title: "Festival Mainstage",
    category: "festivals",
    year: 2025,
    client: "Replace me",
    location: "Replace me",
    description:
      "Replace with a real project description once media is added to /public/media/portfolio/",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "placeholder-02",
    title: "Club Residency",
    category: "clubs",
    year: 2025,
    client: "Replace me",
    location: "Replace me",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "placeholder-03",
    title: "Brand Activation",
    category: "corporate",
    year: 2024,
    client: "Replace me",
    location: "Replace me",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "placeholder-04",
    title: "Architectural Mapping",
    category: "projection",
    year: 2024,
    client: "Replace me",
    location: "Replace me",
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
