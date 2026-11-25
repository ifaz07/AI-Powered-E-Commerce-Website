---
name: Editorial Noir
colors:
  surface: '#fcf8fc'
  surface-dim: '#dcd9dd'
  surface-bright: '#fcf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2f7'
  surface-container: '#f0edf1'
  surface-container-high: '#eae7eb'
  surface-container-highest: '#e4e1e6'
  on-surface: '#1b1b1e'
  on-surface-variant: '#50453b'
  inverse-surface: '#303033'
  inverse-on-surface: '#f3f0f4'
  outline: '#82756a'
  outline-variant: '#d4c4b7'
  surface-tint: '#7d562d'
  primary: '#7d562d'
  on-primary: '#ffffff'
  primary-container: '#d4a373'
  on-primary-container: '#5b3912'
  inverse-primary: '#f0bd8b'
  secondary: '#9a442d'
  on-secondary: '#ffffff'
  secondary-container: '#fc9174'
  on-secondary-container: '#742814'
  tertiary: '#3d627c'
  on-tertiary: '#ffffff'
  tertiary-container: '#8cb1ce'
  on-tertiary-container: '#1d445d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcbd'
  primary-fixed-dim: '#f0bd8b'
  on-primary-fixed: '#2c1600'
  on-primary-fixed-variant: '#623f18'
  secondary-fixed: '#ffdbd2'
  secondary-fixed-dim: '#ffb4a1'
  on-secondary-fixed: '#3c0800'
  on-secondary-fixed-variant: '#7c2e19'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#a6cbe9'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#244a63'
  background: '#fcf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e1e6'
typography:
  display-xl:
    fontFamily: EB Garamond
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 17px
    fontWeight: '300'
    lineHeight: 28px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system establishes an ultra-refined, editorial minimalist luxury experience for high-end commerce. It deliberately rejects the hyperactive, gamified tropes of standard digital storefronts, replacing them with the poise, quiet authority, and spatial pacing of a luxury print publication or private atelier.

The visual style blends **Editorial Minimalism** with **Subtle Glassmorphism**. A clean, light canvas allows high-resolution product imagery and warm typography to emerge with cinematic gravity. Layouts favor generous, measured whitespace, deliberate typographical hierarchy, whisper-thin borders, and delicate warm metallic accents over heavy fills and aggressive calls to action. The interface recedes smoothly, keeping curations and craftsmanship at the visual forefront.

## Colors

The palette is anchored in layered, warm neutral tones, featuring a clean light canvas paired with sophisticated dark accents:
- **Canvas Base (`#ffffff`):** The clean, luminous root surface.
- **Surface Elevation 1 (`#f4f4f5`):** Structural backdrops and primary containers.
- **Surface Elevation 2 (`#e4e4e7`):** Elevated cards, subtle overlays, and active states.
- **Surface Elevation 3 (`#d4d4d8`):** Modals, dropdowns, and flyout navigation layers.
- **Rich Noir (`#121215`):** High-contrast typographic scales and structural elements that command attention while feeling printed and bespoke.
- **Muted Platinum (`#71717a`):** Subdued captions, tertiary metadata, and inactive glyphs.
- **Amber Gold (`#d4a373`):** Primary delicate accent for bespoke focal points, selection borders, fine badges, and subtle currency indicators.
- **Terracotta Highlight (`#e07a5f`):** Secondary editorial accent reserved for notifications, promotional curation tags, and rare high-priority states.

## Typography

The typographical pairing relies on contrast between classical editorial authority and ultra-clean modern precision:
- **Headlines (`EB Garamond`):** Set with deliberate tracking and natural proportions. Large display titles evoke luxury editorial lookbooks and prestige catalogs. Italic variations are encouraged for editorial accents, collection narratives, and curation subtitles.
- **Body & Controls (`Hanken Grotesk`):** Clean, geometric, and contemporary. Body text uses light weights (`300` and `400`) with generous line heights to preserve visual breathing room.
- **Labels & Micro-copy (`Hanken Grotesk` uppercase):** Category markers, badge text, currency notations, and metadata employ wide tracking (`0.08em` to `0.12em`) in all-caps to construct architectural order.

## Layout & Spacing

