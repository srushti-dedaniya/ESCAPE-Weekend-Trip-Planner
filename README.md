# ESCAPE — Weekend Trip Planner

> **Don't plan a trip. Escape your routine.**

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.0-0055FF?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 1. Project Overview

**ESCAPE** is a frontend-only travel discovery platform designed to help users find the perfect weekend getaway based on their mood and preferences. Unlike traditional travel booking websites that focus on *where to book*, ESCAPE focuses on *where to go*.

### The ESCAPE Flow

```
MOOD → DISCOVERY → ESCAPE MATCH → DESTINATION → WEEKEND PLAN
```

Users select how they want to feel — Relaxation, Adventure, Beach, Nature, or Romantic Getaway — and ESCAPE recommends curated destinations with personalized match percentages, travel details, and sample weekend itineraries.

---

## 2. Problem & Solution

### Problem
Planning a weekend trip is overwhelming. Users must search across multiple destinations, compare travel times, budgets, and activities — all before knowing what kind of experience they actually want. Traditional travel platforms prioritize booking over discovery.

### Solution
ESCAPE simplifies destination discovery through a **mood-based recommendation experience**. Users choose their desired vibe, and the application instantly surfaces matching destinations with rich details, filters, and a ready-to-go weekend preview.

---

## 3. Features

| Feature | Description |
|---------|-------------|
| 🎬 **Cinematic Landing Experience** | Immersive hero section with modern animations and visual storytelling |
| 🎭 **Mood-Based Discovery** | 5 curated moods: Relaxation, Adventure, Beach, Nature, Romantic |
| 🎯 **Escape Match** | Personalized destination recommendation with match percentage |
| 🗺️ **Destination Discovery** | 6 hand-picked destinations: Goa, Lonavala, Alibaug, Matheran, Kolad, Mahabaleshwar |
| 🔍 **Destination Filters** | Filter by Beach, Mountains, Nature, Adventure |
| 🧳 **Destination Details** | Travel time, budget, category, rating, activities |
| 📅 **Weekend Preview** | Sample Saturday & Sunday itinerary for each destination |
| 🎨 **Interactive UI** | Smooth scrolling, hover animations, Framer Motion transitions |

---

## 4. Tech Stack

| Category | Technology |
|----------|------------|
| Frontend Framework | React 18 |
| Build Tool | Vite 5 |
| Language | JavaScript (ES6+) |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Animations | Framer Motion 11 |
| State Management | React Hooks (`useState`, `useEffect`) |
| Data | Static Mock Data (JS modules) |
| Backend | None (Frontend-only) |

> ⚠️ **This project is completely frontend-only** and uses static mock data. No API keys, backend services, or database required.

---

## 5. Project Structure

```
escape-weekend-planner/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MoodSelector.jsx
│   │   ├── EscapeMatch.jsx
│   │   ├── DestinationCard.jsx
│   │   ├── DestinationGrid.jsx
│   │   ├── EscapeFilter.jsx
│   │   ├── WeekendPreview.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── destinations.js
│   │   └── moods.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Key Directories

- **`src/components/`** — All UI components (Navbar, Hero, MoodSelector, EscapeMatch, DestinationCard/Grid, Filter, WeekendPreview, CTA, Footer)
- **`src/data/`** — Static mock data for destinations and moods
- **`src/assets/`** — Images and static assets

---

## 6. Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project
cd escape-weekend-planner

# Install dependencies
npm install
```

---

## 7. Environment Configuration

This project **does not require any environment variables**. It runs entirely on static mock data with no external API dependencies.

---

## 8. Run Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Vite) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 9. Deployment

Deploy the frontend easily on **Vercel** or **Netlify**:

1. Push the project to GitHub
2. Import the repository into Vercel or Netlify
3. Select **Vite** as the framework preset
4. Deploy — no additional configuration needed

---

## 10. Usage Instructions

1. Open the application
2. Explore the cinematic landing page
3. Select a travel mood (Relaxation, Adventure, Beach, Nature, Romantic)
4. Receive your personalized **Escape Match** with match percentage
5. Browse all available destinations
6. Filter by category (Beach, Mountains, Nature, Adventure)
7. Click a destination to view details (travel time, budget, rating, activities)
8. View the **Weekend Preview** with Saturday & Sunday itinerary
9. Start planning your escape!

---

## 11. Screenshots / Demo

> Add screenshots to `./screenshots/` and update paths below.

| Section | Preview |
|---------|---------|
| Hero Section | `![Hero Section](./screenshots/hero.png)` |
| Mood Selection | `![Mood Selection](./screenshots/mood-selector.png)` |
| Escape Match | `![Escape Match](./screenshots/escape-match.png)` |
| Destination Discovery | `![Destinations](./screenshots/destinations.png)` |
| Weekend Preview | `![Weekend Preview](./screenshots/weekend-preview.png)` |

**Live Demo:** [Add Live Demo Link]

---

## 12. Design Concept

ESCAPE was built to **avoid the traditional travel booking interface**. Instead of forms, filters, and price comparisons upfront, the experience leads with **visual storytelling** and **emotional resonance**.

### Design Principles

- **Mood-First Discovery** — How do you want to feel?
- **Cinematic Imagery** — High-impact visuals over dense text
- **Smooth Interactions** — Framer Motion animations throughout
- **Progressive Disclosure** — Details revealed on demand
- **Zero Friction** — No signup, no booking flow, just exploration

### User Journey

```
MOOD → DISCOVERY → ESCAPE MATCH → DESTINATION → WEEKEND PLAN
```

---

## 13. Future Improvements

- AI-powered personalized destination recommendations
- Real-time weather integration per destination
- Live travel cost estimation (fuel, stay, food)
- Hotel & activity recommendations
- Google Maps integration for routes
- User authentication & saved favorites
- Personalized travel profiles
- Integration with real travel APIs (Amadeus, Skyscanner)
- Booking integration

---

## 14. Author

**Srushti Dedaniya**

- GitHub: (https://github.com/srushti-dedaniya)
- Portfolio: (https://srushtidedaniya-portfolio.vercel.app/)

---

## License

MIT License — feel free to use, modify, and share.

---

*Built with ❤️ for weekend dreamers.*