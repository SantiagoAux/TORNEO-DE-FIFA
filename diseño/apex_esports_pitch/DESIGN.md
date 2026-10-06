---
name: Apex Esports Pitch
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#b9cbb9'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#849585'
  outline-variant: '#3b4b3d'
  surface-tint: '#00e478'
  primary: '#f1ffef'
  on-primary: '#003919'
  primary-container: '#00ff87'
  on-primary-container: '#007138'
  inverse-primary: '#006d36'
  secondary: '#ffb3b2'
  on-secondary: '#680013'
  secondary-container: '#b60129'
  on-secondary-container: '#ffc2c1'
  tertiary: '#fffaf8'
  on-tertiary: '#3a3000'
  tertiary-container: '#ffdd4f'
  on-tertiary-container: '#746100'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#60ff98'
  primary-fixed-dim: '#00e478'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005227'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ffb3b2'
  on-secondary-fixed: '#410008'
  on-secondary-fixed-variant: '#92001f'
  tertiary-fixed: '#ffe16d'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display-hero:
    fontFamily: Anton
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 76px
    letterSpacing: 0.04em
  display-hero-mobile:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: 0.03em
  headline-xl:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: 0.03em
  headline-xl-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  stat-counter:
    fontFamily: Barlow Condensed
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 30px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Barlow Condensed
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-micro:
    fontFamily: Barlow Condensed
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 13px
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system fuses the electric spectacle of top-tier stadium football with the razor-sharp precision of premier competitive esports. Built for competitive EA FC tournaments, the aesthetic channels broadcast-grade motion graphics, holographic Ultimate Team card packs, and late-night arena lighting.

The visual direction combines **Glassmorphism**, **High-Contrast Sport Dynamic**, and **Cyber-Tactile HUD elements**:
- **Atmospheric Depth:** Carbon fiber textures and deep midnight stadium gradients sit under glowing neon accents, evoking a high-stakes arena under floodlights.
- **Holographic Dimension:** Foil sheens, prismatic gradients, and chromatic edge reflections simulate rare physical card packs and digital trophies.
- **Aggressive Motion Energy:** Chamfered geometry, high-octane 12-degree italicized cuts, and luminous rim lighting create tension, urgency, and victory.
- **Target Audience:** Competitive FIFA/EA FC players, tournament organizers, streamers, and passionate football gaming communities demanding immediate telemetry, bracket clarity, and status presentation.

## Colors

The palette establishes an aggressive, high-contrast visual hierarchy tuned exclusively for dark mode stadium environments.

### Core Swatches
- **Primary (`#00FF87` Pitch Neon):** Used for primary calls-to-action, active match indicators, tournament progression paths, and win states. Evokes electrified turf and crisp stadium laser-lines.
- **Secondary (`#FF4655` Rival Crimson / Blaze):** Represents knockout brackets, eliminatory danger, live match clocks, and defensive telemetry.
- **Tertiary (`#FFD700` Championship Cyber Gold):** Reserved for trophies, tournament grand finals, MVP badges, and premier card rarities.
- **Accent Cyan (`#00E5FF` Virtual Pitch Glow):** Applied to telemetry metrics, connection pings, bracket connectors, and tactical overlays.
- **Neutral Pitch Black (`#090D16` & `#0D131F` Deep Carbon):** Foundational backdrops that absorb ambient screen light, providing maximum contrast for neon glows.

### Semantic Tiers
- **Surface Level 0 (Pitch Black):** `#06090F` - Global viewport canvas.
- **Surface Level 1 (Carbon Mesh):** `#090D16` - Structural containers, sidebars, bracket bays.
- **Surface Level 2 (Glass Deck):** `rgba(13, 19, 31, 0.75)` with `12px` backdrop-blur and `rgba(255, 255, 255, 0.08)` border strokes.
- **Surface Level 3 (Active HUD / Card Front):** `rgba(22, 32, 50, 0.85)` with direct neon rim reflections.

## Typography

The typographic system creates an authentic sports broadcasting hierarchy:
- **Anton (Display & Headlines):** Delivers intense stadium presence. Used in uppercase for match banners, tournament phases, score callouts, and winner alerts.
- **Space Grotesk (Body & Functional Text):** Balances technical esports telemetry with supreme readability across dense stat sheets, rules, player biographies, and fixture logs.
- **Barlow Condensed (Scores, Badges & Labels):** Provides an athletic, uniform cadence for match clocks, player overalls (OVR), bracket tags, and leaderboard points.

All uppercase headings use tracking between `0.02em` and `0.06em` to maintain legibility against dark, high-luminance backgrounds. Numbers inside scoreboards, bracket modules, and live timers must always use tabular figures.

## Layout & Spacing

The layout is built on a high-density 12-column dynamic fluid grid engineered to host dense tournament brackets, live stream viewports, and multi-tier statistics.

### Screen Adaptations
- **Mobile (< 768px):** Single-column stack with persistent bottom command bar (`space-sm` internal padding). Bracket nodes shift to swipeable cards with fixed snap anchors. Canvas margins set to `margin` (1rem).
- **Tablet (768px - 1199px):** 8-column layout. Match stats and stream overlays switch to split 50/50 views with sticky sub-headers. Section margin expands to `margin-tablet` (2rem).
- **Desktop (1200px+):** Full 12-column broadcast command center. Brackets expand horizontally with pinned stage controls; player comparisons sit in side-by-side holographic viewports. Margin is locked to `margin-desktop` (3rem) with a max container limit of 1440px.

