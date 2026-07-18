---
id: "0004-build-core-components"
title: "Build Core UI Components and Layout"
type: "task"
status: "closed"
assignee: "antigravity"
blocked_by: ["0002-setup-project", "0003-define-design-system"]
---

## Question
How should the base UI elements and page layout be structured?

We will implement core structural and interactive components:
- `Navbar` (responsive mobile drawer, smooth scroll links, scroll-based backdrop filter).
- `Footer` (copyright, social links).
- Reusable UI elements: `Button` (with premium hover effects), `ProjectCard` (hover elevation, glassmorphism), and `TimelineItem`.

## Deliverables
- Reusable React components styled with Vanilla CSS.
- Main layout wrapper containing Navbar and Footer.

## Resolution
The core UI components and layout have been successfully built, styled, and integrated:
- **Navbar / Header**: Refactored `Header.tsx` to detect window scroll positions and apply a `.navbar-scrolled` transition with a premium box-shadow. Implemented an animated Hamburger toggle button and a sliding mobile drawer menu with built-in smooth scroll handlers that adjust offset positioning.
- **Footer**: Refactored `Footer.tsx` to use design system token margins/gaps and render SVGs with hover translate transitions.
- **ProjectCard**: Created `ProjectCard.tsx` incorporating a card layout, tag list, and visual hover zoom animations.
- **TimelineItem**: Created `TimelineItem.tsx` with layout markers, dot scale animations, and experience tags to display a work experience timeline.
- **Integration & Layout**: Reassembled `App.tsx` into a semantic structure containing Hero, About, Projects, Experience, and Contact sections styled with Vanilla CSS using Design System custom variables. Both build and lint commands compile cleanly.

