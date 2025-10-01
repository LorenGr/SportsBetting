# SportsBettingApp

A small React + Vite app that demonstrates a betting UI.

## Live Demo
https://sports-betting-delta.vercel.app/

## Run locally

```bash
npm install
npm run dev
```

Open the printed URL (typically `http://localhost:5173`).

## What’s implemented

- Two-column layout with a featured match and a bet slip
- Odds buttons toggle selections with a visual selected state
- Multiple selections from the same event are allowed
- Bet slip shows selections with remove button that syncs state
- Proper date formatting via `toLocaleString`
- Amount input supports typing and +/- controls with non-negative validation
- Total and Potential Gain recalculate across all selections

## Scripts

- `npm run dev`: Start dev server
- `npm run build`: Production build
- `npm run preview`: Preview built app

## Project structure

- `src/App.jsx`: App components and UI
- `src/main.jsx`: Entry
- `src/index.css` and `src/App.css`: Styles

## Notes

- This is a front-end only demo (no backend). The submit button shows a simple alert.
