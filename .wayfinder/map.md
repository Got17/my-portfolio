# Portfolio Website Map

## Destination
A deployed, fully responsive, modern portfolio website (containing Hero, About/Skills, Experience Timeline, Projects Grid, and Contact sections) built using React + Vite + Vanilla CSS, with a custom design system documented in `DESIGN.md`.

## Notes
- **Tech Stack:** React, Vite, Vanilla CSS.
- **Styling Rules:** Vanilla CSS for maximum control over transitions, glassmorphic shadows, and bespoke typography/color palettes.
- **Skills to Consult:** `wayfinder`, `prototype`, `domain-modeling`, `grilling`.
- **Theme Selection:** User prefers a comparison prototype of **Sleek Dark Mode** and **Minimalist & Clean** before deciding.

## Decisions so far

- [Prototype: Design Aesthetics Comparison](tickets/0001-prototype-design.md) — Selected the Minimalist & Clean aesthetic (Variant B) characterized by warm/light backgrounds, high contrast, crisp typography, and coral/charcoal accents.
- [Define DESIGN.md design system and tokens](tickets/0003-define-design-system.md) — Established a custom font hierarchy (Outfit/Inter), an HSL color palette (coral/charcoal), an 8pt spacing grid, and subtle glassmorphic styling.
- [Build Core UI Components and Layout](tickets/0004-build-core-components.md) — Created standard layouts (Header, Footer) and modular UI components (ProjectCard, TimelineItem) with smooth responsive animations.
- [Assemble Pages and Content Sections](tickets/0005-assemble-sections.md) — Fully assembled all five content sections on the homepage, populated them with high-fidelity visual mockups, and verified clean compilation.
- [Setup Deployment (Vercel/Netlify)](tickets/0006-setup-deployment.md) — Set up dual deployment paths: browser-based Vercel CI/CD integration and a containerized Docker configuration for local hosting on their laptop server.





## Not yet specified
- **Form Handling:** Whether to use a third-party form handler (e.g., Formspree, EmailJS) or simple mailto links for the contact section.
- **Custom Domain:** Configuring a custom domain name for the live portfolio website once deployed.
- **Additional Sections:** Testimonials/Recommendations or a Blog/Writing section if needed later.

## Out of scope
- Backend API server (we will keep the website static for easy hosting).
