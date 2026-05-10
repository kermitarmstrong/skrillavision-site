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

  // ---------- About teaser (homepage) and full About page ----------
  about: {
    teaser: {
      headline: "Visual storytelling for live events.",
      body:
        "SkrillaVision creates immersive visual experiences for festivals, clubs, and corporate stages. Every show is built around the energy in the room — projection mapping, custom content, and live VJ performance designed to amplify the moment.",
      image: "/media/about/.gitkeep",
      cta: { label: "More about SkrillaVision", href: "/about" },
    },
    // Full About page — currently placeholder copy. Edit these strings to
    // customize the page. Drop portrait.jpg into /public/media/about/ and
    // update `portrait` to point at it.
    full: {
      eyebrow: "About",
      headline: "Visual artist for live events.",
      intro:
        "SkrillaVision is the work of an artist focused on creating immersive visual experiences for festivals, clubs, and corporate events.",
      bio:
        "Real bio content is in development. Check back soon, or get in touch directly to learn more about current work and bookings.",
      portrait: "/media/about/.gitkeep",
      specialties: [
        "VJ Performance",
        "Projection Mapping",
        "Content Creation",
        "Event Visual Design",
        "Stage & Lighting Concepts",
        "Live Visual Direction",
      ],
    },
  },

  // ---------- Services page ----------
  // Edit titles, descriptions, and pricing copy below to customize.
  services: {
    eyebrow: "Services",
    headline: "Visual production at every scale.",
    intro:
      "Live visuals, projection mapping, content creation, and event direction. Placeholder copy — full descriptions and case studies coming soon.",
    list: [
      {
        title: "VJ Performance",
        description:
          "Live visual mixing synced to music. Real-time performance for clubs, festivals, and tour dates.",
      },
      {
        title: "Projection Mapping",
        description:
          "Custom-mapped visuals on stages, walls, sculptures, and architectural surfaces.",
      },
      {
        title: "Content Creation",
        description:
          "Custom visual content built specifically for your show, brand, or event theme.",
      },
      {
        title: "Visual Direction",
        description:
          "End-to-end visual concept, design, and execution for major events.",
      },
      {
        title: "Stage & Lighting Concepts",
        description:
          "Coordinated visual and lighting design that complements the performance.",
      },
      {
        title: "Event Production Support",
        description:
          "Full visual production — from concept through execution night-of.",
      },
    ],
    pricing: {
      eyebrow: "Pricing",
      headline: "Custom quotes per project.",
      body:
        "Every event is different. Send the details — venue, date, scope — and we'll put together a tailored quote.",
      cta: { label: "Request a quote", href: "/contact" },
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
