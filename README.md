# Ilm Welfare Association Website

The official website of Ilm Welfare Association (IWA), a welfare organization working to build a well-educated and healthy society through education, training and counseling.

**Pages**
- **Home (`/`)**: hero with impact metric, programs overview, quote and contact footer
- **About Us (`/about`)**: mission, vision, philosophy, project history and scope of work
- **Gallery (`/gallery`)**: event highlights and on-ground impact photos

## Tech stack

- [React](https://react.dev) 18 with [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com) v4
- [React Router](https://reactrouter.com) v6

## Getting started

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the dev server at http://localhost:5173
```

To preview on a phone on the same Wi-Fi:

```bash
npm run dev -- --host
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally |

## Project structure

```
public/
  logo.png          Site logo
  gallery/          Gallery photos
  _redirects        Netlify routing rule
src/
  data.js           All editable content (see below)
  Layout.jsx        Navbar and footer
  index.css         Colors and fonts (Tailwind theme)
  pages/
    Home.jsx
    About.jsx
    Gallery.jsx
```

## Updating content

Most content lives in `src/data.js`, so you rarely need to touch the page code.

| To change | Edit in `src/data.js` |
| --- | --- |
| President, phone, Facebook link | `CONTACT` |
| Program cards | `programs` |
| Project history timeline | `timeline` |
| Scope of work | `scope` |
| Gallery categories and captions | `gallery` |

**Adding gallery photos**

1. Copy the image into `public/gallery/`, for example `yomun-1.jpg`.
2. In `src/data.js`, set that item's `src` to `/gallery/yomun-1.jpg`.

Use compressed images (under about 300 KB each) to keep the site fast on mobile.

To change colors or fonts, edit the `@theme` block in `src/index.css`.

## Deployment

1. Push the project to GitHub.
2. Import the repository into [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Use these settings:
   - Build command: `npm run build`
   - Output directory: `dist`

Every push to the `main` branch triggers a new live build.

### Page routing (`/about`, `/gallery`)

Because this is a single-page app, direct visits to `/about` and `/gallery` need a rewrite to `index.html`, or they will show a 404.

- **Netlify:** already handled by `public/_redirects`.
- **Vercel:** add a `vercel.json` file in the project root:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Contact

Syed Talha Ali, President: 0331-2896006
[facebook.com/ilwelfare](https://facebook.com/ilwelfare)
