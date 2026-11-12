# NBA Stats

NBA teams, players, and comments frontend built with React and Vite.

## Backend configuration

Set `VITE_API_URL` to the backend base URL in a local environment file such as
`.env.local`:

```env
VITE_API_URL=https://your-backend.example.com
```

Vite reads this variable when starting the development server and when building
the app. Restart the dev server after changing the value. For deployment, add
the same variable to the hosting provider's environment settings and rebuild.

The `VITE_` prefix makes the value available in browser code, so do not put
secrets in this variable.

## Development

```sh
npm install
npm run dev
```

## Build and lint

```sh
npm run build
npm run lint
```
