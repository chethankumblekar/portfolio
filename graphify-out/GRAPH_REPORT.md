# Graph Report - portfolio  (2026-07-27)

## Corpus Check
- 53 files · ~14,786 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 261 nodes · 297 edges · 31 communities (17 shown, 14 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `000cc56a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Career Facts & Docs
- ESLint / Lint Tooling
- Runtime Dependencies
- AI Assistant Chat
- Case Studies & Projects
- Experience & Milestones
- Skills & Credentials
- TypeScript Lib Config
- AI Knowledge & Prompt
- Architecture Diagram UI
- Package Scripts
- TSConfig Includes
- Homepage Hero & Metrics
- ESLint Config Object
- Next.js Config
- Next-Env Type Shim
- PostCSS Config (mjs)
- Profile Photo
- Vercel Framework Tag
- AskAI.tsx
- layout.tsx
- aiKnowledge.ts
- TopNav.tsx
- Metrics.tsx
- Pillars.tsx

## God Nodes (most connected - your core abstractions)
1. `portfolio-maintainer Agent Definition` - 21 edges
2. `Portfolio CLAUDE.md (root project instructions)` - 19 edges
3. `compilerOptions` - 16 edges
4. `Chethan K Resume (public/resume.pdf)` - 15 edges
5. `include` - 7 edges
6. `scripts` - 6 edges
7. `Ascertra — DevOps Engineer role (Jan 2025–Present, Bengaluru)` - 6 edges
8. `projects` - 5 edges
9. `experience` - 4 edges
10. `Project` - 4 edges

## Surprising Connections (you probably didn't know these)
- `README.md (Portfolio Overview)` --semantically_similar_to--> `Portfolio CLAUDE.md (root project instructions)`  [INFERRED] [semantically similar]
  README.md → CLAUDE.md
- `RESUME_LINK / /resume route (links to Drive PDF; CLAUDE.md states no local resume.pdf exists)` --references--> `Chethan K Resume (public/resume.pdf)`  [AMBIGUOUS]
  CLAUDE.md → public/resume.pdf
- `Azure Virtual Desktop (AVD/FSLogix) Environment with Conditional Access` --conceptually_related_to--> `Ascertra — DevOps Engineer role (Jan 2025–Present, Bengaluru)`  [EXTRACTED]
  public/resume.pdf → CLAUDE.md
- `GitHub Copilot / AI Coding Agents Rollout` --conceptually_related_to--> `Ascertra — DevOps Engineer role (Jan 2025–Present, Bengaluru)`  [EXTRACTED]
  public/resume.pdf → CLAUDE.md
- `Orphaned-Resource Detection Tool (cost optimization, automated alerts)` --conceptually_related_to--> `Ascertra — DevOps Engineer role (Jan 2025–Present, Bengaluru)`  [EXTRACTED]
  public/resume.pdf → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **portfolio-maintainer agent's five maintenance responsibility areas** — _claude_agents_portfolio_maintainer_overview, _claude_agents_portfolio_maintainer_content_accuracy_area, _claude_agents_portfolio_maintainer_design_system_area, _claude_agents_portfolio_maintainer_routes_links_area, _claude_agents_portfolio_maintainer_dependency_build_health_area, _claude_agents_portfolio_maintainer_repo_hygiene_area [EXTRACTED 1.00]
- **Canonical career facts (Ascertra + Vela Technologies India roles) repeated consistently across CLAUDE.md, portfolio-maintainer.md and resume.pdf** — claude_overview, _claude_agents_portfolio_maintainer_overview, public_resume_overview, claude_ascertra_role, claude_vela_technologies_india_role [INFERRED 0.85]
- **Headline resume metrics (uptime, tenants, pipelines, provisioning reduction) kept consistent across all three project docs** — claude_overview, _claude_agents_portfolio_maintainer_overview, public_resume_overview, claude_uptime_metric_997, claude_tenant_platform_metric_60, claude_cicd_pipeline_metric_20, claude_manual_provisioning_reduction_metric_90 [INFERRED 0.85]

## Communities (31 total, 14 thin omitted)

### Community 0 - "Career Facts & Docs"
Cohesion: 0.13
Nodes (31): Area 1: Content Accuracy (career + projects), Area 4: Dependency and Build Health, Area 2: Design-System Consistency (Mission Control), portfolio-maintainer Agent Definition, Area 5: General Repo Hygiene, Area 3: Routes and Links, .claude/CLAUDE.md (graphify skill pointer), Ascertra — DevOps Engineer role (Jan 2025–Present, Bengaluru) (+23 more)

### Community 1 - "ESLint / Lint Tooling"
Cohesion: 0.07
Nodes (29): autoprefixer, eslint, eslint-config-next, eslint-config-prettier, eslint-plugin-import, eslint-plugin-react, eslint-plugin-react-hooks, devDependencies (+21 more)

### Community 2 - "Runtime Dependencies"
Cohesion: 0.07
Nodes (29): framer-motion, geist, iconify, @iconify/react, lucide-react, next, openai, dependencies (+21 more)

### Community 4 - "Case Studies & Projects"
Cohesion: 0.15
Nodes (6): Params, ProjectCard(), Props, projects, Project, ProjectCustomers

### Community 5 - "Experience & Milestones"
Cohesion: 0.11
Nodes (12): POST(), aiKnowledge, education, experienceSummary, profile, projectsSummary, buildPrompt(), Props (+4 more)

### Community 6 - "Skills & Credentials"
Cohesion: 0.15
Nodes (11): certIcon(), Credentials(), groupVariants, pillVariants, zoneVariants, Certification, certifications, education (+3 more)

### Community 7 - "TypeScript Lib Config"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 9 - "Architecture Diagram UI"
Cohesion: 0.29
Nodes (6): nodeTypes, Props, ArchitectureDiagram, AzureEdge, AzureNode, AzureNodeData

### Community 10 - "Package Scripts"
Cohesion: 0.14
Nodes (13): name, postcss, overrides, next, sharp, private, scripts, build (+5 more)

### Community 11 - "TSConfig Includes"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 22 - "AskAI.tsx"
Cohesion: 0.43
Nodes (5): useAI(), FloatingAIChat(), Message, sectionFromPathname(), sectionLabels

## Ambiguous Edges - Review These
- `Chethan K Resume (public/resume.pdf)` → `RESUME_LINK / /resume route (links to Drive PDF; CLAUDE.md states no local resume.pdf exists)`  [AMBIGUOUS]
  CLAUDE.md · relation: references

## Knowledge Gaps
- **103 isolated node(s):** `FEATURED_SLUGS`, `NavItem`, `navItems`, `SkillGroup`, `SkillZone` (+98 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Chethan K Resume (public/resume.pdf)` and `RESUME_LINK / /resume route (links to Drive PDF; CLAUDE.md states no local resume.pdf exists)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `dependencies` connect `Runtime Dependencies` to `Package Scripts`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `ESLint / Lint Tooling` to `Package Scripts`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **What connects `FEATURED_SLUGS`, `NavItem`, `navItems` to the rest of the system?**
  _103 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Career Facts & Docs` be split into smaller, more focused modules?**
  _Cohesion score 0.12688172043010754 - nodes in this community are weakly interconnected._
- **Should `ESLint / Lint Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._