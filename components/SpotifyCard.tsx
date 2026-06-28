"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Music2 } from "lucide-react";

type NowPlaying =
  | { isPlaying: false }
  | {
      isPlaying: true;
      title: string;
      artist: string;
      album: string;
      albumArt: string;
      songUrl: string;
    };

export function SpotifyCard() {
  const [data, setData] = useState<NowPlaying>({ isPlaying: false });
  const [loading, setLoading] = useState(true);

  async function fetchNowPlaying() {
    try {
      const res = await fetch("/api/spotify");
      const json = await res.json();
      setData(json);
    } catch {
      setData({ isPlaying: false });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNowPlaying();
    // poll every 30s so it stays fresh without hammering the API
    const interval = setInterval(fetchNowPlaying, 30_000);
    return () => clearInterval(interval);
  }, []);

  // nothing playing — show a static fallback
  if (loading || !data.isPlaying) {
    return (
      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
        <Music2 size={13} />
        <span>Not playing</span>
      </div>
    );
  }

  return (
    <Link
      href={data.songUrl}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-2.5 rounded-lg border border-border
                 px-2.5 py-1.5 transition-colors hover:border-foreground/30
                 hover:bg-muted/30"
    >
      {/* Album art */}
      <div className="relative size-7 shrink-0 overflow-hidden rounded-sm">
        <Image
          src={data.albumArt}
          alt={data.album}
          fill
          className="object-cover"
        />
      </div>

      {/* Track info */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-medium text-foreground">
          {data.title}
        </p>
        <p className="truncate text-[10px] text-muted-foreground">
          {data.artist}
        </p>
      </div>

      {/* Animated bars — shows it's live */}
      <div className="flex items-end gap-px">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-0.5 rounded-full bg-green-500"
            style={{
              height: `${6 + i * 3}px`,
              animation: `bounce 0.8s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
              animationDirection: i % 2 ? "alternate-reverse" : "alternate",
            }}
          />
        ))}
      </div>
    </Link>
  );
}
