"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export function FilmPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setStarted(false);
    };
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  const start = async () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    setMuted(false);
    setStarted(true);
    try {
      await v.play();
    } catch {
      v.muted = true;
      setMuted(true);
      await v.play().catch(() => undefined);
    }
  };

  const togglePlay = async () => {
    const v = ref.current;
    if (!v) return;
    if (!started) {
      await start();
      return;
    }
    if (v.paused) await v.play().catch(() => undefined);
    else v.pause();
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="no-print relative overflow-hidden rounded-xl bg-black ring-1 ring-night-fg/10">
      <video
        ref={ref}
        className="aspect-video w-full bg-black"
        playsInline
        preload="auto"
        poster="/videos/oliver-intro-poster.jpg"
        src="/videos/oliver-intro.mp4"
        controls={started}
      />

      {!started ? (
        <button
          type="button"
          onClick={start}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-night/35 text-night-fg"
          aria-label="Phát phim giới thiệu Oliver"
        >
          <span className="flex size-20 items-center justify-center rounded-full bg-oliver text-white shadow-soft md:size-24">
            <Play className="ml-1 size-9 fill-current md:size-11" />
          </span>
          <span className="font-display text-2xl font-semibold md:text-3xl">Phát phim giới thiệu</span>
          <span className="text-sm uppercase tracking-[0.22em] text-night-muted">50 giây · có lời Việt</span>
        </button>
      ) : (
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-end p-3">
          <div className="pointer-events-auto flex gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="inline-flex size-10 items-center justify-center rounded-full bg-night/70 text-night-fg"
              aria-label={playing ? "Tạm dừng" : "Phát"}
            >
              {playing ? <Pause className="size-4" /> : <Play className="size-4 fill-current" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="inline-flex size-10 items-center justify-center rounded-full bg-night/70 text-night-fg"
              aria-label={muted ? "Bật tiếng" : "Tắt tiếng"}
            >
              {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
