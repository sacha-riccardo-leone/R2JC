"use client";

/**
 * HeroVideo — embeds the live r2jc.ch YouTube hero video as a muted,
 * looping background. Mirrors the original Elementor section that uses
 * https://youtu.be/Ia4MtzLbaZg from t=1065s to t=1090s.
 *
 * When R2JC delivers a self-hosted MP4, swap the iframe for a <video>.
 */
export function HeroVideo() {
  const videoId = "Ia4MtzLbaZg";
  const start = 1065;
  const end = 1090;

  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <iframe
        title="R2JC ambient hero"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&start=${start}&end=${end}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3`}
        frameBorder={0}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen={false}
      />
    </div>
  );
}
