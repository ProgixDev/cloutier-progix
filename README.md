# Harmonia — dossier client Progix

Jeu de trois documents contractuels pour **Patrick Cloutier** : la première version d’**Harmonia**,
application d’accompagnement relationnel et de communication personnelle (« Mieux se comprendre.
Mieux s’exprimer. Mieux interagir. »). Contenu établi à partir de sa conversation de conception avec
ChatGPT (30 août – 11 septembre 2026, ~160 étapes de règles approuvées), de son cahier de
consultation pour firmes de développement et de ses questions aux firmes.

| Route                 | Document           | Contenu                                                                                          |
| --------------------- | ------------------ | ------------------------------------------------------------------------------------------------ |
| `/devis`              | Devis contractuel  | 6 400 $ CA, 14 × 450 $ aux deux semaines + 100 $, Interac, périmètre, IA & sécurité, signature   |
| `/cahier-des-charges` | Cahier des charges | Contexte, publics, 11 modules, parcours, stack, exigences, couverture, réponse à la consultation |
| `/calendrier`         | Calendrier         | 60 jours en 5 phases, Gantt, détail des sprints, 15 versements datés, cadence                    |

`/` redirige vers `/devis`. Tout le site est derrière la barrière d’accès frontale
(`NEXT_PUBLIC_SITE_ACCESS_CODE`, défaut `harmonia2026` — voir `src/core/env.client.ts`).

**Périmètre V1** : conversation avec l’IA en texte et à la voix (modes discussion / réflexion /
analyse), Charte Harmonia versionnée (20 principes du cœur + 25 règles de sécurité) protégée par des
garde-fous avant et après le modèle et par une double validation, sécurité de l’utilisateur (SOS sur
chaque écran, niveaux de risque 0–3, 911 par le composeur, ressources vérifiées par région, personne
de confiance, plan de sécurité, alerte minimale), inscription règle par règle, mémoire contrôlée,
espace personnel, outils (prise de recul, 1-2-3 Go, Observer une pensée, Changer une habitude,
symbole personnel), accessibilité et personnalisation, données au Canada, console d’administration,
abonnement par les stores, publication iOS et Android.

**Feuille de route (hors forfait)** : parcours mineurs, moteur de connaissances et concordance des
sources, miroir / fils conducteurs / profil évolutif, données de santé et appareils, accès
exceptionnel encadré, langues et régions supplémentaires, test d’intrusion indépendant, programme de
sécurité organisationnel. La section 08 du cahier donne le statut de chaque point du cadre du client.

**Commercial** : 6 400 $ CA présenté comme total tout compris (taxes applicables incluses), 15
versements Interac au 514-576-5993, livraison en 2 mois, support de 90 jours, propriété transférée au
15e versement. Révisions jamais facturées, mais le décalage qui en découle relève du client. Les
exclusions nominatives demandées par le client figurent dans une **annexe confidentielle**, jamais
dans ce dépôt. Le devis ne présente pas l’équipe : la liste nominative des personnes ayant accès au
projet est remise au kickoff (section 07 B).

**Assets** : la bobine de présentation Progix vit dans `public/video/` (4,5 Mo). Le lecteur est en
`preload="none"` derrière son poster — voir `src/features/devis/ui/video-band.tsx`.

---

## Le socle : NEXTJS-SKELETON

A production-grade Next.js starting point built on one premise: **AI agents write most of the code, the repository itself guarantees the quality.** Docs carry the knowledge, specs carry the intent, gates enforce the taste, screenshots prove the result.

> Agents: your entry point is [AGENTS.md](AGENTS.md). Humans: keep reading.

## Stack

Next.js 16 (App Router, RSC) · TypeScript strict · Tailwind CSS v4 + shadcn/ui · Zustand 5 · Motion · Vitest + Testing Library · Playwright · pnpm · ESLint 9 (+ enforced module boundaries) · Prettier · Husky + commitlint.

## Quickstart

```bash
corepack enable                       # or: npm i -g pnpm
pnpm install
pnpm exec playwright install chromium # once, for e2e + PDF rendering
pnpm dev                              # http://localhost:3000
pnpm verify                           # the full local gate (same as CI)
pnpm e2e:shots                        # CUJ tests + screenshot evidence
```

For AI-driven work, open the repo in Claude Code (or any agent that reads `AGENTS.md`) and start with `/create-spec`.

## How work happens here

| You want to…                | Do                                                                                                                           |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Start a new project         | **`/progix`** — one front door: interview → Notion → GitHub → init → design prompt                                           |
| Fix a bug / small change    | branch → implement → `pnpm verify` → PR (quick track)                                                                        |
| Ship a feature              | `/create-spec` → `/plan-feature` → `/implement-feature` → `/verify-ui` → `/review` → `/feature-report` → PR → `/update-docs` |
| Process a meeting (R2R)     | `/meeting-intake` → requirement diff + grill → feeds the tracks                                                              |
| Add a feature module        | `/new-module <name>`                                                                                                         |
| Make a correction permanent | `/encode-lesson`                                                                                                             |

**The repo is the only operating surface** — no Notion/Slack/GitHub-Actions layer, no cloud CI; verification runs locally (`pnpm verify` + Husky pre-commit). See [ADR-0006](docs/architecture/decisions/0006-repo-only-operating-model.md). Process, roles, and the R2R loop: [docs/process/workflow.md](docs/process/workflow.md) · [docs/process/r2r.md](docs/process/r2r.md).

## Map

```
AGENTS.md            agent operating model (CLAUDE.md imports it)
docs/                the knowledge tree — INDEX.md is the map
specs/               constitution + feature specs (SDD)
.claude/             skills, reviewer subagents, hooks, path rules
src/app|features|components|hooks|lib|core   layered code (ESLint-enforced)
e2e/                 Playwright CUJ tests → artifacts/screenshots evidence
docs/reports/        generated feature reports (diff + screenshots + verdicts)
scripts/             repo gates (docs links, typography) + report-to-PDF
.github/             CI: quality gates, e2e + evidence upload, AI persona review
```

## CI

Three workflows run on every PR: **CI** (lint/types/format/docs/typography/tests/build), **E2E** (Playwright + screenshot artifacts), and **Claude persona review** (AI review board against `docs/personas/` — needs the `ANTHROPIC_API_KEY` secret; set it up with `/install-github-app` from Claude Code). Branch protection on `main` should require the first two.

## Cloning this skeleton for a new project

1. Create the repo from this template (GitHub "Use this template", or `npx degit DigitariaWebs/nextjs-skeleton my-project`).
2. Open it in Claude Code and run **`/progix`** — the one front door. It interviews you, fills the Notion project, creates the GitHub repo under DigitariaWebs, initializes the clone (via `/setup-project`), writes the PRD, and emits the Claude Design prompt. (`/setup-project <name>` still works standalone if you only want the repo init.) First time? Rehearse safely with **`/progix <name> --dry-run`** — it plans everything and creates nothing.
3. Do the two steps only a human can: protect `main` (require CI + E2E) and add the `ANTHROPIC_API_KEY` secret (`/install-github-app`).
4. Write your first spec: `/create-spec`.

## Why it's built this way

Every structural decision has an ADR in [docs/architecture/decisions/](docs/architecture/decisions/README.md). The two-page version: [docs/architecture/overview.md](docs/architecture/overview.md) and the engineering [constitution](specs/constitution.md).