The layout philosophy follows an expansive, architectural fluid grid with strict outer anchors:
- **Desktop (1200px+):** 12-column grid with `margin-desktop` (4rem) and wide `gutter-desktop` (2.5rem). Content max-width is clamped at `1440px` to maintain editorial integrity and prevent excessive scan lengths.
- **Tablet (768px - 1199px):** 8-column layout with 2rem margins and 1.5rem gutters. Product grids step down from 4 columns to 2 or 3.
- **Mobile (< 768px):** 4-column layout with 1.25rem margins and 1rem gutters. Editorial hero blocks maintain vertical spacing ratios to preserve dramatic cadence.
- **Rhythm:** Generous vertical sections rely on `space-xl` (3rem) and dynamic multiples (`4.5rem`, `6rem`) to let high-value inventory breathe without artificial compaction.

## Elevation & Depth

Visual hierarchy is maintained through translucent glassmorphic layering, subtle boundary strokes, and diffused, warm ambient occlusion:
- **Surface Materials:** Elevated surfaces use semi-transparent fills (`rgba(255, 255, 255, 0.85)` to `rgba(244, 244, 245, 0.95)`) coupled with a heavy background blur (`backdrop-filter: blur(16px)` to `blur(24px)`).
- **Hairline Borders:** Surfaces are delineated by ultra-fine 1px borders using low-opacity neutral tints (`rgba(18, 18, 21, 0.08)` to `rgba(212, 163, 115, 0.25)` on focus/hover).
- **Ambient Occlusion:** Heavy drop shadows are avoided. Instead, modals and elevated drawers rely on ultra-diffused, tinted shadow blooms: `0 24px 48px -12px rgba(18, 18, 21, 0.1), 0 0 1px rgba(212, 163, 115, 0.15)`.

## Shapes

The design system utilizes **Soft** corner radiuses (`roundedness: 1`) to retain an architectural, bespoke silhouette reminiscent of physical luxury packaging, gallery placards, and framed art.

Standard elements (buttons, inputs, cards) use `0.25rem` (4px). Elevated overlays and panels take `rounded-lg` (`0.5rem` / 8px). Pills and large circular border radiuses are prohibited, except for micro-badges and subtle dot indicators, preventing the application from feeling casual or algorithmic.

## Components

### Buttons
- **Primary:** Rich noir fill (`#121215`) enclosed in a razor-thin border (`#d4a373`), featuring warm ivory/white text (`#ffffff`) in tracked uppercase (`label-lg`). Hover shifts the border to full amber saturation with subtle surface lightening (`#1e1e24`).
- **Secondary / Ghost:** Transparent background with subtle border (`rgba(18, 18, 21, 0.15)`), transitioning to warm amber text on hover.
- **Text Action:** Unbordered, subtle underline with 2px offset; underline expands or lightens on hover.

### Product & Editorial Cards
- **Base:** Clean container (`#f4f4f5`) with a hairline border (`rgba(18, 18, 21, 0.06)`).
- **Image Treatment:** Aspect ratios strictly locked (3:4 or 4:5 portrait); images sit under a 3% ambient vignette.
- **Interaction:** On hover, the container border warms to `rgba(212, 163, 115, 0.3)` and the image performs a slow, subtle zoom (1.02x scale over 600ms ease-out).

### Chips & Badges
- **Editorial Badges:** Small rectangular tags with zero-fill, `0.25rem` corners, and fine border in amber (`#d4a373`) or terracotta (`#e07a5f`). Text set in `label-md` tracking.
- **Filter Chips:** Frosted translucent background (`rgba(255, 255, 255, 0.8)`), light border, transitioning to an amber-tinted active surface with dark glyphs.

### Form Inputs & Selectors
- **Input Fields:** Recessed or flush surface (`#ffffff`) bordered on all sides or styled with a minimalist bottom border (`rgba(18, 18, 21, 0.15)`). Text in rich noir, placeholder in muted platinum (`#71717a`). Focus state introduces a crisp amber accent line (`#d4a373`) without glowing outer rings.
- **Checkboxes & Radios:** Minimalist square and diamond-like geometry. Unchecked: 1px border (`rgba(18, 18, 21, 0.3)`). Checked: Amber gold solid glyph on rich noir background.

### Cart Drawer & Summary Flyout
- **Slide-over Drawer:** Elevated light glass backdrop (`rgba(255, 255, 255, 0.92)` with `20px` blur), framed by an inner left border (`rgba(18, 18, 21, 0.08)`).
- **Line Items:** Divided by thin neutral horizontal rules (`rgba(18, 18, 21, 0.06)`), displaying Garamond serif item names paired with clean Hanken Grotesk sizing, quantity counters, and amber price tags.