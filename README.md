# Coffee Los Andes

Premium, cinematic, story-driven corporate website for **Coffee Los Andes**, a B2B coffee wholesaler sourcing from Venezuelan plantations and presenting a complete value journey from origin to premium roasted and packaged coffee.

## Architecture

- **Framework:** Astro + TypeScript + Tailwind CSS
- **Motion:** GSAP (hero intro), IntersectionObserver (scroll reveals), CSS transitions
- **Data:** Local typed modules in `src/data/` (storyStages, coffeeLots, brand)
- **i18n:** Türkçe (`/tr/…`) ve Almanca (`/de/…`); metinler `src/i18n/dictionary.ts`, kahve lot metinleri `src/i18n/lotPatches.ts`
- **Output:** Static HTML, minimal client-side JS

### Pages

| Route | Description |
|-------|-------------|
| `/` | Kök adres `/tr/` adresine yönlendirir |
| `/tr/`, `/de/` | Ana sayfa – fullpage hero + öne çıkan lot, B2B bölümleri |
| `/tr/products`, `/de/products` | Winning lots portföyü (8 specialty lot) |
| `/tr/coffees/[slug]`, `/de/coffees/[slug]` | Lot detayı (B2B sunumu) |
| `/tr/about`, `/de/about` | Marka hikâyesi |
| `/tr/contact`, `/de/contact` | B2B formu, iletişim |

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
