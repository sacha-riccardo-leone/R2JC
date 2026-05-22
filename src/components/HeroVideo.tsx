"use client";

import { useEffect, useState } from "react";

/**
 * HeroVideo — YouTube ambient background.
 *
 * Bulletproofing against YouTube's initial chrome flash:
 *
 *   1. The iframe is scaled up 135% inside an overflow-hidden container.
 *      Any control bar / title bar / "Watch on YouTube" pill that YouTube
 *      tries to render falls outside the visible crop.
 *
 *   2. A black mask sits on top of the iframe with full opacity for the
 *      first ~1400ms, then fades to transparent. This hides the loading
 *      state entirely so the viewer never sees a play button, skip arrows,
 *      or any YouTube chrome.
 *
 *   3. pointer-events: none on every layer — the video is purely decorative,
 *      cannot be paused, scrubbed, or interacted with.
 *
 *   4. All YT player params disabled: controls, showinfo, modestbranding,
 *      iv_load_policy, fs, cc_load_policy, disablekb, autohide, rel.
 *
 * The live r2jc.ch source uses video ID Ia4MtzLbaZg with t=1065..1090.
 */
export function HeroVideo() {
  const videoId = "Ia4MtzLbaZg";
  const start = 1065;
  const end = 1090;

  const [unmasked, setUnmasked] = useState(false);

  useEffect(() => {
    // Give YouTube time to initialize fully before revealing.
    // 1400ms covers the chrome flash window observed on slow first paint.
    const t = setTimeout(() => setUnmasked(true), 1400);
    return () => clearTimeout(t);
  }, []);

  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId, // required for loop to work on single-video embeds
    start: String(start),
    end: String(end),
    controls: "0",
    showinfo: "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    disablekb: "1",
    iv_load_policy: "3",
    fs: "0",
    cc_load_policy: "0",
    autohide: "1",
  }).toString();

  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Iframe scaled 135% so any YouTube chrome falls outside the crop */}
      <iframe
        title="R2JC ambient hero"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?${params}`}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "135vw",
          height: "135vh",
          minWidth: "calc(135vh * 16 / 9)",
          minHeight: "calc(135vw * 9 / 16)",
        }}
        frameBorder={0}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen={false}
        tabIndex={-1}
      />

      {/* Black mask — hides every initial-load artifact, then fades away */}
      <div
        className={`absolute inset-0 bg-noir transition-opacity duration-700 ease-editorial ${
          unmasked ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
