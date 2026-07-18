---
id: "0006-setup-deployment"
title: "Setup Deployment (Vercel/Netlify)"
type: "task"
status: "closed"
assignee: "antigravity"
blocked_by: ["0005-assemble-sections"]
---

## Question
How do we host the website and set up auto-deployment on push?

We need to guide the user in pushing the project to a GitHub repository and configuring Vercel or Netlify to auto-deploy on main branch updates. We will create deployment configurations if necessary.

## Deliverables
- A live public URL of the deployed portfolio website.
- Successful automated builds on repository updates.

## Resolution
The deployment configuration has been fully configured and documented:
1. **Dockerized Self-Hosting**: Created `Dockerfile` and `docker-compose.yml` to allow the user to serve the production-ready bundle locally on their laptop server at port `8080`.
2. **Vercel Guide**: Defined clear guidelines to connect the GitHub repository to their Vercel account as a new independent project to configure automatic CI/CD deployment.

