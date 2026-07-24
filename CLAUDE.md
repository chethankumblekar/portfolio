# Portfolio — chethankumblekar/portfolio

Personal portfolio for Chethan K, DevOps & Cloud/Platform Engineer. Next.js 16
(App Router) + TypeScript + Tailwind CSS + Framer Motion. Deploys to Vercel
automatically on push (`chethank.vercel.app`).

## Branch state

Active work happens on `dev-new-portfolio` (tracks `origin/dev-new-portfolio`),
NOT `main` — check `git branch` before assuming which branch is current or
deployed-from.

## Design system: "Mission Control"

Graphite/near-black theme with a live-monitoring-dashboard feel — chosen to
signal "runs production systems," not generic SaaS/AI-startup indigo glass.

- Palette: bg `#0a0e14`/`#05070a` (graphite), accents `signal-cyan` (`#22d3ee`)
  and `signal-green` (`#34d399`), defined in `tailwind.config.js`.
- Shared primitives in `app/globals.css`: `.panel` (glass card w/ cyan hover
  edge), `.font-mono-eyebrow` (mono label style), `.text-glow-cyan`.
- Fonts: `geist/font/sans` and `geist/font/mono` (the **local** `geist` npm
  package, bundled woff2 files) — **never** switch these to `next/font/google`.
  That fetches font files over the network at build time; on a
  network-constrained machine this makes `next build` / `next dev` hang
  indefinitely with no error, and it's very hard to diagnose since nothing
  prints to the log. If you see a build stall with 0% CPU for minutes, check
  for `next/font/google` usage first.
- Shared components: `components/StatusDot.tsx` (pulsing live/current
  indicator), `components/NetworkBackdrop.tsx` (animated network-map page
  background, mounted once in `app/layout.tsx`).

## Content — single source of truth

- `data/experience.ts` is the **only** place career history lives. Both
  `components/Experience.tsx` (full `/experience` page) and
  `components/Milestones.tsx` (cinematic scroll-linked homepage teaser) read
  from it — never hardcode role/company/date text directly in a component.
- `data/projects.ts` — case studies, read by `/case-studies` and
  `/projects/[slug]`.

## Real career facts — do not alter without the user confirming again

- Current role: **DevOps Engineer, Ascertra** — Jan 2025–Present, Bengaluru.
- Prior: **Vela Technologies India** — Trainee (Mar–Jul 2022) → Associate
  Software Engineer (Jul 2022–Dec 2023) → Software Engineer (Jan–Dec 2024).
- Education: B.E. Information Science and Engineering, MVJ College of
  Engineering, Bengaluru (VTU), CGPA 8.5/10.
- Certifications: AZ-104 (Microsoft, in progress), AZ-305 ×2 (Pluralsight),
  IBM Data Science Specialization (Coursera).
- Headline metrics (from the user's resume, keep these as the canonical
  numbers unless the user gives updated ones): 99.7% platform uptime, 60+
  tenant platform, 20+ CI/CD pipelines, ~90% less manual provisioning via IaC.
- These came from `Resume DevOps Platform Engineer.docx` in the user's
  Documents folder (there's also an older `Chethan K - DevOps Engineer
  Resume.docx` that disagrees on the current employer — the user confirmed
  Ascertra is correct).

## Routes

- `/` — Hero → Milestones (cinematic journey) → Metrics → Pillars
- `/experience` — full detailed timeline
- `/skills` — capability map + `Credentials` (education/certs)
- `/case-studies` — project grid (canonical list; `/projects` redirects here)
- `/projects/[slug]` — project detail page, including React Flow architecture
  diagrams for non-confidential projects
- `/resume` — real resume content, embeds and offers `public/resume.pdf` for
  download directly (`lib/constants.ts` → `RESUME_PDF`)

## Verification gotchas on this machine

Builds/type-checks can stall for a long time (not fail — just sit at ~0% CPU)
when a Multipass/Virtualization VM is running in the background and eating
most of system RAM. If `npm run build` or `tsc --noEmit` seem hung with no
output for several minutes, check `top`/`memory_pressure` before assuming a
code problem.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
