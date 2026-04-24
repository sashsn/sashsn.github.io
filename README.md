# Sadman Shahriar — Portfolio

Case studies across backend, data + ML, embedded, and full-stack work. Built with React 19 + Vite + Framer Motion + React Router.

Live at **https://sashsn.github.io**

## Local dev

```bash
npm install
npm run dev    # http://127.0.0.1:4321
npm run build
```

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`, which builds with `npm run build` and publishes `dist/` to GitHub Pages.

The site uses `BrowserRouter` + a `404.html` SPA redirect pattern so direct links like `/projects/roadeo` work on GitHub Pages without server-side routing.
