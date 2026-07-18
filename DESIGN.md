# Design System Spec (Minimalist & Clean - Variant B)

This document specifies the design tokens, layout grids, color palettes, and responsive breakpoints for the my-portfolio codebase. All styles are implemented as root custom properties in [src/styles/variables.css](src/styles/variables.css).

---

## 1. Typography

The design system uses a hybrid sans-serif approach to combine premium geometric display traits with clean readability.

*   **Display / Headings Font**: `Outfit` (sans-serif, via `--font-heading`)
*   **Body Copy Font**: `Inter` (sans-serif, via `--font-body`)
*   **Monospace Font**: `Fira Code` (monospace, via `--font-mono`)

### Typographic Scale (Major Third 1.25 Ratio)

All font sizes are relative to the browser default of `16px` (`1rem`).

| Token | Rem Value | Equivalent Pixel Value | Usage |
| :--- | :--- | :--- | :--- |
| `--text-xs` | `0.75rem` | `12px` | Small labels, timestamps, metadata |
| `--text-sm` | `0.875rem` | `14px` | Secondary buttons, helper text, nav links |
| `--text-base` | `1.00rem` | `16px` | Standard body text, primary inputs/buttons |
| `--text-lg` | `1.25rem` | `20px` | Blog/section intro paragraphs, card titles |
| `--text-xl` | `1.563rem` | `25px` | Standard section headers, subheadings |
| `--text-2xl` | `1.953rem` | `31.25px` | Main section titles, feature callouts |
| `--text-3xl` | `2.441rem` | `39px` | Secondary hero titles, modal headings |
| `--text-4xl` | `3.052rem` | `48.8px` | Primary hero headings (h1) |
| `--text-5xl` | `3.815rem` | `61px` | Large hero impact text |

### Line Heights

*   `--lh-tight`: `1.15` (for headers)
*   `--lh-snug`: `1.3` (for large text / card descriptions)
*   `--lh-normal`: `1.5` (for default body text)
*   `--lh-relaxed`: `1.625` (for longer readability sections like blog posts)

---

## 2. Color Palette (Minimalist & Clean Theme)

Colors are defined using raw HSL value tokens to allow native opacity changes (e.g. `hsla(var(--accent-hsl), 0.5)`).

### Light Theme (Default)

*   **Primary Background**: `hsl(0, 0%, 98%)` (via `--bg-primary-hsl`)
*   **Secondary Background**: `hsl(0, 0%, 100%)` (via `--bg-secondary-hsl`)
*   **Primary Text**: `hsl(240, 10%, 4%)` (via `--text-primary-hsl`)
*   **Secondary Text**: `hsl(240, 5%, 35%)` (via `--text-secondary-hsl`)
*   **Muted Text**: `hsl(240, 4%, 60%)` (via `--text-muted-hsl`)
*   **Primary Accent**: `hsl(12, 90%, 55%)` (via `--accent-hsl` - Coral)
*   **Accent Light**: `hsl(12, 90%, 65%)` (via `--accent-light-hsl`)
*   **Border Color**: `hsl(240, 5.9%, 90%)` (via `--border-color-hsl`)
*   **Border Glass**: `hsl(240, 5.9%, 93%)` (via `--border-glass-hsl`)

### Dark Theme Override

*   **Primary Background**: `hsl(240, 10%, 4%)` (Charcoal Black)
*   **Secondary Background**: `hsl(240, 5.9%, 10%)` (Dark Grey Card)
*   **Primary Text**: `hsl(0, 0%, 98%)` (Warm Light White)
*   **Secondary Text**: `hsl(240, 5%, 70%)` (Silver Gray)
*   **Muted Text**: `hsl(240, 4%, 50%)`
*   **Border Color**: `hsl(240, 5.9%, 20%)`
*   **Border Glass**: `hsl(240, 5.9%, 25%)`

---

## 3. Spacing Scale (8pt Grid)

To enforce vertical rhythm, margins, paddings, and flex/grid gaps must strictly adhere to the following scale.

| Token | Rem Value | Equivalent Pixel Value |
| :--- | :--- | :--- |
| `--space-1` | `0.25rem` | `4px` |
| `--space-2` | `0.5rem` | `8px` |
| `--space-3` | `0.75rem` | `12px` |
| `--space-4` | `1.0rem` | `16px` |
| `--space-6` | `1.5rem` | `24px` |
| `--space-8` | `2.0rem` | `32px` |
| `--space-12` | `3.0rem` | `48px` |
| `--space-16` | `4.0rem` | `64px` |
| `--space-20` | `5.0rem` | `80px` |
| `--space-24` | `6.0rem` | `96px` |

---

## 4. Glassmorphism & Borders

Standard rules for card styling and backdrop filters. To apply, use the `.glass-panel` utility class.

*   **Backdrop Blur**: `blur(12px)` (`--backdrop-blur`)
*   **Card Opacity**: `0.85`
*   **Border Radius**:
    *   `--radius-sm`: `6px` (Pills, small tags)
    *   `--radius-md`: `12px` (Buttons, inputs, text areas)
    *   `--radius-lg`: `20px` (Feature cards, modal overlays)
    *   `--radius-full`: `9999px` (Avatars, toggle switches)

---

## 5. Responsive Breakpoints

Mobile-first responsive media queries without gaps:

*   **Mobile Only**: `@media (max-width: 767px)`
*   **Tablet Portrait/Landscape**: `@media (min-width: 768px) and (max-width: 1023px)`
*   **Desktop & Up**: `@media (min-width: 1024px)`
*   **Large Desktop**: `@media (min-width: 1280px)`

---

## 6. Transitions & Animations

Consistent curves and durations for hover effects, active taps, and modal entries.

*   **Snappy hover**: `0.15s ease` (`--transition-fast`)
*   **Smooth change**: `0.3s cubic-bezier(0.4, 0, 0.2, 1)` (`--transition-normal`)
*   **Modal/slow movement**: `0.5s cubic-bezier(0.4, 0, 0.2, 1)` (`--transition-slow`)

---

## 7. Layout Grids & Containers

*   **Page Containers**: Wrapped in `.container` with max-width `var(--container-xl)` (`1280px`) and lateral padding of `var(--space-6)`.
*   **Grid Systems**: Standard CSS Grids (e.g. 12-column layout or flex row/col) must use spacing tokens for gaps:
    *   Primary grids: `gap: var(--space-6);` (standard grid items)
    *   Dense grids: `gap: var(--space-4);` (mini timelines or filter tags)
