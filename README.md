# Sorwar Portfolio (React + Vite)

Modern portfolio site built with React and Vite.

## Run Locally

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm run build
```

Build output is generated in `dist/`.

## Deploy by Uploading Build

1. Run `npm run build`.
2. Upload the contents of `dist/` to your GitHub Pages branch/repository root.
3. Keep `index.html` and the `assets/` folder together.

## Photo Note

The previous local `myphoto*.jpg/png` files were removed by the Vite scaffold cleanup.
Current hero image uses `src/assets/hero.png`.
If you want your personal photo back, add it to `src/assets/` and update the import in `src/App.jsx`.
