# Advanced Personal Portfolio

A production-ready portfolio built with React + Vite, Tailwind CSS, Framer Motion, and GitHub REST API integration.

## Features

- Animated hero with typing effect and action buttons
- About section with animated skill bars and timeline
- Live GitHub projects from `mohamedhennihm` with search/filter, skeleton loading, and modal details
- Contact form via Formspree with success/error toasts
- Sticky shrinking navbar with section highlighting
- Dark/light mode persisted in `localStorage`
- Responsive design for mobile/tablet/desktop
- SEO and Open Graph metadata

## Tech Stack

- React + Vite
- React Router
- Tailwind CSS
- Framer Motion
- GitHub REST API
- React Hot Toast

## Getting Started

```bash
npm install
npm run dev
```

Open the app at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Placeholder Values to Replace

- CV download file: `public/cv-placeholder.pdf` or update link in `src/components/Hero.jsx`
- Profile image URL in `src/components/Hero.jsx`
- Formspree endpoint in `src/components/Contact.jsx` (`FORM_ENDPOINT`)
- Social/contact links in `src/components/Footer.jsx`
- Open Graph URL and image in `index.html`

## Deploy

### GitHub Pages (one command)

```bash
npm run deploy
```

This builds the project and publishes `dist` to GitHub Pages using `gh-pages`.

### Vercel (one command)

```bash
npm run deploy:vercel
```

This runs `npx vercel --prod`.

## Project Structure

```txt
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectModal.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useGitHubRepos.js
├── context/
│   └── ThemeContext.jsx
└── App.jsx
```
