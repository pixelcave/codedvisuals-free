import { useCallback, useEffect, useState } from "react";

import BrowserSimple from "@/components/codedvisuals/browser/simple";
import ChartsSparkline from "@/components/codedvisuals/charts/sparkline";
import FilesStacked from "@/components/codedvisuals/files/stacked";
import IntegrationsLogoOrbit from "@/components/codedvisuals/integrations/logo-orbit";
import NotificationsBell from "@/components/codedvisuals/notifications/bell";
import LogoMark from "@/components/logo-mark";
import { LogoWordmark } from "@/components/logo";
import { cn } from "@/lib/utils";

/**
 * A fixed 1680 x 1080 marketing poster that shows all 5 free visuals at once.
 *
 * Open it at /showcase (or #showcase) and screenshot the `#showcase-frame`
 * element. The toolbar below the frame replays the animations, switches theme,
 * freezes every visual in its finished state, and zooms the frame to fit the
 * window. Each of those is also a query param, so a capture script can skip the
 * clicking: `?still=1&theme=light&bare=1` (`bare` hides the toolbar).
 */

const FRAME_WIDTH = 1680;
const FRAME_HEIGHT = 1080;

/* ------------------------------------------------------------------ */
/*  Logo Orbit inner ring                                             */
/* ------------------------------------------------------------------ */

const INNER_RING_LOGOS = [
  <svg viewBox="0 0 24 24" className="size-4 fill-current text-foreground">
    <path d="M12 1l12 21H0z" />
  </svg>,
  <svg viewBox="0 0 24 24" className="size-4 fill-current text-foreground">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>,
  <svg viewBox="0 0 24 24" className="size-4 fill-current text-foreground">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>,
];

/* ------------------------------------------------------------------ */
/*  The 5 free visuals                                                */
/* ------------------------------------------------------------------ */

const VISUALS = {
  browser: {
    index: "01",
    name: "Browser · Simple",
    file: "browser/simple.tsx",
  },
  bell: {
    index: "02",
    name: "Notifications · Bell",
    file: "notifications/bell.tsx",
  },
  orbit: {
    index: "03",
    name: "Integrations · Logo Orbit",
    file: "integrations/logo-orbit.tsx",
  },
  files: {
    index: "04",
    name: "Files · Stacked",
    file: "files/stacked.tsx",
  },
  sparkline: {
    index: "05",
    name: "Charts · Sparkline",
    file: "charts/sparkline.tsx",
  },
} as const;

/* ------------------------------------------------------------------ */
/*  Tile                                                              */
/* ------------------------------------------------------------------ */

function Tile({
  index,
  name,
  file,
  span,
  scale = 1,
  children,
}: {
  index: string;
  name: string;
  file: string;
  span: string;
  scale?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/55 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)] backdrop-blur-sm",
        span,
      )}
    >
      {/* Index */}
      <span className="absolute top-4 left-5 z-10 font-mono text-[11px] font-medium tracking-[0.2em] text-muted-foreground/60">
        {index}
      </span>
      {/* END Index */}

      {/* Visual */}
      <div className="relative flex min-h-0 grow items-center justify-center">
        <div
          className="flex size-full items-center justify-center"
          style={{ transform: `scale(${scale})` }}
        >
          {children}
        </div>
      </div>
      {/* END Visual */}

      {/* Caption */}
      <div className="flex shrink-0 items-center justify-between gap-2 border-t border-border/50 bg-muted/25 px-5 py-3">
        <span className="truncate text-[13px] font-semibold tracking-tight text-foreground">
          {name}
        </span>
        <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
          {file}
        </span>
      </div>
      {/* END Caption */}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Brand tile                                                        */
/* ------------------------------------------------------------------ */

const STACK = ["React", "Tailwind CSS", "shadcn/ui", "Motion"];

