# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters, hiring managers, and engineering peers evaluating Hayti Kafley as a software engineering hire. Their job: quickly assess whether his backend + reliability depth, experience, and skill set fit a role, then decide to interview/contact. The site must earn that judgment within seconds of the first viewport.

## Product Purpose

A personal portfolio for Hayti Kafley, Software Engineer at PNC. It exists to demonstrate his engineering depth (backend, SRE, observability, scalable systems), present real experience and credentials, and convert a visitor into a contact (email / LinkedIn / GitHub). Success is a qualified recruiter or peer leaving with a clear read on his reliability-and-backend strength and acting on a next step.

## Positioning

The meaningful differentiator is reliability and backend depth: SRE, observability, monitoring (Grafana, Dynatrace, BigPanda), incident response, and building systems that scale. The visual identity leads with this — a dark, developer-tool / terminal-crafted world — rather than the generic "software engineer" generality most portfolio templates ship.

## Operating Context

Reviewers arrive on desktop and mobile browsers, typically laptop screens, often in short bursts while evaluating candidates. Expected surface behavior: a scannable one-page flow (home → about → experience → skills → certifications → education → contact) with the reliability/backend story leading, plus working contact affordances. Dark scene chosen deliberately for the dev-tool context.

## Capabilities and Constraints

- Stack pinned by the user: **shadcn/ui + daisyUI** on the existing React 19 + Vite + Tailwind 3 codebase.
- Single-page sections to preserve: Home, About, Experience (2 PNC roles), Skills (6 categories: Languages, Frontend, Backend, Cloud & DevOps, Observability & Reliability, Enterprise Tools), Certifications (4), Education (BS CS, Miami University), Contact (email, LinkedIn, GitHub, message form), Navbar, Footer.
- Real facts to preserve: name Hayti Kafley, Software Engineer at PNC; role and dates (Software Engineer PNC Aug 2024–present; PNC Technology Development Program Aug 2023–2024); certifications (Product Management Certificate — Cornell 2024; ICAgile Certified Professional 2023; Certified BigPanda Operator 2024; AIOps Foundation 2024); BS Computer Science, Miami University, May 2023; email hemankafley@gmail.com; LinkedIn https://www.linkedin.com/in/hayti-kafley-2b602615a/; GitHub https://github.com/hemankafley.
- User decided to **drop the photo** — the design is fully typographic / visual-system driven (no reliance on profile.png / aboutme.png as identity carriers).
- Contact form is client-side only (no backend); validation and status UX must work as before.

## Brand Commitments

- Identity: Hayti Kafley, Software Engineer at PNC.
- Visual: dark, developer-tool / terminal-crafted aesthetic, lead with reliability & backend depth.
- Component libraries pinned by user: shadcn/ui + daisyUI.

## Evidence on Hand

- Real content in existing components: experience bullets, skills lists, certifications, education, contact links (paths: src/components/*.tsx).
- Two headshot images exist (public/profile.png, public/aboutme.png) but the user chose not to lead with them.

## Product Principles

1. Depth over breadth: the reliability-and-backend story must read first and stay the throughline.
2. Prove, don't claim: real experience, real credentials, real links — nothing invented.
3. Earn trust in seconds: scannable, maintaining judgment without friction.
4. Commit to the world: the developer-tool aesthetic is carried everywhere, not just the hero.

## Accessibility & Inclusion

The incumbent site targets WCAG-friendly contrast on a dark theme (body text on near-black with the planned palette). Keep keyboard-focusable controls and legible contrast throughout the rebuild.