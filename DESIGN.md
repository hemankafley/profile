---
name: Reliability Console
description: A carbon-black, terminal-crafted live status console for Hayti Kafley's backend & reliability portfolio.
colors:
  primary: "#f5b04c"
  primary-ink: "#1a1205"
  readout: "#5bc3e0"
  status: "#4caf7d"
  danger: "#e2554d"
  ground: "#0b0d10"
  panel: "#111418"
  raised: "#171c22"
  well: "#0e1115"
  terminal: "#0a0c0e"
  hairline: "#23292f"
  control-border: "#2a313a"
  ink: "#e7e9ec"
  secondary-ink: "#c7cdd4"
  muted: "#8b95a1"
  placeholder: "#6c757f"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.18em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
rounded:
  md: "0.5rem"
  lg: "0.6rem"
  full: "9999px"
spacing:
  container-px: "24px"
  panel-p: "16px"
  panel-p-lg: "32px"
  section-py: "80px"
  section-gap: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.md}"
    size: "44px"
  button-outline:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.secondary-ink}"
    rounded: "{rounded.md}"
    size: "44px"
  console-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
---

# Design System: Reliability Console

## Overview

**Creative North Star: "A monitored production system."**

Hayti's portfolio presents itself as a live status console for a service called `hayti.kafley` — a developer-tool, SRE-flavored surface where reliability, observability, and backend depth are the interface itself rather than decoration. The site refuses the generic dark-hero-portfolio template that leads with identical icon cards; it leads instead with a boot console that types a system self-report onto dark glass: `whoami`, `--focus`, `systemctl status`, `uptime`, `signal --observability`. The visual system reads like monitoring tooling you already trust — Grafana dashboards, a terminal emulator, a runbook's cold precision.

