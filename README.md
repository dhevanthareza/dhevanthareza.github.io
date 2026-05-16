# Portfolio — Dhevan Anthareza

Static portfolio site. No build step. No dependencies.

## Structure

```
index.html            ← all content (edit here for copy changes)
assets/
  styles.css          ← all styling (CSS custom properties at top of file)
  main.js             ← filter tabs, expand/collapse, scroll reveals
  *.webp              ← screenshots
```

## Run locally

Pick any static server:

```bash
npx serve
# or
python3 -m http.server
# or VS Code "Live Server" extension
```

Then open `http://localhost:3000` (or whatever port).

## Edit content

- **Hero/contact/stats** → search `index.html` for the section.
- **Skills** → `<section class="skills">` block.
- **Projects** → `<article class="pcard">` blocks. Each has thumb, metrics, overview, contributions, stack, shots.
- **Experience** → `<ol class="timeline">` block.

## Edit styling

`assets/styles.css` — all design tokens are CSS custom properties at the top of the file:

```css
:root {
  --paper: #f6f1e7;      /* page background */
  --ink: #1c1815;        /* primary text */
  --accent: #365314;     /* olive green accent */
  --font-display: "Fraunces", ...;
  --font-body: "Inter", ...;
}
```

Change one variable and it propagates everywhere.

## Performance notes

- All images: WebP, sized to actual rendered max-width, lazy-loaded, `width`/`height` set to prevent CLS.
- Hero thumb (`dm201.webp`) preloaded for fast LCP.
- Fonts loaded with `print` swap trick to avoid render-blocking.
- ~3KB CSS, ~2KB JS, no third-party scripts.

## SEO

- Semantic HTML (header/main/footer, h1/h2/h3 hierarchy).
- Meta description, Open Graph, Twitter cards.
- JSON-LD Person schema.
- `canonical` URL — **update this** when you deploy to a real domain.

## To-do before publishing

1. Replace placeholder contact details (`your.email@example.com`, etc.) in `index.html`.
2. Update `<link rel="canonical">` in `index.html` to your real URL.
3. Add a real CV PDF and wire the "Download CV" button (`href="cv.pdf"`).
4. Optional: add a real OG image at `assets/og.jpg` (1200x630) and update `og:image` meta tag.
5. Deploy to Netlify / Vercel / GitHub Pages / Cloudflare Pages — just upload the folder.
