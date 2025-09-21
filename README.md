# Nokia Challenge – Tasks App

A small Tasks app built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Tech stack

- **Next.js** (React framework)
- **TypeScript**
- **Tailwind CSS**
- **Vitest + Testing Library** (unit tests)
- **Playwright** (end-to-end tests)

## Requirements

- **Node.js ≥ 22**
- **npm ≥ 10**
- **Mock API running locally**  
  Follow the instructions in the API repo:  
  https://github.com/MarceloFonseca/tasks-api.git

## Getting started

1.  Clone this repo then run `npm install` inside the *nokia-challenge* dir

2.  **Start the Mock API (required):**

    ```bash
    # from the mock api app directory
    npx cross-env PORT=3008 NEW_TASK_PERIOD=60000 npm start
    ```

3.  **Build & run the app**
    ```bash
    # from the app directory
    npm run build
    npm run start
    ```
    Open: http://localhost:3000

## Tests

### Unit tests

```bash
npm run test
```

### E2E tests (Playwright)

First install Playwright browsers:

```bash
npx playwright install
```

Then, with **the app running** (`npm run start`) and **the mock API running**, execute:

```bash
npx playwright test
```

If either the app or the mock API isn’t running, E2E tests will fail.
