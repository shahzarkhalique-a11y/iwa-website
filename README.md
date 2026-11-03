# Ilm Welfare Association website
npm install && npm run dev      # local
npm run build                   # production build in /dist
Edit text in src/data.js. Add photos to public/gallery and set `src` in the gallery list.
Deploy: push to GitHub, import the repo in Vercel/Netlify (build: npm run build, output: dist).
Add a rewrite of all paths to /index.html (Netlify: public/_redirects "/* /index.html 200") for /about and /gallery.
