import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";

async function getAccessToken(): Promise<string> {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    throw new Error("Missing Spotify credentials");
  }

  const creds = `${CLIENT_ID}:${CLIENT_SECRET}`;
  const b64 = Buffer.from(creds, "utf-8").toString("base64");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${b64}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  const json = await res.json();
  return json.access_token;
}

async function getNowPlaying(accessToken: string) {
  const res = await fetch(NOW_PLAYING_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (res.status === 204 || res.status === 404) {
    return { isPlaying: false };
  }

  const json = await res.json();

  if (!json.is_playing || !json.item) {
    return { isPlaying: false };
  }

  return {
    isPlaying: true,
    title: json.item.name,
    artist: json.item.artists.map((a: { name: string }) => a.name).join(", "),
    album: json.item.album.name,
    albumArt: json.item.album.images[0]?.url ?? "",
    songUrl: json.item.external_urls.spotify,
  };
}

export async function GET() {
  try {
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
      return NextResponse.json({ isPlaying: false }, { status: 200 });
    }

    const accessToken = await getAccessToken();
    const data = await getNowPlaying(accessToken);
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch {
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }
}
