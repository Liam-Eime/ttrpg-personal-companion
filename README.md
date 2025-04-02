# TTRPG Personal Companion for [Campaign Name]

A free, cloud-hosted web application designed specifically for the Chronicles of The Progenitor tabletop RPG campaign.  
This tool helps the DM and players track character stats, lore, session history, and more—keeping the campaign organized and the story alive.

---

## Team

- [Liam Eime](https://github.com/Liam-Eime)
- [Hunter Kruger-Ilingworth](https://github.com/H-unter)

---

## Intended Use

This companion is tailored for a single campaign:

- **DM & Approved Players Only:** Only users with permission (i.e. the DM and authorized players) can add or update character information.
- **Read-Only for Visitors:** Anyone (including potential new players) can view the campaign history, lore, session recaps, and NPC details.
- **Limited Scope:** With a small group, storage and compute requirements stay minimal, keeping the project free using free tiers from platforms like Supabase, Vercel, and Render.

---

## Features (Planned)

- Upload & view player character information (HP, stats, spells, etc.)
- Campaign dashboard to display current character statuses and key campaign events
- Session notes and recaps for continuity
- World-building database: NPCs, locations, factions, and events
- Role-based permissions: Only authorized users can modify data
- Real-time hosted, mobile-friendly UI
- Markdown support for rich lore & note formatting

---

## Tech Stack

| Layer     | Tool                                   |
|-----------|----------------------------------------|
| Frontend  | React + Vite + TailwindCSS             |
| Backend   | Express (Node.js) or FastAPI (TBD)       |
| Database  | Supabase (PostgreSQL + Auth)           |
| Hosting   | Vercel (frontend), Render (backend)    |
| CI/CD     | GitHub Actions                         |
| Testing   | Jest + React Testing Library           |

---

## Test-Driven Development (TDD)

All features will be developed and tested using TDD before merging.  
CI/CD via GitHub Actions will enforce testing and deployment pipelines.

---

## Project Structure

ttrpg-personal-companion/  
├── frontend/       # React app  
├── backend/        # Express or FastAPI backend  
├── .github/        # CI/CD workflows  
├── README.md  
└── .gitignore

---

## Local Development Setup

- **Clone the repository:**

  git clone <https://github.com/YOUR_USERNAME/ttrpg-personal-companion.git>  
  cd ttrpg-personal-companion

- **Switch to the dev branch:**

  git checkout -b dev  
  git push -u origin dev

- **(Later) Run the frontend/backend locally:**

  - Frontend:  
    cd frontend  
    npm install  
    npm run dev

  - Backend:  
    cd backend  
    npm install  
    npm run dev

---

## Git Workflow

| Branch | Purpose                         |
|--------|---------------------------------|
| main   | Production-ready releases       |
| dev    | Active development & staging    |

To merge dev into main (when ready):

  git checkout main  
  git merge dev  
  git push origin main

---

## Known Issues / TODO

- Scaffold frontend (React + Vite + TailwindCSS)
- Decide on backend framework (Express or FastAPI)
- Set up Supabase project & schema with role-based access controls
- Add GitHub Actions for testing and deployment
- Create a basic character upload/view interface
- Design session recaps, lore, and NPC pages

---

## License

MIT License (or TBD)
