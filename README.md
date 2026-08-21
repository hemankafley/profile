# Hayti Kafley — Software Engineer Portfolio

A professional portfolio for **Hayti Kafley**, a Software Engineer at PNC specializing in backend engineering, observability, site reliability, and scalable systems. The site is built as a **"Reliability Console"** — a dark, developer-tool aesthetic where the portfolio presents itself like a monitored production system, with a live boot-console hero and instrumented section records.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build tool**: Vite 5.4
- **Styling**: Tailwind CSS 3 with **shadcn/ui** components and **daisyUI** themes
- **Icons**: Lucide React
- **Fonts**: Space Grotesk + JetBrains Mono (self-hosted via Fontsource)
- **Package manager**: npm

## Installation & Setup

### Prerequisites

- Node.js 20+
- npm 10+

### Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173/` (Vite auto-selects a new port if 5173 is in use).

3. **Build for production**

   ```bash
   npm run build
   ```

   Compiled files are written to the `dist/` directory.

4. **Preview the production build**

   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Fixed console navbar with mobile menu
│   ├── Hero.tsx             # Hero with boot-console typewriter
│   ├── About.tsx            # About section + instrumented profile card
│   ├── Experience.tsx       # Professional experience (service records)
│   ├── Skills.tsx           # Technical skills by category
│   ├── Certifications.tsx   # Professional credentials
│   ├── Education.tsx        # Educational background
│   ├── Contact.tsx          # Contact channels + message form
│   ├── Footer.tsx           # Footer with social + status line
│   ├── SectionShell.tsx     # Shared section layout wrapper
│   └── ui/                  # shadcn/ui primitives (Button, Card, Input, ...)
├── lib/utils.ts             # cn() class-merge utility
├── index.css                # Global styles, tokens, utilities
├── App.tsx                  # Main app composition
└── main.tsx                 # React entry point

public/                       # Static assets (favicon, icons)
index.html                    # HTML entry point (carries the design contract)
tailwind.config.js            # Tailwind + daisyUI theme config
vite.config.ts                # Vite configuration
```

## Troubleshooting

### Port already in use

If port 5173 is occupied, Vite automatically selects the next available port — check the terminal output for the active URL.

### Build errors

If you hit build issues:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Contact & Social

- **Email**: [hemankafley@gmail.com](mailto:hemankafley@gmail.com)
- **LinkedIn**: [Hayti Kafley](https://www.linkedin.com/in/hayti-kafley-2b602615a/)
- **GitHub**: [github.com/hemankafley](https://github.com/hemankafley)

## License

© 2026 Hayti Kafley. All rights reserved.