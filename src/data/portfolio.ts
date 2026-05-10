// To add a new portfolio item:
// 1. Drop the image or video into /public/media/portfolio/
// 2. Add an entry below referencing the filename
// 3. Save — the dev server hot-reloads automatically
//
// Items with `featured: true` appear on the homepage's 2×2 work preview grid.
// All items appear on the /portfolio page, filterable by category.

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
  src: string;
  poster?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
  featured?: boolean;
};

export const portfolio: PortfolioItem[] = [
  // ===== Placeholders — replace these with real work =====
  // Drop real media into /public/media/portfolio/, then update each entry's
  // `src` (and `poster` for videos) to point at the new files.

  // ----- Festivals -----
  {
    id: "festival-01",
    title: "Mainstage Mapping",
    category: "festivals",
    year: 2025,
    client: "Replace me",
    location: "Replace me",
    description: "Replace with a real description.",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "festival-02",
    title: "Sunset Set",
    category: "festivals",
    year: 2024,
    client: "Replace me",
    location: "Replace me",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
  },
  {
    id: "festival-03",
    title: "After Hours Tent",
    category: "festivals",
    year: 2024,
    client: "Replace me",
    location: "Replace me",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
  },

  // ----- Clubs -----
  {
    id: "club-01",
    title: "Resident Visuals",
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
    id: "club-02",
    title: "Touring Set",
    category: "clubs",
    year: 2024,
    client: "Replace me",
    location: "Replace me",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
  },

  // ----- Corporate -----
  {
    id: "corp-01",
    title: "Brand Activation",
    category: "corporate",
    year: 2025,
    client: "Replace me",
    location: "Replace me",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "corp-02",
    title: "Conference Keynote",
    category: "corporate",
    year: 2024,
    client: "Replace me",
    location: "Replace me",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
  },

  // ----- Private -----
  {
    id: "private-01",
    title: "Private Event Visuals",
    category: "private",
    year: 2025,
    client: "Replace me",
    location: "Replace me",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
  },

  // ----- Projection Mapping -----
  {
    id: "proj-01",
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
  {
    id: "proj-02",
    title: "Product Launch",
    category: "projection",
    year: 2025,
    client: "Replace me",
    location: "Replace me",
    type: "image",
    src: "/media/portfolio/.gitkeep",
    aspect: "landscape",
  },
];

export const categories: { id: PortfolioCategory | "all"; label: string }[] = [
  { id: "all",        label: "All Work" },
  { id: "festivals",  label: "Festivals" },
  { id: "clubs",      label: "Clubs" },
  { id: "corporate",  label: "Corporate" },
  { id: "private",    label: "Private" },
  { id: "projection", label: "Projection" },
];
