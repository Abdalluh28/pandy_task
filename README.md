# TalentFlow

TalentFlow is a frontend technical assessment project for a recruitment candidate marketplace. It lets recruiters browse a candidate directory, search and filter candidates, sort by hiring signals, open profile pages, and update a candidate's status.

## Features

- Candidate dashboard at `/` with responsive cards.
- Candidate profile page at `/candidate/:id`.
- Search by candidate name, headline, or skills.
- Filters for location, experience, availability, and candidate status.
- Sorting by most recent, most experienced, and best match.
- Loading skeletons, empty state, error state, and retry handling.
- Candidate actions for shortlist and reject.
- Dark mode with local persistence.
- Mock API behavior using local JSON, simulated latency, and localStorage updates.

## Tech Stack

- React 19
- Vite
- React Router
- TanStack React Query
- Tailwind CSS 4
- Lucide React and React Icons
- React Hot Toast
- React Loading Skeleton
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
src/
  context/              Theme provider and theme hook
  data/                 Local candidate data
  features/
    dashboard/          Candidate list, search, filters, sort, states
    profile/            Candidate profile sections and status actions
  layout/               App shell/header
  App.jsx               Routes and app-level providers
  main.jsx              React entry point
```

## Data And Persistence

The initial candidate list is stored in `src/data/candidates.json`. Dashboard and profile services simulate API latency with async functions. Status changes are saved to `localStorage`, so shortlist/reject updates persist in the browser until local storage is cleared.

The list fetch also simulates occasional request failures to exercise the error and retry UI.

## Routes

- `/` - candidate recruitment dashboard.
- `/candidate/:id` - detailed candidate profile.

## Notes For Reviewers

- Query parameters drive search, filters, and sorting so the dashboard state can be reflected in the URL.
- The app uses React Query for list/detail caching and invalidates candidate queries after status updates.
- The UI supports light and dark themes.
- There are no automated tests in this submission; quality checks are currently covered by ESLint and production build.
