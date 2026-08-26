# OEF Impact Website

This is the separate website project for Onicha Education Foundation.

It is not part of Japa Logistics.

## What This Project Uses

- React: builds the website interface
- Vite: runs the local development server and creates the production build
- Tailwind CSS: handles styling

## Important Files

- `package.json`: lists project scripts and dependencies
- `index.html`: the HTML page Vite loads
- `src/main.jsx`: starts React and renders the app
- `src/App.jsx`: main website content and sections
- `src/styles.css`: Tailwind setup and reusable styling
- `public/magazine-pages/`: selected image assets rendered from the PDF
- `public/documents/oef-impact-magazine.pdf`: optional full document link for the footer

## Development Commands

Run these from this folder:

```bash
npm install
npm run dev
```

Then open the local URL Vite shows in the terminal.

Important: do not open `index.html` directly in Chrome. This project must run
through Vite, otherwise the React JavaScript will not load correctly and the
page can appear blank.

## Production Commands

```bash
npm run build
npm run preview
```

The final production files will be created in `dist/`.
