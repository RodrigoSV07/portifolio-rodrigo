# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite, http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

No test runner is configured.

## Architecture

Single-page portfolio built with React 18 + Vite. No routing — all sections live on one page and navigation uses anchor links (`#Inicio`, `#sobre`, `#projetos`, `#contato`).

**Component layout** (`src/App.jsx`):
```
<div.particulas />   ← fixed background gradient overlay
<Header />           ← fixed nav bar with anchor links
<Hero />             ← profile photo + name/title
<About />            ← bio section
<Projects />         ← project cards grid
<Contact />          ← WhatsApp form + social links
```

**Styling**: Plain CSS in `src/styles.css` imported globally. No CSS modules or Tailwind. CSS custom properties (defined in `:root`) control the color palette:
- `--primaria`: `#4f46e5` (indigo)
- `--secundaria`: `#7c3aed` (violet)
- `--escuro`: `#0f172a` (dark background)
- `--claro`: `#e2e8f0` (light text)
- `--vidro`: `rgba(255,255,255,0.1)` (glass-effect borders/backgrounds)

There is also a `styles.css` at the project root (legacy, pre-React), and the active one is `src/styles.css`.

**Projects data** is a hardcoded array at the top of `src/components/Projects.jsx`. Add new projects there. Set `link: null` for cards without an external URL — the `ProjectCard` component renders `<div>` vs `<a>` accordingly.

**Contact form** (`src/components/Contact.jsx`) submits via WhatsApp deep link (`wa.me`), not email. The phone number is hardcoded in the component. The send button only appears (via CSS `:has()` selector) when an input/textarea is focused.

**Images** go in `public/img/` and are referenced as `/img/filename` (Vite serves `public/` at root).

**Icons** come from `lucide-react`.

**Fonts**: Inter (headings/UI) and Space Mono (body/monospace text), loaded from Google Fonts in `index.html`.
