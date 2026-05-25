# Kato Elvis — Portfolio & Resume

Production-ready personal portfolio for **Kato Elvis**, Software Engineering student at Bugema University. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Three.js.

Live stack: dark neon theme, 3D hero scene, live GitHub stats, markdown blog, downloadable resume, and GitHub Pages deployment.

---

## Quick Start

```bash
npm install
npm run setup:resume   # I ran it incase i did not have the pdf resume
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (Vite default port).

### Build for production

```bash
npm run build
npm run preview
```

---

## My Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Projects, GitHub, Blog, Contact
│   ├── three/        # Scene3D, Starfield, GeometricShape (lazy-loaded)
│   └── ui/           # GlassCard, ImagePlaceholder, SectionTitle
├── content/blog/     # Markdown blog posts (frontmatter + react-markdown)
├── data/site.ts      # Personal info, skills, projects — main config file
├── hooks/            # useGitHubStats (GitHub REST API)
├── pages/            # Home, Blog list, Blog post
└── utils/blog.ts     # Blog loader (browser-safe frontmatter parser)
public/
└── resume-kato-elvis.pdf   
```

---

## Updating Content

### Personal info & links

**`src/data/site.ts`**: 
- Email, phone, GitHub username, LinkedIn URL
- Bio, title, university
- Resume path

### Projects

 **`PROJECTS`** in `src/data/site.ts`:

- Titles, descriptions, tech stack
- Set `github` to real repository URLs (currently `#`)
- Replace screenshot placeholders (see Images below)

### Skills

 **`SKILLS`** in `src/data/site.ts`  names and `level` (0–100) for progress bars.

### Blog posts

1. Added a `.md` file under **`src/content/blog/`**
2. Includes frontmatter:

```md
---
title: The Post Title
date: 2026-01-15
excerpt: Short summary for cards and SEO.
tags:
  - tag-one
  - tag-two
---

Your markdown content is put here…
```

3. Slug = filename without `.md` (e.g. `my-new-post.md` → `/blog/my-new-post`)

### Resume PDF

`/public/resume-kato-elvis.pdf` with your actual PDF.**

```bash
# copy your file over the placeholder
cp /path/to/your-resume.pdf public/resume-kato-elvis.pdf
```

Or run `npm run setup:resume` to regenerate a minimal placeholder.

### Images

| Placeholder | Replace with |
|-------------|----------------|
| `data-image="profile-photo.jpg"` | Add `public/profile-photo.jpg` and swap `ImagePlaceholder` for `<img src={`${import.meta.env.BASE_URL}profile-photo.jpg`} … />` in `Hero.tsx` / `About.tsx` |
| Project screenshots | Add images to `public/` and update `Projects.tsx` |

All placeholders use the `.image-placeholder` class with a diagonal pattern and centered instructions.

### GitHub Pages base URL

In **`vite.config.ts`**, I have to change:

```ts
const GITHUB_PAGES_BASE = '/KATO-ELVIS/'  
```

## Deploying to GitHub Pages

1. Push the project to GitHub (e.g. `ELVIS-KATO/ELVIS-KATO` or your chosen repo name).
2. Set `GITHUB_PAGES_BASE` in `vite.config.ts` to `/'<repo-name>'/`.
3. Install and deploy:

```bash
npm install
npm run deploy
```

This runs `predeploy` (build) and publishes `dist/` via `gh-pages`.

4. In GitHub → **Settings → Pages**, set source to **gh-pages** branch, `/ (root)`.

SPA routing: `scripts/postbuild.mjs` copies `index.html` to `404.html` so client routes like `/blog/my-post` work on refresh.

### Manual deploy

```bash
npm run build
# upload dist/ contents to GitHub Pages
```

---

## Features Of my Project Checklist

- [x] React + TypeScript + Vite + Tailwind v4
- [x] Framer Motion section animations
- [x] Three.js hero: icosahedron, starfield, mouse-reactive camera
- [x] Lazy-loaded 3D scene + route-based code splitting
- [x] Glassmorphism cards, cyan/magenta neon theme
- [x] Live GitHub API stats with rate-limit fallback
- [x] Markdown blog with React Router
- [x] Contact form (console.log, no backend)
- [x] Downloadable resume button
- [x] SEO meta tags
- [x] Mobile-first responsive layout

---

## Scripts I use

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Typecheck + production build + 404.html copy |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and publish to GitHub Pages |
| `npm run setup:resume` | Generate placeholder resume PDF |

---

## License

Personal portfolio — © Kato Elvis. Customize freely for your own use.
