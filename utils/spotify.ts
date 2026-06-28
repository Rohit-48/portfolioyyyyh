const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

export async function getAccessToken(){
    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${BASIC}`,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            grant_type: "refresh_token",
            refresh_token: REFRESH_TOKEN ?? "",
        }),
    });
    return res.json() as Promise<{access_token: string}>;
}


export async function getNowPlaying(){
    const {  access_token} = await getAccessToken();

    return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            Authorization:`Bearer ${access_token}`,
        },
        next: {revalidate:0},
    });
}
