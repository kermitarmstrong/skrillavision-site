// Edit this file to update site-wide info, social links, nav labels, and SEO defaults.

export const site = {
  name: "SkrillaVision",
  tagline: "Live visuals, projection mapping, and event production.",
  description:
    "SkrillaVision is a visual artist creating live event visuals, VJ sets, projection mapping, and immersive content for festivals, clubs, and corporate events.",
  url: "https://skrillavision.com",
  email: "booking@skrillavision.com", // <-- replace with the real booking email later
  location: "United States",

  socials: [
    { label: "Instagram", url: "https://instagram.com/skrillavision", handle: "@skrillavision" },
    { label: "Vimeo",     url: "https://vimeo.com/skrillavision",     handle: "skrillavision" },
    { label: "YouTube",   url: "https://youtube.com/@skrillavision",  handle: "@skrillavision" },
  ],

  nav: [
    { label: "Work",     href: "/portfolio" },
    { label: "About",    href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact",  href: "/contact" },
  ],
} as const;

export type Site = typeof site;
