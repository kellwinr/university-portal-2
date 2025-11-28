# 🎓 UTAR Portal Redesign v2 (Glassmorphism UI)

A complete, modern UI/UX overhaul of the university student portal. This project transitions the legacy table-based interface into a responsive, Apple-inspired **Glassmorphism** design system with smooth animations and interactive elements.

![Status](https://img.shields.io/badge/Status-Complete-success)
![Version](https://img.shields.io/badge/Version-2.0-blue)
![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-orange)

## 🚀 v2 Improvements (vs v1)
The v2 update focuses on performance, interactivity, and visual hierarchy.
- **Glassmorphism Architecture:** Full use of `backdrop-filter: blur`, translucency, and soft shadows.
- **High-Performance Animations:** GPU-accelerated transitions, fade-ins, and a custom parallax background.
- **Interactive Timetable:** A dynamic 30-minute interval grid with Mac-style popup windows for lecturer details.
- **Modern Data Tables:** Replaced old HTML tables with CSS Grid layouts for better readability and responsiveness.
- **WBLE Integration:** A dedicated flow for the Web-Based Learning Environment.

---

## 📂 Project Structure

```text
university-portal/
├── assets/
│   ├── css/
│   │   └── styles.css       # Unified styles for all pages (Grid, Glass, Animations)
│   ├── img/
│   │   ├── logo-placeholder.png
│   │   ├── Public.gif       # Public Bank logo for billing
│   │   └── student-photo.jpg
│   └── js/
│       └── main.js          # Logic for login, dropdowns, and parallax
│
├── index.html               # Main Student Portal Login (Entry Point)
├── home.html                # Main Dashboard (Highlights, Announcements, Cards)
├── billing.html             # Financial Status & Payment History
├── profile.html             # Student Profile (ID Card Layout)
├── timetable.html           # Class Schedule (Grid View & Mac Window Popups)
├── wble_landing.html        # WBLE: Campus Selection Page
├── wble_login.html          # WBLE: Dedicated Login Page
└── README.md                # Project Documentation
