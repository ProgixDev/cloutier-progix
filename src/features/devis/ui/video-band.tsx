"use client";

import { useRef, useState } from "react";
import styles from "./devis.module.css";

type BandStat = { n: string; u?: string; l: string };

/**
 * Full-bleed navy band built around the Progix company reel. The source is a
 * 9:16 vertical clip, so it is framed as a portrait player on the left with the
 * copy beside it rather than stretched across the band.
 *
 * The video is `preload="none"` behind its poster: the 4.5 MB file is fetched
 * only once the visitor presses play, so the document stays light for a client
 * who never opens it. Native controls appear on first play; before that the
 * poster carries a single large play affordance.
 *
 * In print the poster remains (a PDF cannot play video) and the play button is
 * dropped — see the `@media print` rules for `.videoPlay`.
 */
export function VideoBand({
  eyebrow,
  title,
  titleAccent,
  sub,
  stats,
  src,
  poster,
  caption,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  sub: string;
  stats?: ReadonlyArray<BandStat>;
  src: string;
  poster: string;
  caption: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    // `preload="none"` means the first play() is what triggers the download.
    void videoRef.current?.play().catch(() => {
      // Autoplay policies or a failed fetch — the native controls take over.
    });
  };

  return (
    <section className={styles.band}>
      <div className={styles.bandDots} aria-hidden="true" />
      <div className={styles.bandGlow} aria-hidden="true" />
      <div className={styles.videoInner}>
        <div className={styles.videoFrame}>
          <div className={styles.videoAura} aria-hidden="true" />
          <div className={styles.videoStage}>
            <video
              ref={videoRef}
              className={styles.videoEl}
              src={src}
              poster={poster}
              preload="none"
              playsInline
              controls={started}
              onPlay={() => setStarted(true)}
            />
            {started ? null : (
              <button
                type="button"
                data-noprint
                className={styles.videoPlay}
                onClick={start}
                aria-label="Lire la vidéo de présentation de Progix"
              >
                <span className={styles.videoPlayIcon} aria-hidden="true">
                  ▶
                </span>
                <span className={styles.videoPlayLabel}>Lire · 36 s</span>
              </button>
            )}
          </div>
          <p className={styles.videoCaption}>{caption}</p>
        </div>

        <div className={styles.videoCopy}>
          <div className={styles.bandEyebrow}>
            <span className={styles.bandEyebrowBar} aria-hidden="true" />
            {eyebrow}
          </div>
          <h2 className={styles.bandTitle}>
            {title}
            {titleAccent ? (
              <>
                {" "}
                <span className={styles.bandTitleAccent}>{titleAccent}</span>
              </>
            ) : null}
          </h2>
          <p className={styles.bandSub}>{sub}</p>
          {stats && stats.length > 0 ? (
            <div className={styles.videoStats}>
              {stats.map((s) => (
                <div key={s.l}>
                  <div className={styles.bandStatNum}>
                    {s.n}
                    {s.u ? <small>{s.u}</small> : null}
                  </div>
                  <div className={styles.bandStatLabel}>{s.l}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
