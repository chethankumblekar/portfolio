# Chethan K — Portfolio

Personal portfolio for Chethan K, DevOps & Cloud/Platform Engineer. Built with
Next.js (App Router), Tailwind CSS, and Framer Motion.

Live: [chethank.vercel.app](https://chethank.vercel.app)

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll-linked animations, cinematic career timeline)
- React Flow (interactive architecture diagrams on case-study pages)

## Structure

- `app/` — routes: home, `/experience`, `/skills`, `/case-studies`, `/projects/[slug]`, `/resume`
- `components/` — page sections and shared UI (`Hero`, `Milestones`, `Experience`, `Skills`, `StatusDot`, `NetworkBackdrop`, `ArchitectureDiagram`)
- `data/` — single source of truth for content (`experience.ts`, `projects.ts`)
- `lib/` — shared constants

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Deployment

Deploys automatically to Vercel on push.
