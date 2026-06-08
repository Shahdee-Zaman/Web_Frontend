# Shahdee Zaman Portfolio

A modern personal portfolio built with React, TypeScript, and Vite. The site presents a clean two-column layout with a sticky navigation bar, a strong visual identity, and focused sections for skills, experience, projects, education, and contact links.

## Overview

This project is designed to showcase professional background and technical work in a lightweight, fast-loading frontend. The content is driven from a central data file, which makes it easy to update profile details, experience, education, and project information in one place.

## Features

- Responsive two-column portfolio layout
- Sticky top navigation for quick section access
- Sidebar with identity, education, and contact links
- Dedicated sections for experience, projects, and skills
- Reusable component structure for easy maintenance
- Data-driven content sourced from a single portfolio file
- Custom dark-themed visual style with subtle motion and card effects

## Tech Stack

- React 19
- TypeScript
- Vite
- Plain CSS for styling
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

### Build for Production

```bash
npm run build
```


## Project Structure

```text
src/
  api/           # API helpers
  assets/        # Static assets used by the app
  components/    # Reusable UI components
  constants/     # Shared constants
  data/          # Portfolio content and profile data
  layouts/       # Top-level page layouts
  styles/        # Global styles
  App.tsx        # App entry component
  main.tsx       # React root bootstrap
public/          # Public static assets
```

## Content Source

Most of the visible portfolio content lives in [`src/data/portfolio.ts`](./src/data/portfolio.ts). Updating that file will refresh the displayed name, bio, skills, projects, experience, education, and external links.

## Contact

- GitHub: https://github.com/shahdee-zaman
- LinkedIn: https://www.linkedin.com/in/shahdee-zaman/
- Email: Shahdeezaman@gmail.com

