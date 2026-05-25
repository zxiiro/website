# zxiiro.ca

Personal site for Thanh Ha — built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # outputs to ./dist
npm run preview      # serve ./dist locally
```

## Structure

- `src/pages/` — route entrypoints
- `src/layouts/` — page shells (`<head>`, theme bootstrap)
- `src/components/` — section + UI components
- `src/data/` — profile, experience, skills content (edit these to update the site)
- `public/` — static assets served at the site root

## Deploy

Static output in `dist/` is published to the [zxiiro.github.io](https://github.com/zxiiro/zxiiro.github.io) repo, which serves `www.zxiiro.ca` via GitHub Pages. Deployment automation TBD (Phase 2).