All component spacing respects strict 4px / 8px incremental intervals, enforcing modular alignment between match rows, squad matrices, and bracket connective nodes.

## Elevation & Depth

Visual hierarchy leverages light-emitting glass sheets, synthetic carbon substrates, and high-frequency neon edge illumination.

### Tiers of Depth
- **Ground Floor (Base Canvas):** Flat pitch black `#06090F` overlaid with subtle diagonal micro-scanlines and a deep central radial glow of emerald (`rgba(0, 255, 135, 0.04)`).
- **Tier 1 (Panels & Sub-systems):** Solid `#0D131F` with a 1px border of `rgba(255, 255, 255, 0.07)`. No outer shadow.
- **Tier 2 (Interactive Modules & Brackets):** Semi-transparent `#0D131F`/85% blend over backdrop filter blur (16px). Outlines use a directional top-to-bottom gradient stroke (`rgba(0, 255, 135, 0.3)` to `rgba(255, 255, 255, 0.02)`).
- **Tier 3 (Elevated / Selected Match / Modals):** Crisp glass tint (`#162032`/90%) with dual-ring perimeter lighting: inner stroke `rgba(255, 255, 255, 0.15)`, outer luminous aura `0 0 24px rgba(0, 255, 135, 0.25)`.
- **Tier 4 (Championship & Card Reveal):** Holographic gold illumination using `0 0 40px rgba(255, 215, 0, 0.35)` with a multi-angle prismatic sheen across the top edge.

Never use diffuse grey or muddy black drop shadows; all elevation relies on contrast borders, luminescence, and glass blurs.

## Shapes

The design system employs a tactical, engineered silhouette language (**Soft / Level 1**). 

- **Corner Radii:** Standard components feature `0.25rem` (4px) corner rounding to convey mechanical precision. Larger cards, modals, and stadium banners utilize `0.5rem` (8px).
- **Chamfered Cuts:** High-importance elements (Action Buttons, Match Badges, FUT Cards) feature 45-degree corner notches or 12-degree forward-leaning dynamic angles, echoing high-performance automotive chassis and elite gaming hardware.
- **Segmented Dividers:** Borders and section splitters are frequently broken into dash-segmented meters, representing HUD telemetry and electronic scoreboard tracks.

## Components

### Buttons & Interactive Controls
- **Primary CTA ("JUGAR AHORA" / "CONFIRMAR"):** High-impact neon green (`#00FF87`) fill with jet-black (`#06090F`) bold condensed typography. Chamfered bottom-right notch. Hover state unleashes a radioactive `0 0 20px #00FF87` bloom and an instant forward shear of 2 degrees.
- **Secondary CTA ("VER BRACKET"):** Transparent glass fill with `rgba(0, 255, 135, 0.3)` boundary stroke and neon green text. On hover, fills with `rgba(0, 255, 135, 0.12)`.
- **Elimination / Danger Button:** Blaze crimson (`#FF4655`) with high-contrast white text, used strictly for match disputes, forfeits, and live red-zone alerts.

### FIFA Ultimate Team (FUT) Style Player Cards
- **Architecture:** Tall aspect ratio (approx. 1:1.45) with shield-tapered top-header and bottom point.
- **Surfacing:** Prismatic holographic gradient overlay with `mix-blend-mode: color-dodge`. Dynamic mouse-tracking sheen.
- **Content Stacking:** Massive OVR rating and position badge in `Barlow Condensed` on top-left, club crest and nation flag stacked directly below, high-res cutout player portrait in the center foreground, and bottom 6-attribute stat matrix (PAC, SHO, PAS, DRI, DEF, PHY) with mono numeric scales.

### Tournament Brackets & Match Nodes
- **Structure:** Modular horizontal bracket cards anchored by glowing SVG bus-routes.
- **Match Status:** Ongoing live matches receive an animated pulsing neon border (`#00FF87` or `#FF4655` depending on game stage). Finished matches fade losers to 40% opacity while the winner's nameplate glows with a subtle gold accent tag.
- **Scoreboard Capsule:** Centered, high-contrast monospace blocks (`#06090F` background) with high-visibility white scores.

### Badges & Status Chips
- **Live Match Chip:** Electric crimson (`#FF4655`) pill with a live pulsing dot and uppercase condensed lettering `LIVE EN VIVO`.
- **Tier Chips (ORO / PLATA / BRONCE):** Metallic dual-tone gradient badges with subtle metallic rim bevels and 11px micro-typography.

### Input Fields & Selectors
- **Fields:** Dark carbon backdrop (`#090D16`), inset 1px border (`rgba(255, 255, 255, 0.12)`), text rendered in crisp `Space Grotesk`.
- **Focus State:** Border flashes instantly to `#00FF87` with an ambient glow radius of `6px rgba(0, 255, 135, 0.25)`.
- **Search & Filter Bars:** Integrated magnifying glass icon tinted in `#00E5FF` Cyan, embedded hotkey tags (`[ESC]`, `[ENTER]`) with micro-borders.

### Checkboxes, Switches & Radios
- **Checkboxes:** Squared with 2px bevel. Inactive: dark frame. Checked: solid `#00FF87` fill with dark tick mark and peripheral luminescence.
- **Switches:** Low-profile mechanical slider with high-voltage neon indicator pill on active state.