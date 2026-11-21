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
- [ ] **Day 9: Fetch Content From CMS (Dynamic About, Skills, Projects)**
- [ ] **Day 10: Additional Sections (Blogs, Testimonials, Experience Timeline)**
- [ ] **Day 11: Contact Form & Backend API Integration**
- [ ] **Day 12: Deployment (Backend + CMS Admin)**
- [ ] **Day 13: Deploy Portfolio Frontend**
- [ ] **Day 14: Final Testing, Polish & Optimization**

