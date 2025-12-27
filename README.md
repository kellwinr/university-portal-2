# 🎓 University Student Portal Redesign

A complete **conceptual UI/UX redesign** of a university student portal.  
This project modernises a legacy, table-based system into a **responsive, usability-focused interface**, emphasising clarity, visual hierarchy, and interaction design in a high-information academic environment.

> ⚠️ This is a **personal portfolio project** created for learning and demonstration purposes.  
> It is **not affiliated with, endorsed by, or connected to any university or institution**.

![Status](https://img.shields.io/badge/Status-Complete-success)
![Version](https://img.shields.io/badge/Version-2.0-blue)
![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)

---

## 🎯 Project Objectives

- Redesign a complex academic portal with **improved usability**
- Reduce **cognitive load** through better layout and information hierarchy
- Apply modern UI trends without sacrificing clarity
- Demonstrate **UX thinking + front-end implementation**
- Create a portfolio-ready system inspired by real-world academic workflows

---

## 🚀 v2 Improvements (Compared to v1)

Version 2 focuses on **performance, interactivity, and visual polish**.

- **Selective Glassmorphism Elements**  
  Subtle use of translucency, `backdrop-filter: blur`, and layered surfaces to separate content areas while preserving readability and reducing visual clutter.

- **High-Performance Animations**  
  GPU-accelerated transitions, smooth fade-ins, and a custom parallax background for subtle motion without distraction.

- **Interactive Timetable System**  
  A dynamic **30-minute interval grid** with floating detail windows for lecturer and class information.

- **Modern Data Presentation**  
  Legacy HTML tables replaced with **CSS Grid layouts** for improved responsiveness and readability.

- **WBLE Flow Redesign**  
  A dedicated login and campus-selection experience for the Web-Based Learning Environment, separated from the main portal flow.

---

## 🧠 UX & Design Considerations

- Clear information hierarchy
- Familiar interaction patterns
- Recognition over recall
- Visual grouping (Gestalt principles)
- Consistent spacing, typography, and alignment
- Designed to minimise user confusion in high-information environments

The redesign prioritises **clarity over decoration**, ensuring modern visuals do not interfere with academic usability.

---

## ⚖️ Design Trade-offs

While modern visual techniques were explored, design decisions prioritised **clarity and task completion** over stylistic expression.  
This reflects the constraints of real academic systems, where efficiency, predictability, and information density take precedence over expressive visual branding.

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (Glassmorphism, Grid, animations)
- **JavaScript** (UI interactions, transitions, logic)

> This project is **front-end only** and focuses on layout, interaction, and UX clarity rather than backend functionality.
---
## 📂 Project Structure

```text
university-portal/
├── assets/
│   ├── css/
│   │   └── styles.css       # Unified styles (Grid, Glassmorphism, animations)
│   ├── img/
│   │   ├── logo-placeholder.png
│   │   ├── Public.gif       # Placeholder billing logo
│   │   └── student-photo.jpg
│   └── js/
│       └── main.js          # Login logic, UI interactions, parallax
│
├── index.html               # Portal Login (Entry Point)
├── home.html                # Dashboard (Announcements, Highlights, Cards)
├── billing.html             # Financial Status & Payment History
├── profile.html             # Student Profile (Digital ID Layout)
├── timetable.html           # Class Schedule (Grid View + Floating Windows)
├── wble_landing.html        # WBLE Campus Selection
├── wble_login.html          # WBLE Dedicated Login
└── README.md                # Project Documentation
