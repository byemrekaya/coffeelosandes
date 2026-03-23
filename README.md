# Coffee Los Andes

Premium, cinematic, story-driven corporate website for **Coffee Los Andes**, a B2B coffee wholesaler sourcing from Venezuelan plantations and presenting a complete value journey from origin to premium roasted and packaged coffee.

## Architecture

- **Framework:** Astro + TypeScript + Tailwind CSS
- **Motion:** GSAP (hero intro), IntersectionObserver (scroll reveals), CSS transitions
- **Data:** Local typed modules in `src/data/` (storyStages, coffeeLots, brand)
- **Output:** Static HTML, minimal client-side JS

### Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage – fullpage hero + featured lot, B2B sections |
| `/products` | Winning lots portfolio (8 specialty lots) |
| `/coffees/[slug]` | Premium B2B lot detail (wholesale presentation) |
| `/about` | Brand story, Venezuelan roots, roasting philosophy |
| `/contact` | B2B wholesale inquiry form, company info |

### Components

- **Layout:** `Navbar`, `Footer`, `BaseLayout`, `SectionHeader`, `CTASection`
- **Storytelling:** `HeroSection`, `StoryJourneySection`, `ProcessStageSection`, `StoryTransitionBlock`
- **B2B:** `B2BValueSection`
- **Coffee lots:** `coffee/CoffeeLotCard`, `coffee/CoffeeLotArticle`, portfolio + detail pages
- **Contact:** `ContactForm`
- **Motion:** `HeroMotionIsland` (GSAP hero intro), scroll reveal via `data-reveal`

### Design System

- **Colors:** espresso, charcoal, bronze, gold, terracotta, olive, cream
- **Typography:** Cormorant Garamond (display), Inter (sans)
- **Utilities:** `btn-primary`, `btn-secondary`, `glass-panel`, `stage-eyebrow`, `stage-heading`, `section-shell`

## Commands

```bash
npm run dev      # Start dev server (port 4321)
npm run build    # Static build
npm run preview  # Preview production build
```

## Performance & Accessibility

- `prefers-reduced-motion` respected (animations disabled)
- Semantic HTML, heading hierarchy, `aria` attributes
- Lazy loading, minimal hydration, optimized images (when added)
