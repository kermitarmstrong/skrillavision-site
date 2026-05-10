// Edit this file to update site-wide info, hero copy, about copy, social links, nav, and SEO defaults.

export const site = {
  name: "SkrillaVision",
  tagline: "Live visuals, projection mapping, and event production.",
  description:
    "SkrillaVision is a visual artist creating live event visuals, VJ sets, projection mapping, and immersive content for festivals, clubs, and corporate events.",
  url: "https://skrillavision.com",
  email: "booking@skrillavision.com", // <-- replace with the real booking email
  location: "United States",

  // ---------- Hero (homepage) ----------
  // Drop hero.mp4 and hero-poster.jpg into /public/media/hero/ to activate the video.
  // Until then, a CSS gradient placeholder shows.
  hero: {
    eyebrow: "Live visual artist",
    headline: "Live visuals & production.",
    sub: "Projection mapping, VJ sets, and immersive content for festivals, clubs, and corporate events.",
    video: "/media/hero/hero.mp4",
    poster: "/media/hero/hero-poster.jpg",
    primaryCta: { label: "View Work", href: "/portfolio" },
    secondaryCta: { label: "Get in touch", href: "/contact" },
  },

  // ---------- About teaser (homepage) ----------
  // To swap in the real portrait:
  //   1. Drop portrait.jpg (or any image) into /public/media/about/
  //   2. Update the `image` value below to point at it (e.g. "/media/about/portrait.jpg")
  // Until then, the .gitkeep path triggers the styled placeholder card on the homepage.
  about: {
    teaser: {
      headline: "Visual storytelling for live events.",
      body:
        "SkrillaVision creates immersive visual experiences for festivals, clubs, and corporate stages. Every show is built around the energy in the room — projection mapping, custom content, and live VJ performance designed to amplify the moment.",
      image: "/media/about/.gitkeep",
      cta: { label: "More about SkrillaVision", href: "/about" },
    },
  },

  // ---------- Socials ----------
  socials: [
    { label: "Instagram", url: "https://instagram.com/skrillavision", handle: "@skrillavision" },
    { label: "Vimeo",     url: "https://vimeo.com/skrillavision",     handle: "skrillavision" },
    { label: "YouTube",   url: "https://youtube.com/@skrillavision",  handle: "@skrillavision" },
  ],

  // ---------- Nav ----------
  nav: [
    { label: "Work",     href: "/portfolio" },
    { label: "About",    href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact",  href: "/contact" },
  ],
} as const;

export type Site = typeof site;
