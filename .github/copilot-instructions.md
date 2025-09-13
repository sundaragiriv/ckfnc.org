# Copilot Instructions for CKFNC.org

## Project Overview
This is a youth-led nonprofit site for Cancer Kids First NC, built as a static React app with Tailwind CSS. The site is deployed to GitHub Pages using a workflow in `.github/workflows/pages.yml`.

## Architecture
- **Frontend:** React (mix of `.js` and `.tsx` files)
- **Routing:** `react-router-dom` (see `src/App.js`)
- **Styling:** Tailwind CSS (see `tailwind.config.js`, `postcss.config.js`)
- **Content:** Markdown for blog posts (`_posts/`), some legacy Jekyll structure
- **Pages:** Located in `src/pages/` (both JS and TSX)
- **Components:** Shared UI in `src/components/`
- **Static Assets:** Served from `public/`

## Developer Workflow
- **Start Dev Server:** `npm start` (serves `public/` via `serve`)
- **Build:** No build step required for static deployment; just update files in `public/`.
- **Deploy:** On push to `master`, GitHub Actions build and deploy from `public/` to GitHub Pages (`.github/workflows/pages.yml`).
- **Dependencies:** Managed via npm (`package.json`).

## Conventions & Patterns
- **React Function Components:** All pages/components use function components, often with Tailwind classes for layout.
- **TypeScript:** Some pages/components use `.tsx` for type safety, but not enforced project-wide.
- **Data:** Static data for blog posts, programs, etc. in `src/data/`.
- **Forms:** Volunteer/contact forms are embedded or use Google Forms (see `GetInvolved.js`/`GetInvolved.tsx`).
- **Blog:** Markdown posts in `_posts/` follow Jekyll naming conventions but are not auto-built; content is static.
- **Icons:** Uses `lucide-react` for icons in TSX files.

## Key Files
- `src/App.js` — Main app entry, routing setup
- `src/pages/` — All main site pages
- `src/components/` — Shared UI components
- `public/index.html` — Static entry point
- `tailwind.config.js`, `postcss.config.js` — CSS setup
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow

## External Integrations
- **Google Forms:** For volunteer signups/contact
- **YouTube Embeds:** For video content
- **GitHub Pages:** Static site hosting

## Special Notes
- **No SSR/CSR:** All content is static; no backend/server code
- **Jekyll Legacy:** Some markdown files and `_posts/` are from Jekyll, but not actively built
- **Deployment:** Only files in `public/` are published; update here for changes

---
For AI agents: Follow the above structure, use Tailwind for styling, keep all new pages/components in `src/pages/` or `src/components/`, and update `public/` for static assets. Use the GitHub Actions workflow for deployment.
