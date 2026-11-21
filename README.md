# 🎨 DevFolio Web (`devfolio-web`)

> Luxury, High-Performance Developer Portfolio Frontend connected dynamically to the `core-cms-api` Headless CMS engine.

---

## 🛠 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Design System**: Dark luxury obsidian palette, glassmorphism blur layers, gradient ambient glows, and responsive typography.

---

## 📁 Suggested Architecture

```
devfolio-web/
├── src/
│   ├── components/      # UI Blocks (Navbar, Hero, About, Skills, Projects, Experience, Blog, Contact, Footer)
│   ├── lib/
│   │   └── api.js       # Dynamic Headless CMS REST client & graceful fallback cache
│   ├── App.jsx          # Root view layout
│   ├── index.css        # Tailwind directives & glassmorphism primitives
│   └── main.jsx         # Application entry
├── index.html           # HTML template
├── tailwind.config.js   # Tailored theme tokens & animations
└── vite.config.js       # Vite configuration & API proxy
```

---

## 🗓 14-Day Roadmap Tracker

- [x] **Day 8: Portfolio Frontend Setup** (`Day 8 completed -> Portfolio Frontend Setup with React, Tailwind and Base Layout`)
- [x] **Day 9: Fetch Content From CMS** (`Day 9 completed -> Fetch Content From CMS for Dynamic About, Skills and Projects`)
- [x] **Day 10: Additional Sections** (`Day 10 completed -> Additional Sections for Blogs, Experience Timeline, Testimonials and Services`)
- [x] **Day 11: Contact Form & Backend API Integration** (`Day 11 completed -> Contact Form Integration with Backend API`)
- [x] **Day 12: Deployment (Backend + CMS Admin)** (`Day 12 completed -> Backend and CMS Admin Deployment Configurations for Render and Railway`)
- [x] **Day 13: Deploy Portfolio Frontend** (`Day 13 completed -> Portfolio Frontend Deployment Configurations for Vercel and Netlify`)
- [x] **Day 14: Final Testing, Polish & Optimization** (`Day 14 completed -> Final Testing, Polish, Aesthetic Aurora UI Redesign and Optimizations`)

---

## 🚀 Deployment Guide

### Deploying on Vercel
1. Import repository `devfolio-web` into Vercel.
2. Framework Preset: **Vite**.
3. Set Environment Variable:
   - `VITE_API_URL`: Your deployed backend URL (e.g., `https://core-cms-api.onrender.com/api`).
4. Click **Deploy**. Vercel will build using `vercel.json` rewrite rules.

### Deploying on Netlify
1. Connect Git repository to Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. The included `public/_redirects` ensures seamless SPA routing.

