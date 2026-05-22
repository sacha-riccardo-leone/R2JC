"use client";

import { useState } from "react";

/**
 * HeroVideo — self-hosted ambient background, native HTML5 video.
 *
 * Why not YouTube embed: YouTube's iframe re-renders its chrome briefly
 * whenever the player re-attaches (tab switch + return, network hiccup,
 * pause/resume). With `controls=0` we ask YouTube to hide its UI, but the
 * UI still flashes during state transitions because the iframe initializes
 * with default chrome before the param is applied.
 *
 * Native <video> without a `controls` attribute renders ZERO browser UI in
 * every state. No play button, no scrubber, no skip arrows, no fullscreen
 * icon, no Picture-in-Picture button. Browsers handle autoplay pause-on-blur
 * and resume-on-focus invisibly. This is the only way to guarantee chrome
 * cannot appear under any condition.
 *
 * Expected file: /public/media/home/hero-ambient.mp4
 *
 * If the file is missing the component renders nothing and the parent
 * section's `bg-noir` background shows through — the hero stays cinematic
 * black with the headline doing the work. No broken-image icon, no flash.
 */
export function HeroVideo() {
  const [available, setAvailable] = useState(true);

  if (!available) return null;

  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <video
        src="/media/home/hero-ambient.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
        onError={() => setAvailable(false)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
        tabIndex={-1}
      />
    </div>
  );
}
