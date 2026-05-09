# SkrillaVision

Portfolio site for SkrillaVision — live visuals, VJ work, projection mapping, and event production.

- **Live:** https://skrillavision.com
- **Hosting:** Cloudflare Pages (auto-deploys on push to `main`)
- **Stack:** Astro 5 · Tailwind 4 · GSAP · Lenis

---

## Local development

```bash
npm install
npm run dev
```

Site runs at http://localhost:4321

## Adding portfolio work

1. Drop your image or video into `public/media/portfolio/`
2. Open `src/data/portfolio.ts`
3. Add a new entry to the `portfolio` array referencing the filename
4. Save — the dev server hot-reloads automatically

Example entry:

```ts
{
  id: "ultra-2025",
  title: "Ultra Music Festival 2025",
  category: "festivals",
  year: 2025,
  client: "Ultra Worldwide",
  location: "Miami, FL",
  type: "video",
  src: "/media/portfolio/ultra-2025.mp4",
  poster: "/media/portfolio/ultra-2025-poster.jpg",
  aspect: "wide",
  featured: true,
}
```

## Updating the hero video

1. Drop the video file into `public/media/hero/` (e.g. `hero-loop.mp4`)
2. Update the reference in the homepage hero component (built in Phase 3)

## Updating contact info, socials, nav

Edit `src/data/site.ts`. Email, social links, nav labels — all in one place.

## Deploying

Just push to `main`. Cloudflare Pages picks up the change and rebuilds automatically.

Cloudflare Pages build settings (configured once in the Cloudflare dashboard):
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 20 (read from `.nvmrc`)
