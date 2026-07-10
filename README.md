# ♟️ XLChess

A modern chess platform built using React with a reusable and scalable component architecture.

---

# Tech Stack

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- HTML5
- CSS3

---

# Running the Project

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# Project Structure

```
src
│
├── components
│   └── hero
├── constants
├── hooks
├── styles
├── App.jsx
├── main.jsx
└── index.css
```

---

# Why This Folder Structure?

This project follows a **feature-based and reusable architecture** instead of placing everything inside one folder.

The goal is to make the project:

- Easy to maintain
- Easy to scale
- Easy to reuse
- Easy for multiple developers to work on simultaneously

As the application grows, new features can be added without affecting the existing codebase.

---

# Folder Responsibilities

## 📁 components

Contains all reusable UI components.

Components are grouped by feature instead of keeping every component in a single folder.

Current

```
components/
    hero/
```

Future

```
components/
    hero/
    navbar/
    footer/
    features/
    pricing/
    dashboard/
```

This approach makes navigation easier and keeps related files together.

---

## 📁 constants

Contains reusable static data and configuration.

Examples include:

- Chess configuration
- Theme values
- Animation settings
- Static content

Instead of hardcoding values across multiple files, they are maintained in one place.

---

## 📁 hooks

Contains reusable custom React hooks.

Business logic is separated from UI components.

Benefits:

- Cleaner components
- Less duplicate logic
- Easy reuse across pages

---

## 📁 styles

Contains global and shared CSS.

Tailwind CSS is used for layouts and utilities, while this folder is reserved for:

- Complex animations
- Keyframes
- Background effects
- Global styling
- Shared component styles

---

# Why Use Reusable Components?

Each component is designed with a **single responsibility**.

Instead of creating one large component, the UI is divided into smaller reusable pieces.

Benefits:

- Easier maintenance
- Better readability
- Improved code reuse
- Faster feature development
- Simpler debugging

The same component can be used on multiple pages without rewriting code.

---

# Adding New Features

When adding a new section or feature, create a separate folder inside `components`.

Example:

```
components/

    hero/

    features/

    pricing/

    testimonials/
```

Each feature should contain its own components while sharing common resources from:

- hooks
- constants
- styles

This keeps every feature independent and prevents the project from becoming difficult to manage.

---

# Why This Architecture?

This architecture was chosen because it supports long-term scalability.

As XLChess grows, additional pages and modules can be introduced without restructuring the existing project.

Examples of future additions:

- Dashboard
- Play Online
- Chess Analysis
- Puzzles
- Courses
- Tournaments
- User Profile
- Admin Panel

Each new feature can simply be added as its own folder inside `components`, while continuing to reuse existing assets, hooks, constants, and styles.

This minimizes duplicate code and keeps the application organized even as it becomes significantly larger.

---

# Design Principles

- Feature-based folder structure
- Reusable components
- Separation of concerns
- Scalable architecture
- Maintainable codebase
- Minimal code duplication

These principles make the project easier to understand for new developers and simplify future enhancements.

Thanks & Regards,
Ajay M