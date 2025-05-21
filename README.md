# 🔥 Lit SPA Project – Image Transition Component

This project is a Single Page Application (SPA) built using *Vite* and *Lit, showcasing a smooth image transition animation inspired by Tympanus. It serves as the **Home* section of a larger Print-On-Demand (POD) T-shirt store project.

---

## ✅ What I Did — Step by Step

### 1️⃣ I Set Up the Project with Vite + Lit
I bootstrapped a Vite project and used [Lit](https://lit.dev/) — a lightweight JavaScript library for building fast and reusable Web Components.

---

### 2️⃣ I Created a Lit Component for the Image Transition

- Built a custom <image-transition> component using Lit.
- Added *3 full-screen images* inside the component.
- Used *CSS animations* and @keyframes to slide between images.
- The transition automatically *loops* through the images.

---

### 3️⃣ Made It a SPA (Single Page Application)

Instead of separate HTML pages (home.html, about.html, contact.html), I used *conditional rendering* inside the Lit component:

```js
this.page === 'home' ? showHome() : ''
this.page === 'about' ? showAbout() : ''
this.page === 'contact' ? showContact() : ''
