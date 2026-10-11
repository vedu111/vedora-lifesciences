Restore Physical Therapy

This project uses the Next.js App Router. The full home and treatments page markup and browser interactions are embedded in their route modules, with shared Bootstrap and custom styles.

## Run locally

Install dependencies with `npm install`, then start the development server with `npm run dev`. Open http://localhost:3000.

## Project structure

- `app/` — root layout, global styles, and `/` and `/services` routes
- `app/page.tsx` — home page markup and interactions
- `app/services/page.tsx` — treatments page markup and interactions
- `public/` — images
- `css/` — Bootstrap and custom stylesheets

The forms currently provide client-side validation only. Connect them to a backend or form service to receive submissions.
