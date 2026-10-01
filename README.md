# ITBC

Website for the **Information Technology Business Council (ITBC)** — _Building India's Digital Knowledge Ecosystem_.

Built with **Next.js 16** (App Router), **React 19**, **TypeScript** and **Tailwind CSS v4**. Icons from [lucide-react](https://lucide.dev).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Lint with ESLint |

## Project structure

```
src/
  app/            layout, global styles, home page
  components/     one file per page section (Header, Hero, Sidebar, Stakeholders, Hubs, Itccf, StatsBar, Footer, ...)
  data/site.ts    all page content: nav, stats, stakeholders, events, partners
```

Most text and numbers can be changed in `src/data/site.ts` without touching components.

## Placeholders to replace

- **Logo** — `src/components/Logo.tsx` draws an approximation; swap in the official logo.
- **Photos** — stakeholder and ITCCF images load from Unsplash; replace with your own in `public/`.
- **Trusted By** — partner names are shown as text; add official logos once usage rights are confirmed.
- **Newsletter** — the form is not connected to a backend yet (see TODO in `src/components/Newsletter.tsx`).
- **Links** — login pages and "Explore now" links are placeholders.

## Sharing the dev server

`next.config.ts` allows `*.trycloudflare.com`, so you can share a running dev server with a Cloudflare quick tunnel:

```bash
cloudflared tunnel --url http://localhost:3000
```
