# Portfolio Website

Next.js portfolio and blog site.

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Deployment

This project is ready for Vercel or any Node host that supports Next.js 16.

Required environment variables:

```bash
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

If the Spotify variables are missing, the site still runs and the Spotify
widget simply falls back to `Not playing`.
