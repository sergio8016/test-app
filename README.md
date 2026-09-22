# Build Flow

Build Flow is a responsive construction procurement workspace for coordinating materials, supplier searches, and field work between administrators and workers.

## Live Demo

Try the deployed application on GitHub Pages:

**[Open Build Flow](https://sergio8016.github.io/test-app/dashboard)**

### Demo accounts

The current authentication is intentionally mocked for demonstration purposes:

| Role | Username | Access |
| --- | --- | --- |
| Administrator | `admin` | Buy Items and Assign Task |
| Worker | `worker` | Assigned Tasks and purchase checklists |

Any password value is accepted in the demo.

## What You Can Explore

- **Buy Items:** Search a construction catalog with mock supplier results from Amazon, eBay, and BuildHub Supply, then open the provider listing to complete the purchase externally.
- **Lowest-price comparison:** Results are sorted from lowest to highest price, with the best price highlighted.
- **Assign Task:** Administrators can create a buying task and assign a list of construction objects to a worker.
- **Tasks:** Workers receive assigned buying tasks as checklists and can mark each item as acquired.
- **Task completion:** A task automatically changes to `Complete` when every object has been checked.
- **Responsive workspace:** The dashboard adapts to desktop and mobile layouts.
- **Role-based navigation:** Each role only sees the modules available to them.

## Tech Stack

- Angular 22 with standalone components and lazy-loaded routes
- TypeScript
- PrimeNG and PrimeIcons
- Tailwind CSS
- RxJS
- GitHub Pages deployment

## Getting Started

### Requirements

- Node.js `22.22.3+` or `24.15.0+`
- npm

### Install and run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/` in your browser and sign in with `admin` or `worker`.

### Production build

```bash
npm run build
```

The compiled application is written to `dist/`.

## Current Scope

The supplier catalog and authentication are mock implementations designed to demonstrate the product workflow. Build Flow does not process purchases internally: Buy Items compares provider listings and sends the user to the provider website through an external link. Tasks are persisted in browser `localStorage`, making it possible to assign work as `admin` and review it as `worker` in the same browser.

The next integration step would be replacing the mock search service with real supplier adapters and connecting task persistence to a backend API.

## Project Structure

```text
src/app/
├── core/
│   ├── auth/       # Session state and role guards
│   └── tasks/      # Shared task state and persistence
├── features/
│   ├── buy-items/  # Supplier search and price comparison
│   ├── assign-task/# Admin task creation
│   └── tasks/      # Worker checklist workflow
└── layout/         # Shared dashboard shell
```

## Useful Commands

```bash
npm start       # Start the development server
npm run build   # Create a production build
npm test        # Run unit tests
```
