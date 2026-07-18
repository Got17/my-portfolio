---
id: "0003-define-design-system"
title: "Define DESIGN.md design system and tokens"
type: "task"
status: "open"
assignee: ""
blocked_by: ["0001-prototype-design"]
---

## Question
What are the CSS custom properties (tokens), color palette, typography scales, glassmorphic filters, and animation variables for the chosen theme?

We need to create `DESIGN.md` listing our layout grids, responsive breakpoints, font choices (Outfit/Inter), primary/secondary/background colors (in HSL format for easy opacity modifications), and export these as root CSS variables inside `src/styles/variables.css` (or equivalent global stylesheet).

## Deliverables
- A `DESIGN.md` file specifying the design tokens.
- A global variables CSS file defining the corresponding custom properties.
