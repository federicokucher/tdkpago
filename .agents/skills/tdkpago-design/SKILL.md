---
name: tdkpago-design
description: Design system for Tdkpago landing pages. Follow shadcn/ui aesthetic, use Lucide icons, and maintain subtle, professional look.
---

# Tdkpago Design System

Follow shadcn/ui default aesthetic - subtle, clean, and professional. Avoid flashy effects.

## Philosophy

- Keep it simple and clean like shadcn/ui
- Subtle animations, not flashy
- Professional, trustworthy appearance
- No emojis in content - use Lucide React icons

## Colors

- Use shadcn/ui default color palette
- Primary accent green: `oklch(0.45 0.15 160)` for highlights
- Keep dark mode as currently implemented
- Avoid bold or neon colors

## Typography

- Use system/default fonts (no external fonts)
- Follow shadcn/ui sizing defaults
- Text colors: foreground, muted-foreground

## Components

### Icons
- Use **Lucide React** only (never emojis in content)
- All decorative icons need `aria-hidden="true"`
- Import from `lucide-react`

### Cards
```jsx
// Glass card style
<Card className="border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 hover:border-primary/30 transition-all duration-300">
```

### Buttons
- Use shadcn/ui Button component with variants
- Primary for main CTAs
- Outline for secondary actions

### Badges
- Use shadcn/ui Badge for categories/labels

## Layout

- max-width: 1280px for main container
- Use: `container mx-auto px-4`
- Consistent vertical spacing between sections
- Mobile-first approach

## Animations

- Use Framer Motion for scroll-triggered entrances
- Subtle hover effects on cards: `hover:scale-[1.02]`
- Avoid flashy or distracting animations
- Respect prefers-reduced-motion

## Accessibility

- All icons: `aria-hidden="true"`
- Form inputs: `autocomplete` and `aria-label` attributes
- Proper labels for all form controls
- Focus states on interactive elements

## Anti-patterns (avoid)

- Emojis in content - use Lucide icons instead
- External custom fonts
- Neon or overly bright colors
- Flashy gradient animations
- Complex visual effects

## Example: Feature Card

```jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Zap } from "lucide-react"

<Card className="border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 hover:border-primary/30 transition-all duration-300 h-full">
  <CardHeader>
    <Zap className="w-8 h-8 mb-2 text-primary" aria-hidden="true" />
    <CardTitle className="text-lg">Feature Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Description</p>
  </CardContent>
</Card>
```
