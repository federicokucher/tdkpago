# Tdkpago - AI Agent Instructions

> This file provides context for AI coding agents working on the Tdkpago project.

## Project Overview

Tdkpago is a professional landing page for a payment infrastructure company, built with modern web technologies. The site showcases payment solutions, company information, and provides contact forms.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Deployment**: Vercel

## Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# TypeScript type check
npx tsc --noEmit

# Add new shadcn component
npx shadcn@latest add [component-name]

# Deploy to Vercel
vercel --prod
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation with dropdowns
│   │   ├── Footer.tsx     # Professional footer
│   │   └── Layout.tsx    # Main layout wrapper
│   └── ui/                # shadcn components
├── pages/
│   ├── Home.tsx           # Landing page
│   ├── Technology.tsx     # Tech features
│   ├── Blog.tsx          # Blog posts
│   ├── About.tsx         # Company info
│   ├── Contact.tsx       # Contact form
│   ├── GetStarted.tsx    # Sign up form
│   └── NotFound.tsx      # 404 page
├── hooks/
│   └── useTheme.ts       # Dark/light mode toggle
└── index.css             # Tailwind + custom styles
```

## Design System

### Colors
- Primary: Green accent (style Supabase)
- Background: Light/dark mode support
- Use CSS variables from Tailwind v4

### UI Patterns
- Grid backgrounds (`bg-grid` class)
- Gradient effects (`bg-gradient-radial`)
- Text gradients (`text-gradient`)
- Glow effects (`glow-green`)
- Glassmorphism cards with `backdrop-blur`

### Animations
- Use Framer Motion for scroll animations
- `fadeInUp`, `scaleIn`, `staggerContainer` variants available
- Hover effects on cards and buttons

## Key Conventions

### Components
- Always use shadcn/ui components when available
- Use `Card`, `Button`, `Input`, `Badge` from `@/components/ui`
- Custom components go in `src/components/`

### Styling
- Use Tailwind CSS utility classes
- Custom utilities in `src/index.css`
- Support dark mode with `dark:` prefix

### TypeScript
- Strict mode enabled
- No unused variables allowed
- Use proper types for props

### Git Workflow
- Feature branches from `develop`
- Commit messages: `feat:`, `fix:`, `docs:`, `chore:`
- PR to `develop` for testing
- Merge to `main` for production

## Available Pages

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Main landing with hero, features, CTA |
| `/technology` | Technology | Technical features and integrations |
| `/blog` | Blog | Blog posts and articles |
| `/about` | About | Company information and timeline |
| `/contact` | Contact | Contact form |
| `/get-started` | Get Started | Sign up form |

## SEO & Meta

- Meta tags configured in `index.html`
- sitemap.xml in `public/`
- robots.txt in `public/`
- Open Graph tags for social sharing

## Deployment

- Automatic deployment on push to `main`
- Preview deployments for PRs
- Vercel platform
- Domain: react-minimax.vercel.app

## Common Tasks

### Adding a new page
1. Create page in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navbar if needed in `src/components/layout/Header.tsx`
4. Update footer if needed in `src/components/layout/Footer.tsx`

### Adding a new shadcn component
```bash
npx shadcn@latest add [component-name]
```

### Updating the theme
- Colors: Edit `src/index.css`
- Dark mode: Use `useTheme` hook from `src/hooks/useTheme.ts`

## Notes

- The site uses React Router for navigation
- Mobile-responsive design
- Dark mode toggle available in header
- All external links should open in new tab with proper rel attributes
