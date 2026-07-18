---
id: "0003-define-design-system"
title: "Define DESIGN.md design system and tokens"
type: "task"
status: "closed"
assignee: "antigravity"
blocked_by: ["0001-prototype-design"]
---

## Question
What are the CSS custom properties (tokens), color palette, typography scales, glassmorphic filters, and animation variables for the chosen theme?

We need to create `DESIGN.md` listing our layout grids, responsive breakpoints, font choices (Outfit/Inter), primary/secondary/background colors (in HSL format for easy opacity modifications), and export these as root CSS variables inside `src/styles/variables.css` (or equivalent global stylesheet).

## Deliverables
- A `DESIGN.md` file specifying the design tokens.
- A global variables CSS file defining the corresponding custom properties.

## Resolution
The design system and tokens have been formally defined and documented.
- Created [DESIGN.md](../../DESIGN.md) in the project root containing specifications for:
  - Typography using a Major Third scale (1.25 ratio) with Outfit for headings and Inter for body text.
  - The Minimalist & Clean color palette using root HSL color definitions, including Charcoal overrides for Dark Mode.
  - An 8pt spacing grid scale from `4px` to `96px`.
  - Layout container limits, subtle 12px glassmorphism, and custom bezier transitions.
- Created [src/styles/variables.css](../../src/styles/variables.css) implementing all the tokens as custom CSS properties.
- Refactored [src/styles/index.css](../../src/styles/index.css) to import the new `variables.css` stylesheet.

