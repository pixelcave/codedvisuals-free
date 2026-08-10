import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";

import BrowserSimple from "@/components/codedvisuals/browser/simple";
import ChartsSparkline from "@/components/codedvisuals/charts/sparkline";
import FilesStacked from "@/components/codedvisuals/files/stacked";
import IntegrationsLogoOrbit from "@/components/codedvisuals/integrations/logo-orbit";
import NotificationsBell from "@/components/codedvisuals/notifications/bell";
import { Container } from "@/components/container";
import Logo from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { PreviewVisual, PreviewVisualGrid } from "@/components/preview-visual";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://codedvisuals.com";
const REPO_URL = "https://github.com/pixelcave/codedvisuals-free";

const USAGE_SNIPPET = `import FilesStacked from "@/components/codedvisuals/files/stacked";

<FilesStacked animated trigger="inView" category="documents" count={7} />`;

/** Passed to Logo Orbit's `innerLogos` in a couple of the previews below. */
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

/** Passed to Logo Orbit's `logo` in the custom logo preview below. */
const CUSTOM_LOGO = (
  <svg viewBox="0 0 24 24" className="size-7">
    <circle cx="7.5" cy="8" r="5" className="fill-blue-500" opacity={0.9} />
    <circle cx="16.5" cy="8" r="5" className="fill-rose-500" opacity={0.9} />
    <circle cx="12" cy="15" r="5" className="fill-amber-500" opacity={0.9} />
  </svg>
);

