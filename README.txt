Vedora Lifesciences

This project uses the Next.js App Router. The home page markup and browser interactions live in the route module, with shared Bootstrap and custom styles.

## Run locally

Install dependencies with `npm install`, then start the development server with `npm run dev`. Open http://localhost:3000.

## Project structure

- `app/` — root layout, global styles, and `/` route
- `app/page.tsx` — home page markup and interactions
- `public/` — images
- `css/` — Bootstrap and custom stylesheets

The forms currently provide client-side validation only. Connect them to a backend or form service to receive submissions.
