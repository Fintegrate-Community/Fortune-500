# Fortune 500

"Your birthday, read like a balance sheet." A satirical market-horoscope
site: enter a date of birth, get a reading matched to a real historical
market event (crash, boom, or outright anomaly), delivered by a smug
fortune-teller-broker Oracle.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4. No backend, no
database, fully static, fast to build and cheap to host on Vercel.

## How the matching works

`lib/events.ts` holds a curated list of real, documented single-day market
events (Black Monday 1987, the 2008 crisis, the GameStop squeeze, oil going
negative, etc.) with their actual dates and approximate moves. When someone
enters a birthday:

1. If a curated event happened on that exact month/day, it's shown.
2. Otherwise, the nearest calendar date in the archive is shown, labelled
   as a "nearest reading" with how many days away it is.

To add more events, add an entry to the `EVENTS` array in `lib/events.ts`.
No other code needs to change.

## Local development

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploying (same flow as the forum project)

1. Create a new, empty repository on GitHub (e.g. under the
   Fintegrate-Community org), do not initialise it with a README.
2. From this folder:
   ```
   git init
   git add .
   git commit -m "Initial commit: Fortune 500"
   git branch -M main
   git remote add origin <your-new-repo-url>
   git push -u origin main
   ```
3. In Vercel, "Add New Project", import that new GitHub repo. Vercel
   auto-detects Next.js, no config needed. Deploy.
4. You'll get a fresh `*.vercel.app` URL for this project, separate from
   the forum's.

## Roadmap ideas (not built yet)

- A real leaderboard ("best/worst birthday market luck") would need a
  small database (Vercel Postgres or KV) to store and rank results across
  visitors. Happy to add this once the core experience is tested.
- Sharing currently copies a text summary to the clipboard. An
  image-card export (for LinkedIn posts) is a nice follow-up.