export function App() {
  return (
    <div className="relative flex min-h-screen min-w-93.75 flex-col">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:flex"
        aria-hidden="true"
      >
        <div className="relative mx-auto flex h-full w-full max-w-7xl justify-between">
          <div className="absolute inset-y-0 -left-4 w-4 border-x border-border/60 bg-[repeating-linear-gradient(225deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] text-muted lg:-left-6 lg:w-6 2xl:-left-10 2xl:w-10 dark:text-muted/60" />
          <div className="absolute inset-y-0 -right-4 w-4 border-x border-border/60 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] text-muted lg:-right-6 lg:w-6 2xl:-right-10 2xl:w-10 dark:text-muted/60" />
        </div>
      </div>
      {/* END Background */}

      {/* Header */}
      <header className="sticky top-0 z-50 shrink-0 border-b border-border/50 bg-background/60">
        <Container className="relative flex h-14 items-center justify-between">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-background/90 backdrop-blur-xs"
          />
          <div className="relative flex items-center gap-0.5 sm:gap-2">
            <a href={SITE_URL} aria-label="CodedVisuals" className="group flex">
              <Logo wordmarkClassName="hidden md:block" />
            </a>
            <Badge variant="secondary" className="mr-3">
              Free
            </Badge>
            <ModeToggle />
          </div>
          <div className="relative flex items-center gap-1.5">
            <Button
              variant="ghost"
              nativeButton={false}
              render={
                <a href={`${SITE_URL}/docs`} target="_blank" rel="noreferrer">
                  Docs
                </a>
              }
              className="hidden sm:inline-flex"
            />
            <Button
              nativeButton={false}
              render={
                <a
                  href={`${SITE_URL}/pricing`}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  Get access
                  <ArrowRightIcon className="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
                </a>
              }
            />
          </div>
        </Container>
      </header>
      {/* END Header */}

      {/* Main */}
      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <Section featured>
          <Container className="relative">
            <SectionHeading
              as="h1"
              align="center"
              animated
              classic
              badge="5 visuals, free forever"
              title="A free taste of the visual layer."
              description={
                <>
                  Drop-in animated visual compositions and coded illustrations
                  that make your <span className="font-medium">React</span> and{" "}
                  <span className="font-medium">shadcn/ui</span> marketing pages
                  stand out. Powered by{" "}
                  <span className="font-medium">Motion</span>, with skills your{" "}
                  <span className="font-medium">AI agents</span> can build with.
                </>
              }
            />
            <motion.div
              className="mt-7 flex flex-wrap justify-center gap-2.5"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            >
              <Button
                size="lg"
                nativeButton={false}
                render={
                  <a
                    href={`${SITE_URL}/visuals`}
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                  >
                    Explore all visuals
                    <ArrowRightIcon className="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
                  </a>
                }
              />
              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                render={
                  <a href={REPO_URL} target="_blank" rel="noreferrer">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                      aria-hidden="true"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    View on GitHub
                  </a>
                }
              />
            </motion.div>
          </Container>
        </Section>
        {/* END Hero */}

        {/* Usage */}
        <Section mini borderTop>
          <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-md flex-col gap-2">
              <h2 className="text-lg font-semibold tracking-tight">
                Copy, paste, customize
              </h2>
              <p className="text-sm/relaxed text-muted-foreground">
                Copy any file from{" "}
                <code className="rounded-md bg-muted px-1.5 py-0.5 text-xs">
                  src/components/codedvisuals/
                </code>{" "}
                into your own project, then import it and pass it props. No
                install step, no config.
              </p>
            </div>
            <pre className="overflow-x-auto rounded-lg border border-border/50 bg-muted/20 p-4 text-xs/relaxed text-muted-foreground dark:bg-muted/15">
              <code>{USAGE_SNIPPET}</code>
            </pre>
          </Container>
        </Section>
        {/* END Usage */}

        {/* Browser · Simple */}
        <Section compact borderTop>
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Badge variant="outline" className="font-mono">
                browser/simple.tsx
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Browser · Simple
              </h2>
              <p className="max-w-2xl text-sm/relaxed text-muted-foreground">
                A clean browser window frame for showcasing any screenshot or
                UI, with optional isometric tilt and fade out.
              </p>
            </div>

            <PreviewVisualGrid cols={2}>
              <PreviewVisual label="landing" size="md">
                <BrowserSimple animated trigger="inViewRepeat" />
              </PreviewVisual>
              <PreviewVisual label="dashboard" size="md">
                <BrowserSimple
                  animated
                  trigger="inViewRepeat"
                  variant="dashboard"
                />
              </PreviewVisual>
              <PreviewVisual label="landing · fadeOut" size="md">
                <BrowserSimple animated trigger="inViewRepeat" fadeOut />
              </PreviewVisual>
              <PreviewVisual label="dashboard · fadeOut" size="md">
                <BrowserSimple
                  animated
                  trigger="inViewRepeat"
                  variant="dashboard"
                  fadeOut
                />
              </PreviewVisual>
              <PreviewVisual label="landing · isometric" size="md">
                <BrowserSimple animated trigger="inViewRepeat" isometric />
              </PreviewVisual>
              <PreviewVisual label="dashboard · isometric" size="md">
                <BrowserSimple
                  animated
                  trigger="inViewRepeat"
                  variant="dashboard"
                  isometric
                />
              </PreviewVisual>
              <PreviewVisual label="landing · isometric · fadeOut" size="md">
                <BrowserSimple
                  animated
                  trigger="inViewRepeat"
                  isometric
                  fadeOut
                />
              </PreviewVisual>
              <PreviewVisual label="dashboard · isometric · fadeOut" size="md">
                <BrowserSimple
                  animated
                  trigger="inViewRepeat"
                  variant="dashboard"
                  isometric
                  fadeOut
                />
              </PreviewVisual>
              <PreviewVisual label="landing · no gradient" size="md">
                <BrowserSimple
                  animated
                  trigger="inViewRepeat"
                  gradient={false}
                />
              </PreviewVisual>
              <PreviewVisual
                label="landing · isometric · no gradient"
                size="md"
              >
                <BrowserSimple
                  animated
                  trigger="inViewRepeat"
                  isometric
                  gradient={false}
                />
              </PreviewVisual>
              <PreviewVisual label="landing · custom url" size="md">
                <BrowserSimple animated trigger="inViewRepeat" url="acme.io" />
              </PreviewVisual>
              <PreviewVisual label="dashboard · custom url" size="md">
                <BrowserSimple
                  animated
                  trigger="inViewRepeat"
                  variant="dashboard"
                  url="app.acme.io/overview"
                />
              </PreviewVisual>
            </PreviewVisualGrid>
          </Container>
        </Section>
        {/* END Browser · Simple */}

        {/* Charts · Sparkline */}
        <Section compact borderTop>
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Badge variant="outline" className="font-mono">
                charts/sparkline.tsx
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Charts · Sparkline
              </h2>
              <p className="max-w-2xl text-sm/relaxed text-muted-foreground">
                A compact metric card with a trend line, value, and change
                badge, for stats, analytics, and dashboard features.
              </p>
            </div>

            <PreviewVisualGrid cols={2}>
              <PreviewVisual label="default" size="md">
                <ChartsSparkline animated trigger="inViewRepeat" />
              </PreviewVisual>
              <PreviewVisual label="isometric" size="md">
                <ChartsSparkline animated trigger="inViewRepeat" isometric />
              </PreviewVisual>
              <PreviewVisual label="default · no gradient" size="md">
                <ChartsSparkline
                  animated
                  trigger="inViewRepeat"
                  gradient={false}
                />
              </PreviewVisual>
              <PreviewVisual label="isometric · no gradient" size="md">
                <ChartsSparkline
                  animated
                  trigger="inViewRepeat"
                  isometric
                  gradient={false}
                />
              </PreviewVisual>
              <PreviewVisual label="negative change · custom copy" size="md">
                <ChartsSparkline
                  animated
                  trigger="inViewRepeat"
                  title="Churn rate"
                  value="2.4%"
                  change="-1.1%"
                  points={[
                    0.85, 0.78, 0.82, 0.7, 0.72, 0.58, 0.6, 0.45, 0.42, 0.3,
                  ]}
                />
              </PreviewVisual>
              <PreviewVisual
                label="negative change · isometric · custom copy"
                size="md"
              >
                <ChartsSparkline
                  animated
                  trigger="inViewRepeat"
                  isometric
                  title="Bounce rate"
                  value="38.2%"
                  change="-4.6%"
                  points={[
                    0.9, 0.82, 0.85, 0.7, 0.68, 0.58, 0.5, 0.42, 0.38, 0.25,
                  ]}
                />
              </PreviewVisual>
              <PreviewVisual label="custom copy" size="md">
                <ChartsSparkline
                  animated
                  trigger="inViewRepeat"
                  title="MRR"
                  value="$12.4k"
                  change="+8.2%"
                />
              </PreviewVisual>
              <PreviewVisual
                label="isometric · no gradient · custom copy"
                size="md"
              >
                <ChartsSparkline
                  animated
                  trigger="inViewRepeat"
                  isometric
                  gradient={false}
                  title="Requests"
                  value="842k"
                  change="+31.4%"
                  points={[
                    0.15, 0.28, 0.22, 0.4, 0.38, 0.55, 0.52, 0.7, 0.68, 0.88,
                  ]}
                />
              </PreviewVisual>
            </PreviewVisualGrid>
          </Container>
        </Section>
        {/* END Charts · Sparkline */}

        {/* Files · Stacked */}
        <Section compact borderTop>
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Badge variant="outline" className="font-mono">
                files/stacked.tsx
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Files · Stacked
              </h2>
              <p className="max-w-2xl text-sm/relaxed text-muted-foreground">
                A stack of overlapping file cards with depth. A distinct shape
                for uploads, storage, and document features.
              </p>
            </div>

            <PreviewVisualGrid cols={4}>
              <PreviewVisual label="files" size="sm">
                <FilesStacked animated trigger="inViewRepeat" count={9} />
              </PreviewVisual>
              <PreviewVisual label="documents" size="sm">
                <FilesStacked
                  animated
                  trigger="inViewRepeat"
                  category="documents"
                  label="7 documents"
                  count={7}
                />
              </PreviewVisual>
              <PreviewVisual label="spreadsheets" size="sm">
                <FilesStacked
                  animated
                  trigger="inViewRepeat"
                  category="spreadsheets"
                  label="5 sheets"
                  count={5}
                />
              </PreviewVisual>
              <PreviewVisual label="images" size="sm">
                <FilesStacked
                  animated
                  trigger="inViewRepeat"
                  category="images"
                  label="3 images"
                  count={3}
                />
              </PreviewVisual>
              <PreviewVisual label="design" size="sm">
                <FilesStacked
                  animated
                  trigger="inViewRepeat"
                  category="design"
                  label="Design"
                />
              </PreviewVisual>
              <PreviewVisual label="code" size="sm">
                <FilesStacked
                  animated
                  trigger="inViewRepeat"
                  category="code"
                  label="Code"
                />
              </PreviewVisual>
              <PreviewVisual label="fonts" size="sm">
                <FilesStacked
                  animated
                  trigger="inViewRepeat"
                  category="fonts"
                  label="Fonts"
                />
              </PreviewVisual>
              <PreviewVisual label="media" size="sm">
                <FilesStacked
                  animated
                  trigger="inViewRepeat"
                  category="media"
                  label="Media"
                />
              </PreviewVisual>
              <PreviewVisual label="video" size="sm">
                <FilesStacked
                  animated
                  trigger="inViewRepeat"
                  category="video"
                  label="Video"
                />
              </PreviewVisual>
              <PreviewVisual label="audio" size="sm">
                <FilesStacked
                  animated
                  trigger="inViewRepeat"
                  category="audio"
                  label="Audio"
                />
              </PreviewVisual>
              <PreviewVisual label="archives" size="sm">
                <FilesStacked
                  animated
                  trigger="inViewRepeat"
                  category="archives"
                  label="Archives"
                />
              </PreviewVisual>
              <PreviewVisual label="mixed" size="sm">
                <FilesStacked
                  animated
                  trigger="inViewRepeat"
                  category="mixed"
                  label="Mixed"
                />
              </PreviewVisual>
            </PreviewVisualGrid>
          </Container>
        </Section>
        {/* END Files · Stacked */}

        {/* Integrations · Logo Orbit */}
        <Section compact borderTop>
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Badge variant="outline" className="font-mono">
                integrations/logo-orbit.tsx
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Integrations · Logo Orbit
              </h2>
              <p className="max-w-2xl text-sm/relaxed text-muted-foreground">
                Integration logos orbiting a central brand mark, with optional
                inner ring, isometric tilt, and continuous spin.
              </p>
            </div>

            <PreviewVisualGrid cols={2}>
              <PreviewVisual label="default" size="md">
                <IntegrationsLogoOrbit animated trigger="inViewRepeat" />
              </PreviewVisual>
              <PreviewVisual label="hover · orbit" size="md">
                <IntegrationsLogoOrbit
                  animated
                  trigger="inViewRepeat"
                  innerLogos={INNER_RING_LOGOS}
                  orbit
                  hover
                />
              </PreviewVisual>
              <PreviewVisual label="isometric" size="md">
                <IntegrationsLogoOrbit
                  animated
                  trigger="inViewRepeat"
                  isometric
                />
              </PreviewVisual>
              <PreviewVisual label="orbit" size="md">
                <IntegrationsLogoOrbit animated trigger="inViewRepeat" orbit />
              </PreviewVisual>
              <PreviewVisual label="orbit · isometric" size="md">
                <IntegrationsLogoOrbit
                  animated
                  trigger="inViewRepeat"
                  orbit
                  isometric
                />
              </PreviewVisual>
              <PreviewVisual label="hidden logo" size="md">
                <IntegrationsLogoOrbit
                  animated
                  trigger="inViewRepeat"
                  logo={null}
                />
              </PreviewVisual>
              <PreviewVisual label="custom logo" size="md">
                <IntegrationsLogoOrbit
                  animated
                  trigger="inViewRepeat"
                  logo={CUSTOM_LOGO}
                />
              </PreviewVisual>
              <PreviewVisual label="inner ring" size="md">
                <IntegrationsLogoOrbit
                  animated
                  trigger="inViewRepeat"
                  innerLogos={INNER_RING_LOGOS}
                />
              </PreviewVisual>
              <PreviewVisual label="orbit · inner ring" size="md">
                <IntegrationsLogoOrbit
                  animated
                  trigger="inViewRepeat"
                  orbit
                  innerLogos={INNER_RING_LOGOS}
                />
              </PreviewVisual>
              <PreviewVisual
                label="custom radius · orbit · isometric"
                size="md"
              >
                <IntegrationsLogoOrbit
                  animated
                  trigger="inViewRepeat"
                  outerRadius={140}
                  innerRadius={85}
                  innerLogos={INNER_RING_LOGOS}
                  orbit
                  isometric
                />
              </PreviewVisual>
            </PreviewVisualGrid>
          </Container>
        </Section>
        {/* END Integrations · Logo Orbit */}

        {/* Notifications · Bell */}
        <Section compact borderTop>
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Badge variant="outline" className="font-mono">
                notifications/bell.tsx
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Notifications · Bell
              </h2>
              <p className="max-w-2xl text-sm/relaxed text-muted-foreground">
                A notification bell with an unread count badge, for alerts,
                inbox, and activity features.
              </p>
            </div>

            <PreviewVisualGrid cols={3}>
              <PreviewVisual label="default" size="sm">
                <NotificationsBell animated trigger="inViewRepeat" />
              </PreviewVisual>
              <PreviewVisual label="hover" size="sm">
                <NotificationsBell animated trigger="inViewRepeat" hover />
              </PreviewVisual>
              <PreviewVisual label="count={0}" size="sm">
                <NotificationsBell animated trigger="inViewRepeat" count={0} />
              </PreviewVisual>
              <PreviewVisual label="count={12}" size="sm">
                <NotificationsBell animated trigger="inViewRepeat" count={12} />
              </PreviewVisual>
              <PreviewVisual label="count={150}" size="sm">
                <NotificationsBell
                  animated
                  trigger="inViewRepeat"
                  count={150}
                />
              </PreviewVisual>
              <PreviewVisual label="fadeOut" size="sm">
                <NotificationsBell
                  animated
                  trigger="inViewRepeat"
                  count={15}
                  fadeOut
                />
              </PreviewVisual>
              <PreviewVisual label="isometric" size="sm">
                <NotificationsBell
                  animated
                  trigger="inViewRepeat"
                  count={15}
                  isometric
                />
              </PreviewVisual>
              <PreviewVisual label="isometric · fadeOut" size="sm">
                <NotificationsBell
                  animated
                  trigger="inViewRepeat"
                  count={15}
                  fadeOut
                  isometric
                />
              </PreviewVisual>
              <PreviewVisual label="animated={false}" size="sm">
                <NotificationsBell count={12} />
              </PreviewVisual>
            </PreviewVisualGrid>
          </Container>
        </Section>
        {/* END Notifications · Bell */}

        {/* CTA */}
        <Section borderTop featuredBottom>
          <Container className="relative">
            <SectionHeading
              align="center"
              animated
              trigger="inView"
              classic
              badge="One-time purchase"
              title="Get access to the full library."
              description="You have seen what a single file can do, 5 times over. CodedVisuals already has 100+ visuals and 950+ variations across 30+ categories, every one built exactly like these. New ones land all the time, and they are yours as they ship."
            />
            <div className="mt-7 flex justify-center">
              <Button
                size="lg"
                nativeButton={false}
                render={
                  <a
                    href={`${SITE_URL}/pricing`}
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                  >
                    Get access today
                    <ArrowRightIcon className="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
                  </a>
                }
              />
            </div>
          </Container>
        </Section>
        {/* END CTA */}
      </main>
      {/* END Main */}

      {/* Footer */}
      <footer className="relative shrink-0 border-t border-border/60 py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-background/60"
        />

        <Container className="relative">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-sm">
                <a href={SITE_URL} className="group inline-flex">
                  <Logo />
                </a>
                <p className="mt-2 text-sm/relaxed text-muted-foreground">
                  Animated marketing visuals you drop into your marketing pages.
                  Self-contained React components, styled with shadcn/ui and
                  animated with Motion.
                </p>
              </div>

              <ul className="flex flex-wrap items-center gap-1.25">
                <li>
                  <a
                    href="https://x.com/intent/follow?screen_name=pixelcave_john"
                    aria-label="X"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-transform duration-150 hover:scale-110 hover:bg-muted hover:text-foreground active:scale-100"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                      aria-hidden="true"
                    >
                      <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/pixelcave"
                    aria-label="GitHub"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-transform duration-150 hover:scale-110 hover:bg-muted hover:text-foreground active:scale-100"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                      aria-hidden="true"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@pixelcave_web"
                    aria-label="YouTube"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-transform duration-150 hover:scale-110 hover:bg-muted hover:text-foreground active:scale-100"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                      aria-hidden="true"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div
              role="separator"
              aria-orientation="horizontal"
              className="h-px w-full shrink-0 bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[7px_1px] bg-repeat-x opacity-35 dark:opacity-25"
            />

            <div className="flex flex-col gap-4 sm:flex-row-reverse sm:items-center sm:justify-between">
              <div className="flex items-center justify-center gap-0.5 text-xs font-semibold text-muted-foreground">
                <span>Crafted with</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="inline-block size-4 text-rose-600 dark:text-rose-400"
                >
                  <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                </svg>
                <span>
                  by{" "}
                  <a
                    className="font-medium underline underline-offset-2 transition hover:text-foreground"
                    href="https://pixelcave.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    pixelcave
                  </a>
                </span>
              </div>
              <p className="text-center text-xs text-muted-foreground">
                {new Date().getFullYear()} ©{" "}
                <span className="font-medium">CodedVisuals</span>
              </p>
            </div>
          </div>
        </Container>
      </footer>
      {/* END Footer */}
    </div>
  );
}

export default App;
