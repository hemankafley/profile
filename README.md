# Hayti Kafley - Professional Software Engineer Portfolio

A modern, dark-themed professional portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Designed to showcase software engineering expertise, technical skills, and professional experience.

## Features

✨ **Modern Design**

- Dark professional theme with pink/magenta accents
- Fully responsive (desktop, tablet, mobile)
- Smooth animations and transitions
- High-quality visual hierarchy

🎯 **Complete Sections**

- **Hero Section**: Eye-catching introduction with professional portrait
- **About Section**: Professional background and expertise overview
- **Experience**: Timeline of professional roles and achievements
- **Skills**: Categorized technical competencies
- **Certifications**: Professional credentials
- **Education**: Academic background
- **Contact**: Multiple contact methods and contact form
- **Footer**: Quick navigation and social links

🔧 **Technical Features**

- Semantic HTML for accessibility and SEO
- TypeScript for type safety
- Tailwind CSS for utility-first styling
- Reusable React components
- Lucide React icons
- Smooth scrolling and navigation
- Mobile-first responsive design
- Contact form with validation
- Social media integration

## Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite 5.4.3
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide React
- **Package Manager**: npm

## Installation & Setup

### Prerequisites

- Node.js v20+
- npm 10+

### Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173/`

3. **Build for Production**

   ```bash
   npm run build
   ```

   Compiled files will be in the `dist/` directory

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Navigation bar with mobile menu
│   ├── Hero.tsx             # Hero section with introduction
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Professional experience timeline
│   ├── Skills.tsx           # Technical skills by category
│   ├── Certifications.tsx   # Professional certifications
│   ├── Education.tsx        # Educational background
│   ├── Contact.tsx          # Contact form and info
│   ├── Footer.tsx           # Footer with links
│   ├── Button.tsx           # Reusable button component
│   └── SocialLinks.tsx      # Social media icons
├── App.tsx                  # Main app component
├── App.css                  # App-specific styles
├── index.css                # Global styles with Tailwind
└── main.tsx                 # React entry point

public/                       # Static assets
index.html                    # HTML entry point
tailwind.config.js           # Tailwind configuration
postcss.config.js            # PostCSS configuration
vite.config.ts               # Vite configuration
```

## Customization

### Personal Information

Edit the component files to update:

- Social links (LinkedIn, GitHub, Email)
- Professional experience
- Skills and technologies
- Education details
- Contact information

### Styling

- **Colors**: Update `tailwind.config.js` for custom color scheme
- **Animations**: Modify `src/index.css` for animation preferences
- **Typography**: Adjust font sizes in component classes

### Images

Replace professional portrait URLs in:

- [Hero.tsx](src/components/Hero.tsx) - Main profile image
- [About.tsx](src/components/About.tsx) - Secondary portrait

### Contact Form

The contact form in [Contact.tsx](src/components/Contact.tsx) currently shows simulated success/error states. To integrate with an email service, update the `handleSubmit` function with your preferred backend solution (Formspree, Netlify Forms, custom backend, etc.).

## Colors & Theme

**Color Palette**:

- Background: `#1a1a1a` (Dark charcoal)
- Cards: `#252525` (Slightly lighter)
- Accent: `#ff1493` (Bright pink)
- Text: `#ffffff` (White), `#e5e5e5` (Light gray), `#a0a0a0` (Medium gray)

## Responsive Design

The portfolio is fully responsive with breakpoints at:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Mobile menu appears automatically on smaller screens.

## Performance

- Fast loading with Vite's instant HMR
- Optimized images with lazy loading ready
- Minimal CSS footprint with Tailwind CSS
- Tree-shaking of unused utilities

## SEO

The portfolio includes:

- Semantic HTML structure
- Meta descriptions and Open Graph tags
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

## Accessibility

- Semantic HTML elements
- Proper color contrast ratios
- Keyboard navigable
- Focus states on interactive elements
- ARIA labels for icons

## Development Tips

### Adding Animations

Animations are defined in [src/index.css](src/index.css). Add the animation name to component classes:

```tsx
<div className="animate-fadeInUp">Content</div>
```

### Creating Components

All components follow the same pattern with React.FC typing:

```tsx
import React from 'react';

export const ComponentName: React.FC = () => {
  return (...)
};
```

### Color References

Use Tailwind classes for consistency:

- Primary color: `text-[#ff1493]`, `bg-[#ff1493]`
- Dark bg: `bg-[#1a1a1a]`
- Cards: `bg-[#252525]`
- Borders: `border-[#333333]`

## Troubleshooting

### Port Already in Use

If port 5173 is in use, Vite will automatically select the next available port.

### Build Issues

If you encounter build errors:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Auto-deploys on push

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Traditional Hosting

1. Build locally: `npm run build`
2. Upload `dist/` folder to server
3. Configure server for SPA (rewrite all routes to index.html)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Hayti Kafley. All rights reserved.

## Contact & Social

- **Email**: [hayti.kafley@example.com](mailto:hayti.kafley@example.com)
- **LinkedIn**: [https://www.linkedin.com/in/hayti-kafley-2b602615a/](https://https://www.linkedin.com/in/hayti-kafley-2b602615a/)
- **GitHub**: [github.com/haytikafley](https://github.com/haytikafley)

---

**Last Updated**: August 2026

For questions or customization help, refer to the inline comments in component files or the Tailwind CSS and Vite documentation.