The aesthetic is dense, quiet, and instrumented. Everything sits on a carbon-black ground overlaid with a faint 44px engineering grid, organized into graphite console panels separated by 1px hairlines. Two typefaces split the voice: JetBrains Mono carries every label, datum, command, and chip (the interface's "data layer"), while Space Grotesk carries only the display headlines and section titles (the "human layer"). Exactly one color — a committed phosphor amber — drives all interactive chrome, focus, and status lamps at page scale. Cyan and green surface only as stage readings and status conditions, never as chrome. Motion is scarce and meaningful: one authored boot-console type-in, one blinking block cursor, one pulsing status dot. Nothing else moves.

The world is confirmed as a **reliability console**, pinned by the user brief over the dealt roll. This is a dark developer-tool world with the discipline of nixie quantities and timetable hairline rules: rank by weight, separate by rules, never decorate.

**Key Characteristics:**
- Carbon-black ground with a faint 44px engineering grid; no photo, no imagery — the console is the identity.
- Graphite panels with hairline borders carry every record; depth comes from tonal layering, not shadows.
- One phosphor-amber signal color owns all interactivity, focus, and status lamp; cyan and green are stage readings only.
- JetBrains Mono for all data/labels/chips; Space Grotesk only for display titles.
- One authored moment of motion: the hero boot-console type-in with a blinking block cursor and a pulsing status dot.

## Colors

A near-monochrome graphite field with a single committed amber signal and two restrained status readouts; saturation is spent deliberately and never on chrome.

### Primary
- **Phosphor Amber** (#f5b04c): The one committed signal color, used at page scale for interactive chrome and state. It fills the primary CTA buttons, the "Open a channel" navbar action, the `:~$` prompt mark, the pulsing status lamp in the navbar/footer, focus rings on inputs, the `▸` list bullets, the small square markers on skill headers, and icon accents inside tile badges. Its rarity is the point: when amber appears, it means "act here" or "online."
- **Amber Ink** (#1a1205): The near-black text and icon color that sits on amber fills, guaranteeing contrast on primary buttons and interactive marks.

### Secondary
- **Console Cyan** (#5bc3e0): A readout color reserved for stage/telemetry readings — observability lines in the boot console and data that describes system state. It never appears as a button, border, or interactive affordance.
- **Status Green** (#4caf7d): The "all systems nominal" color — the `status: online` label, the "active (running)" output, success states on the contact form. It means healthy, never decorative.
- **Alert Red** (#e2554d): Error and failure state only — the `✗ failed` validation banner on the contact form.

### Neutral
- **Carbon Ground** (#0b0d10): The page background, `data-theme="reliability"` base-100, and the fixed navbar field. It is the console's bench.
- **Terminal Deep** (#0a0c0e): Slightly darker than the ground; the boot-console terminal interior where the typewriter runs.
- **Console Well** (#0e1115): The recessed surface for panel header bars, the contact form panel, and the footer — a step down from panel.
- **Graphite Panel** (#111418): The standard console panel surface (base-200) holding all cards, skill tiles, and service records.
- **Raised Graphite** (#171c22): A one-step-lighter lift (base-300) for hover/raised states against panel.
- **Hairline** (#23292f): The 1px border and separator color that rules every panel, header, divide-y row, and horizontal/vertical rule.
- **Control Border** (#2a313a): Slightly lighter than hairline; used for interactive control outlines — input fields, outline buttons, social tiles — and the scrollbar thumb.
- **Console Ink** (#e7e9ec): Primary text — headings in mono/display, body copy on dark, all foreground emphasiss.
- **Ready Ink** (#c7cdd4): Secondary text — narrative body, nav links, badge/chip text, subtitle copy on panels.
- **Dim Sign** (#8b95a1): Muted metadata — terminal labels (`term-label`), section taglines, field labels, dates, the `~`-prefixed descriptors.
- **Placeholder Dim** (#6c757f): Form placeholder text and the inactive "hayti@kafley: ~" terminal status bar.

### Named Rules
**The Single Console Voice Rule.** Phosphor amber is the only color that carries chrome and interactivity — CTAs, prompts, focus, status lamps. Cyan and green appear exclusively as stage readings and status conditions (`--observability` output, `status: online`); neither may ever be used as a button fill, border, or navigational device.

**The Rarity Discipline.** Saturated color covers a small fraction of any screen. The ground is graphite; amber is earned in specific, repeated places (the CTA, the prompt mark, the status lamp), never strewn as decoration.

## Typography

**Display Font:** Space Grotesk (400/500, self-hosted via fontsource)
**Body Font:** system-ui stack (`system-ui, -apple-system, sans-serif`)
**Label/Mono Font:** JetBrains Mono (400/500, self-hosted via fontsource)

**Character:** A machine/human split. JetBrains Mono is the voice of the terminal — every datum, label, chip, and command speaks in fixed-width precision, which is what makes the console believable. Space Grotesk provides geometric, technical warmth only at the top of the hierarchy, so the human name and section titles still feel approachable against all that mono chrome.

### Hierarchy
- **Display** (Space Grotesk 500, `clamp(2.25rem, 6vw, 3.75rem)`, line-height 1.1, tracking -0.02em): The hero name "Hayti Kafley" only.
- **Headline** (Space Grotesk 500, `clamp(1.875rem, 4vw, 2.25rem)`, tracking -0.02em): Section titles (`text-3xl sm:text-4xl`); they carry no eyebrow or ornament — just the title, then a mono tagline.
- **Title** (Space Grotesk 500, 1.125rem): Card/panel titles, the sub-role line under the name, article headings.
- **Body** (system-ui, 1rem, line-height 1.625): Narrative paragraphs in About and Contact; secondary-ink at a comfortable 15px on panels. Long reads cap around 65ch (`max-w-xl`/`max-w-2xl`).
- **Label** (JetBrains Mono 500, 0.6875rem/11px, letter-spacing 0.18em, uppercase): The `term-label` eyebrow — "status: online", section taglines' helpers, metadata.
- **Mono** (JetBrains Mono 400, 0.8125rem/13px): All data — boot-console lines, profile rows, dates, tags, command strings, nav links, chips, form values.

### Named Rules
**The Mono-For-Data Rule.** Any datum, label, chip, or command is set in JetBrains Mono. Space Grotesk is reserved for display titles and a handful of human headings; if a phrase is to be *read like telemetry*, it must be mono.

## Layout

A single centered column with a fixed-width container and generous vertical rhythm. Content sits in `max-w-6xl` (72rem) containers with `px-6` gutters. Sections breathe with `py-20 md:py-28` (80px/112px); each section header (`mb-12`, 48px) leads with a display title and a mono tagline.

Two-column grids demote identity vs. record: the hero splits `lg:grid-cols-[1.05fr_0.95fr]` (identity column vs. boot console), the About and Contact sections split roughly in half. Experience, Skills, and Certificates use flowing responsive grids (`sm:grid-cols-2`, `lg:grid-cols-3`) — one record per card. The fixed navbar is `h-16`, frosted (`bg-[#0b0d10]/90 backdrop-blur-sm`) with a hairline bottom edge. Spacing rhythm is consistent: panel padding runs `p-4` to `p-8` (16–32px), internal gaps `gap-3`/`gap-4`, list rows `space-y-2.5`, form fields `space-y-5`.

## Elevation & Depth

**Flat by default.** The system uses tonal layering and hairline rules to separate surfaces, not shadows. Ambient shadows are absent from the design; no component exhibits a drop shadow.

Depth is conveyed two ways. First, *tonal steps* alone separate chrome from its field: ground → well (panel headers) → panel (cards) → raised. Second, every surface is enclosed by a 1px Hairline (#23292f) border. One deliberate refinement exists: the console panel carries a single **inset top highlight** (`box-shadow: 0 1px 0 0 rgba(255,255,255,0.03) inset`) — a thin line of light along the top edge that reads as machined metal edge-lit, reinforcing the console face. Panels stay flat at rest and never lift.

### Named Rules
**The Hairline Rule.** Surfaces are flat and separated by 1px hairlines of Hairline (#23292f) — borders, `divide-y` rows, section rules. There are no ambient shadows. When a panel must feel dimensional, use a tonal step up or the single inset top highlight, never a drop shadow.

## Shapes

A restrained, heavily-rounded-but-engineering-grade form language. Base radius is `--radius: 0.6rem` in the token layer. Descending scale: **rounded-lg** (0.6rem) for panel containers (console-panel, Card), **rounded-md** (calc 0.6rem − 2px ≈ 0.5rem) for buttons, inputs, social tiles, and icon badges, and **rounded-full** (9999px) for badges, chips, and status dots. The recurring silhouette is a rectangular console panel with an internal light-haired header bar and a recessed body — the boot console, the `hayti.profile` record, and the service records all share it. Borders are always 1px hairlines; nothing is clipped except panel bodies that curl under a full-width header (`overflow-hidden`).

## Components

### Buttons
- **Shape:** Medium curve (rounded-md, ~0.5rem), full-width or inline, `h-10`/`h-11` (40–44px); icon runs inline at `size-4` with `gap-2`.
- **Primary:** Phosphor Amber fill (#f5b04c) with Amber Ink text (#1a1205); mono, 13–14px; used for "view experience", "send message", "Open a channel", "request resume.pdf". Hover dims the fill to `#f5b04c/90`. Focus uses the 2px amber ring via shadcn's `focus-visible:ring-ring`.
- **Hover / Focus:** `transition-colors` only, no transform/lift. Hover = 90% fill opacity; focus-visible = 2px amber ring with offset on ground.
- **Outline / Ghost:** Outline = transparent fill, Control Border stroke (#2a313a), Ready Ink text (#c7cdd4); hover brightens fill to `white/5` and text to Console Ink (#e7e9ec). Ghost (nav) uses a soft `white/5` hover pill. "Open an sre channel" and social tiles follow the outline pattern.

### Chips / Badges
- **Style:** daisyUI `badge badge-outline` — transparent fill, Hairline outline, Ready Ink text (#c7cdd4), mono 12px, `rounded-full` (9999px), `px-2.5 py-0.5`. Used for every skill tag and tech-stack label.
- **State:** unselected by default; hover shifts the border and text to amber (`hover:border-[#f5b04c]/50 hover:text-[#f5b04c]`). No filled/selected variant exists.

### Cards / Console Panels
- **Corner Style:** Slightly rounded (rounded-lg, 0.6rem).
- **Background:** Graphite Panel (#111418) body; Console Well (#0e1115) header bar and footer strip.
- **Shadow Strategy:** None — flat, with a single inset top highlight (see Elevation). Panels separate by Hairline borders.
- **Border:** 1px Hairline (#23292f).
- **Internal Padding:** `p-4`–`p-8` (16–32px); headers `px-4 py-3`; record bodies `px-5 py-5 sm:px-6 sm:py-6`. Hover on interactive channel tiles shifts the border to amber (`hover:border-[#f5b04c]/50`).

### Inputs / Fields
- **Style:** Console Well fill (#0e1115), Control Border stroke (#2a313a), rounded-md (~0.5rem), `h-10`; Console Ink text, Placeholder Dim placeholder (#6c757f). Labels are mono Dim Sign (`term-label`-like) at medium weight.
- **Focus:** 2px phosphor-amber ring (focus-visible) — `ring-[#f5b04c]/60` on the field, with `transition-colors`.
- **Error / Disabled:** Error is not applied to the field itself; a hairline-framed mono banner below the form turns Alert Red (#e2554d) on failure and Status Green (#4caf7d) on success (`✗ failed` / `✓ message queued`). Disabled dims to `opacity-50`.

### Navigation
- **Style:** Fixed `h-16`, frosted Carbon Ground (`bg-[#0b0d10]/90 backdrop-blur-sm`), hairline bottom edge. Brand is the console mark — a pulsing amber status dot + mono `hayti@kafley` + amber `:~$`.
- **Typography / States:** Links are mono 13px Ready Ink; hover lifts fill to `white/5` and text to Console Ink; active sections anchor-scroll (no separate active state). The final item is a small amber "Open a channel" primary button. Mobile collapses into a max-height dropdown panel under the hairline.

### [Signature Component] The Boot Console
The hero's right column is a lidded console window: a header bar with three dim terminal dots (#3a444f) and the mono status line `hayti@kafley: ~`, over a Terminal Deep body (#0a0c0e). On mount, a typewriter (`setInterval` 240ms/line) prints a system report — `$ whoami`, `hayti.kafley — software engineer @ PNC`, `$ hayti --focus`, the amber focus line, `$ systemctl status hayti`, the green "active (running)" line, `$ uptime`, `$ signal --observability` with the cyan observability line, `$ status`, the green "OK" line. While typing, a blinking amber block cursor (`▊`, `animate-cursor-blink` 1.1s steps) sits at the insertion point and remains after the sequence completes. This is the system's single authored moment of motion and its thesis made visible.

## Do's and Don'ts

### Do:
- **Do** lead with the console — every new screen should read as a pane of a monitored system, not a marketing page.
- **Do** give each record a Hairline-bordered console-panel container with a well-colored header and mono metadata.
- **Do** spend phosphor amber only on interactive chrome, focus, and status lamps; reserve cyan and green for stage readings and status.
- **Do** set every datum, label, chip, and command in JetBrains Mono; Space Grotesk is for display titles only.
- **Do** keep surfaces flat and separate them with 1px hairlines and tonal steps; the single sanctioned shadow is the inset top highlight (`0 1px 0 0 rgba(255,255,255,0.03)`).
- **Do** keep motion to the boot console's type-in, blinking cursor, and pulsing status dot — no entrance animations, no shimmer.
- **Do** use the `console-panel`, `console-grid`, `term-label`, `status-dot`, and `section-title` composite classes for consistency.

### Don't:
- **Don't** use cyan or green as a button fill, border, or navigation device — readouts never become chrome.
- **Don't** introduce drop shadows or lifted/card-hover elevation; depth is tonal and hairline only.
- **Don't** add the generic dark-hero-portfolio pattern — identical icon cards, ambient gradients, or a photo hero. The console *is* the hero.
- **Don't** animate page entry, scroll reveals, or hover lift; only the boot console types, the cursor blinks, and the status dot pulses.
- **Don't** put body copy in mono or headings in the system font; respect the fixed machine/human split.
- **Don't** restate a color in prose with a different value than its frontmatter hex — the frontmatter is normative.