function BrandTile() {
  return (
    <div className="relative col-span-4 row-span-2 flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/45 p-9 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)] backdrop-blur-sm">
      {/* Tile glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-20 size-80 rounded-full bg-violet-500/15 blur-[90px] dark:bg-violet-500/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-28 size-80 rounded-full bg-sky-500/10 blur-[90px] dark:bg-sky-500/20"
      />
      {/* END Tile glow */}

      <div className="relative flex flex-col">
        {/* Lockup */}
        <div className="flex items-center gap-4">
          <LogoMark className="size-14 shrink-0" />
          <LogoWordmark className="text-5xl leading-none text-foreground" />
        </div>
        {/* END Lockup */}

        {/* Free subtitle */}
        <div className="mt-6 flex items-center gap-4">
          <span className="bg-[linear-gradient(90deg,var(--color-violet-600),var(--color-sky-600),var(--color-fuchsia-600))] bg-clip-text text-[2.25rem] leading-none font-extrabold tracking-[0.4em] text-transparent uppercase dark:bg-[linear-gradient(90deg,var(--color-violet-400),var(--color-sky-400),var(--color-fuchsia-400))]">
            Free
          </span>
          <span className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-border),transparent)]" />
        </div>
        {/* END Free subtitle */}
      </div>

      <div className="relative flex flex-col">
        <p className="text-[2rem] leading-tight font-bold tracking-tight text-foreground">
          5 animated visuals.
          <br />
          Copy, paste, ship.
        </p>
        <p className="mt-4 text-[15px]/relaxed text-muted-foreground">
          Drop-in visual compositions for React marketing pages. One
          self-contained file each, themed with your shadcn/ui tokens, animated
          with Motion, and free for personal and commercial work.
        </p>

        {/* Stack */}
        <ul className="mt-6 flex flex-wrap gap-1.5">
          {STACK.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border/70 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
        {/* END Stack */}
      </div>

      {/* Index */}
      <div className="relative flex flex-col">
        <span className="text-[10px] font-semibold tracking-[0.22em] text-muted-foreground/70 uppercase">
          What's inside
        </span>
        <ul className="mt-3 flex flex-col">
          {Object.values(VISUALS).map((visual) => (
            <li
              key={visual.index}
              className="flex items-baseline gap-3.5 border-b border-border/40 py-2 last:border-b-0"
            >
              <span className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground/60">
                {visual.index}
              </span>
              <span className="text-[13px] font-medium text-foreground">
                {visual.name}
              </span>
              <span className="ml-auto font-mono text-[10px] text-muted-foreground/70">
                {visual.file}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* END Index */}

      <div className="relative flex flex-col gap-7">
        {/* Snippet */}
        {/* <pre className="overflow-hidden rounded-xl border border-border/60 bg-background/70 px-4 py-3.5 font-mono text-[12px]/relaxed text-muted-foreground">
          <code>{SNIPPET}</code>
        </pre> */}
        {/* END Snippet */}

        {/* Meta */}
        <div className="flex items-baseline justify-between gap-3 border-t border-border/50 pt-6">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            codedvisuals.com
          </span>
          <span className="text-xs text-muted-foreground">
            100+ more in the full library
          </span>
        </div>
        {/* END Meta */}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Toolbar (never part of the screenshot)                            */
/* ------------------------------------------------------------------ */

function Toolbar({
  dark,
  onToggleTheme,
  onReplay,
  fit,
  onToggleFit,
  still,
  onToggleStill,
}: {
  dark: boolean;
  onToggleTheme: () => void;
  onReplay: () => void;
  fit: boolean;
  onToggleFit: () => void;
  still: boolean;
  onToggleStill: () => void;
}) {
  const buttonClass =
    "rounded-md px-3 py-1.5 text-xs font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white";

  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-xl border border-white/10 bg-neutral-900/90 p-1 shadow-lg backdrop-blur">
      <button
        type="button"
        className={buttonClass}
        onClick={onReplay}
        disabled={still}
      >
        Replay
      </button>
      <button type="button" className={buttonClass} onClick={onToggleStill}>
        {still ? "Animated" : "Still"}
      </button>
      <button type="button" className={buttonClass} onClick={onToggleTheme}>
        {dark ? "Light" : "Dark"}
      </button>
      <button type="button" className={buttonClass} onClick={onToggleFit}>
        {fit ? "1:1" : "Fit"}
      </button>
      <span className="px-2 text-[11px] text-neutral-500">
        1680 × 1080 · capture #showcase-frame
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function Showcase() {
  const params = new URLSearchParams(window.location.search);
  const bare = params.has("bare");

  const [dark, setDark] = useState(() => params.get("theme") !== "light");
  const [still, setStill] = useState(() => params.has("still"));
  const [fit, setFit] = useState(false);
  const [runId, setRunId] = useState(0);
  const [viewport, setViewport] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", dark);
    root.classList.toggle("light", !dark);
  }, [dark]);

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const replay = useCallback(() => {
    setRunId((id) => id + 1);
  }, []);

  const zoom = fit
    ? Math.min(
        1,
        (viewport.width - 64) / FRAME_WIDTH,
        (viewport.height - 120) / FRAME_HEIGHT,
      )
    : 1;

  return (
    <div className="flex min-h-screen w-full items-start justify-start overflow-auto bg-neutral-200 p-8 dark:bg-neutral-950">
      <div
        style={{
          width: FRAME_WIDTH * zoom,
          height: FRAME_HEIGHT * zoom,
          flex: "none",
        }}
      >
        <div
          id="showcase-frame"
          className="relative isolate overflow-hidden bg-background"
          style={{
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
            transform: `scale(${zoom})`,
            transformOrigin: "top left",
          }}
        >
          {/* Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_75%_65%_at_50%_35%,#000_35%,transparent_100%)] bg-size-[56px_56px] opacity-70" />
            <div className="absolute -top-56 -left-40 size-180 rounded-full bg-violet-500/12 blur-[150px] dark:bg-violet-500/22" />
            <div className="absolute top-1/4 -right-48 size-175 rounded-full bg-sky-500/12 blur-[150px] dark:bg-sky-500/20" />
            <div className="absolute -bottom-64 left-1/3 size-160 rounded-full bg-fuchsia-500/10 blur-[150px] dark:bg-fuchsia-500/18" />
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-violet-500),var(--color-sky-500),var(--color-fuchsia-500),transparent)] opacity-80" />
            <div className="absolute inset-0 ring-1 ring-border/60 ring-inset" />
          </div>
          {/* END Background */}

          {/* Bento */}
          <div
            key={`${runId}-${still}`}
            className="relative grid h-full grid-cols-12 grid-rows-2 gap-5 p-14"
          >
            <BrandTile />

            <Tile {...VISUALS.browser} span="col-span-5" scale={1.25}>
              <BrowserSimple animated={!still} trigger="mount" />
            </Tile>

            <Tile {...VISUALS.bell} span="col-span-3" scale={1.5}>
              <NotificationsBell animated={!still} trigger="mount" count={12} />
            </Tile>

            <Tile {...VISUALS.orbit} span="col-span-3" scale={1}>
              <IntegrationsLogoOrbit
                animated={!still}
                trigger="mount"
                orbit
                innerLogos={INNER_RING_LOGOS}
              />
            </Tile>

            <Tile {...VISUALS.files} span="col-span-2" scale={1.25}>
              <FilesStacked
                animated={!still}
                trigger="mount"
                category="documents"
                label="7 documents"
                count={7}
              />
            </Tile>

            <Tile {...VISUALS.sparkline} span="col-span-3" scale={1.25}>
              <ChartsSparkline animated={!still} trigger="mount" />
            </Tile>
          </div>
          {/* END Bento */}
        </div>
      </div>

      {!bare && (
        <Toolbar
          dark={dark}
          onToggleTheme={() => setDark((value) => !value)}
          onReplay={replay}
          fit={fit}
          onToggleFit={() => setFit((value) => !value)}
          still={still}
          onToggleStill={() => setStill((value) => !value)}
        />
      )}
    </div>
  );
}
