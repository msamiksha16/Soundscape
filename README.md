# Soundscape

Soundscape is a responsive music discovery frontend built with React and Vite. It pairs a personal listening dashboard with the repository's Django recommendation API.

## Features

- Discover page with search, mood filters, recommendation cards, and listening stats.
- Local sample mix that works without a running backend, Spotify credentials, or an account.
- Saved tracks library persisted in browser storage.
- Persistent mini-player UI, with audio preview playback when a recommendation includes a `preview_url`.
- Profile setup, recommendation refresh, and analytics integration with the Django API.
- Responsive navigation and layouts for mobile and desktop.

The demo mix contains sample metadata only. Preview playback is available only for API tracks that include an audio preview URL.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). The sample experience works on its own. To use personalized recommendations, start the Django API at `http://127.0.0.1:8000` and configure its database, Redis, Celery worker, and Spotify credentials as described in the repository's main README.

Vite proxies `/users`, `/recommendations`, `/analytics`, and `/spotify` to Django. To use another backend URL, set `VITE_API_URL` in a frontend `.env` file and adjust the proxy target in `vite.config.js` for local proxied requests.

Spotify sign-in requires valid `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` values in the backend environment, plus the callback URL `http://127.0.0.1:8000/spotify/callback` in the Spotify developer application.
