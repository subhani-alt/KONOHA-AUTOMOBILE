# VALENCE AUTOMOBILI — AAA Luxury Hypercar Digital Platform

An original AAA-tier luxury automotive website built for **VALENCE AUTOMOBILI**, inspired by hypercar digital experiences with 100% original visual branding, interactive 3D WebGL Bespoke Configurator, GSAP reveals, Lenis smooth scrolling, full REST API backend, and production Docker containerization.

---

## 🌟 Key Features

1. **Interactive 3D WebGL Configurator**: Real-time Three.js / React Three Fiber ray-tracing shader canvas for exterior paint finishes (Obsidian Matte, Deep Copper Metallic, Champagne Gold), wheel geometry, carbon ceramic brake calipers, interior Alcantara tailoring, and aero downforce packages with live price updates and shareable specification links.
2. **Interactive 360 Studio View**: Drag to rotate vehicle angle view with smooth dampening.
3. **Engine Exhaust Sound Sampler**: Built-in high-quality audio rev sampler with equalizer wave animation.
4. **Cinematic Hero**: Full-screen 3D WebGL vehicle preview with glowing LED headlights, camera float, and floating telemetry cards (2,150 HP, 0-100 in 1.74s, 445 km/h top speed).
5. **Collection & Search**: Filter by Powertrain (V12 Quad-Turbo, Hybrid V10, Pure EV, Track Special), sort by speed/price, search overlay, and wishlist persistence.
6. **16 Complete Pages**: Home, Collection, Vehicle Details, 3D Configurator, Technology, Craftsmanship, Heritage, News & Gazette, Gallery, Dealer Locator, Contact, Careers, About, Login, Register, Admin CMS Dashboard.
7. **Admin CMS Dashboard**: Manage hypercars, add new models, view client commission inquiries, 3D specs count, and gazette subscribers.
8. **MERN Stack REST Backend**: Express, Mongoose MongoDB schemas (User, Vehicle, Configuration, News, Dealer, Contact, Subscriber), JWT Auth with bcrypt hashing, error handling, and seed scripts.
9. **Production Ready**: Docker multi-stage builds, Nginx reverse proxy configuration, `docker-compose.yml`, and environment variables.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, React Router, Tailwind CSS, GSAP, Framer Motion, Three.js, React Three Fiber, Drei, Lenis Smooth Scroll, Lucide React, React Helmet Async.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), JWT, bcryptjs, Multer, Cloudinary SDK, Nodemailer.
- **Deployment**: Docker, Nginx, docker-compose.

---

## 🚀 Quick Start Guide

### 1. Backend Server Setup
```bash
cd server
npm install
npm run seed     # Populate MongoDB database with hypercars, dealers, and admin user
npm run dev      # Start server on http://localhost:5000
```

**Default Admin Credentials**:
- **Email**: `admin@valence.com`
- **Password**: `adminpassword123`

### 2. Frontend Client Setup
```bash
cd client
npm install
npm run dev      # Start Vite dev server on http://localhost:3000
```

### 3. Docker Deployment
```bash
docker-compose up --build
```
Access the application at `http://localhost`.

---

© 2026 VALENCE AUTOMOBILI. All Rights Reserved.
