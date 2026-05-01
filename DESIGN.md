# Design Brief

**Purpose**: Premium product landing page for PESOMA Under Sink Organizer — showcase, inspire, convert.

**Tone & Aesthetic**: Luxury/refined with modern edge. High visual intensity befits showcase category. 3D depth, smooth animations, premium typography create confidence in product quality.

**Palette**:
| Token | OKLCH | Purpose |
|-------|-------|---------|
| Primary (dark charcoal) | 0.47 0.22 22 | Text, headlines, structural elements |
| Accent (orange) | 0.60 0.22 25 | CTAs, highlights, guarantee badge |
| Background (white) | 0.99 0 0 | Main surface |
| Card | 1.0 0 0 | Elevated surfaces (specifications, benefits) |
| Muted (light grey) | 0.92 0 0 | Secondary backgrounds, dividers |
| Secondary (charcoal) | 0.55 0.08 0 | Subtle text hierarchy |

**Typography**:
- Display: Fraunces (serif, elegant) — headlines, guarantee badge, hero copy
- Body: General Sans (clean sans-serif) — descriptions, specs, body text
- Mono: Geist Mono (technical clarity) — measurements, tech specs if needed

**Shape Language**: `border-radius: 0.625rem` for subtle rounded corners on cards, inputs, buttons. Sharp corners on hero images for product precision.

**Structural Zones**:
| Zone | Background | Purpose |
|------|-----------|---------|
| Header | white, subtle shadow | Navigation, branding |
| Hero | white + product image shadow | 3D positioned product image, guarantee banner |
| Benefits | grey muted (0.92 0 0) | 3-tier feature grid with icons |
| Specifications | white, card elevation | Technical details, materials, dimensions |
| Social Proof | white with bottom border | Testimonials, ratings (if available) |
| CTA Section | gradient (orange to darker orange) | Final call-to-action, "Add to Cart" |
| Footer | muted background (0.92 0 0) | Links, copyright |

**Elevation & Depth**: 3D button styling with graduated shadows (`shadow-3d-sm`, `shadow-3d-md`, `shadow-3d-lg`). Hover: scale +5%, shadow intensifies. Active: scale -5%, feeling of press-down. Product image: elevated shadow to suggest floating above surface.

**Motion Choreography**:
- Entrance: fade-in-up (0.6s ease-out) staggered for sections
- Buttons: scale transitions on hover/active, smooth 0.3s ease-out
- Float animation (3s) for guarantee badge or hero accent elements
- No bouncy/overstated animation — premium motion is restraint

**Component Patterns**:
- Buttons: 3D styled, orange accent, text-white, shadow-3d-md, hover:scale-105, active:scale-95
- Cards: white, elevated shadow, rounded-lg, subtle border
- Badge (guarantee): serif display font, orange accent background, positioned absolutely top-right hero
- Grid (features): 3-column mobile-responsive, icon + label + description

**Responsive Design**: Mobile-first. Hero stacks vertically on `sm`, benefits grid 1→2→3 columns, CTA button full-width on mobile.

**Signature Detail**: 3D guarantee badge (top-right hero) with "3 YEARS" in serif display, spinning hover animation, orange gradient background.

**Dark Mode**: Yes — secondary theme with adjusted OKLCH values. Orange accent becomes lighter (0.68 0.20 24), backgrounds darker (0.14 0 0).

**Constraints**: No generic Bootstrap colors. No default Tailwind shadows. Every color token from palette. Fraunces + General Sans exclusively (no fallbacks to system fonts for display).

