# Hamna Masood, portfolio

React, TypeScript, Vite, Tailwind, Lucide. No router or animation library, to stay light.

## Run locally
    npm install
    npm run dev

## Edit content
Everything is in `src/data.ts`. Highlighted amber text on the site marks `[TO CONFIRM]` items. Search for that string and replace it. Set `EMAIL`, `LINKEDIN` and `CV_URL` there, and put your PDF at `public/cv.pdf`.

## Deploy
Vercel: push to GitHub, import the repo at vercel.com, accept the Vite defaults.
GitHub Pages: `npm run build`, then publish the `dist` folder (for example with the `gh-pages` package or a Pages workflow). Routing uses hash links, so no server rewrites are needed.
