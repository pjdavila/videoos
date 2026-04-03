import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import {
  ArrowRight,
  Play,
  Upload,
  Brain,
  Scissors,
  Wand2,
  Repeat2,
  Send,
  DollarSign,
  Sparkles,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    icon: Upload,
    title: "Ingest",
    description:
      "Bulk-import video from any source — cloud storage, live streams, APIs, or direct upload. Zero-friction onboarding.",
    accent: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
    borderGlow: "group-hover:shadow-blue-500/10",
  },
  {
    icon: Brain,
    title: "Analyze",
    description:
      "AI-powered scene detection, transcript generation, sentiment analysis, and content tagging — all automatic.",
    accent: "from-violet-500/20 to-violet-600/5",
    iconColor: "text-violet-400",
    borderGlow: "group-hover:shadow-violet-500/10",
  },
  {
    icon: Scissors,
    title: "Clip",
    description:
      "Extract the best moments with intelligent highlight detection. Generate clips optimized for every platform.",
    accent: "from-cyan-500/20 to-cyan-600/5",
    iconColor: "text-cyan-400",
    borderGlow: "group-hover:shadow-cyan-500/10",
  },
  {
    icon: Wand2,
    title: "Edit",
    description:
      "Auto-subtitles, color grading, transitions, and branded overlays. Studio-quality output, zero manual work.",
    accent: "from-pink-500/20 to-pink-600/5",
    iconColor: "text-pink-400",
    borderGlow: "group-hover:shadow-pink-500/10",
  },
  {
    icon: Repeat2,
    title: "Repurpose",
    description:
      "One video becomes dozens — shorts, reels, audiograms, blog posts, social cards. Every format, every ratio.",
    accent: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-400",
    borderGlow: "group-hover:shadow-amber-500/10",
  },
  {
    icon: Send,
    title: "Distribute",
    description:
      "Publish to YouTube, TikTok, Instagram, X, LinkedIn, and custom endpoints simultaneously with one click.",
    accent: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
    borderGlow: "group-hover:shadow-emerald-500/10",
  },
  {
    icon: DollarSign,
    title: "Monetize",
    description:
      "Track performance, optimize ad placement, manage licensing, and maximize revenue across every channel.",
    accent: "from-orange-500/20 to-orange-600/5",
    iconColor: "text-orange-400",
    borderGlow: "group-hover:shadow-orange-500/10",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload",
    subtitle: "Drop your content",
    description:
      "Drag and drop any video file, paste a URL, or connect your cloud storage. VideoOS handles every format and resolution.",
    icon: Upload,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "AI Processes",
    subtitle: "Intelligence at work",
    description:
      "Our AI pipeline analyzes, transcribes, clips, edits, and repurposes your content into dozens of optimized assets — in minutes.",
    icon: Sparkles,
    gradient: "from-purple-500 to-violet-600",
  },
  {
    number: "03",
    title: "Distribute & Monetize",
    subtitle: "Scale your reach",
    description:
      "Publish everywhere simultaneously, track performance in real-time, and unlock revenue from every piece of content you create.",
    icon: Zap,
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.45_0.2_265/0.15),transparent_70%)] blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.5_0.18_290/0.1),transparent_70%)] blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            VideoOS
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#product" className="transition-colors hover:text-foreground">
            Product
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-foreground"
          >
            How It Works
          </a>
          <a href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </a>
        </nav>
        <Button
          variant="outline"
          size="sm"
          className="border-white/10 bg-white/5 text-sm backdrop-blur-sm hover:bg-white/10"
        >
          Book a Demo
        </Button>
      </header>

      {/* Hero */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        {/* Pill badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          Now in private beta
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          The operating system for{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            AI-powered video
          </span>
        </h1>

        {/* Subline */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Turn any video into multiple monetizable assets — automatically.
          Ingest, analyze, clip, repurpose, and distribute at scale.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-base font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30"
          >
            Book a Demo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-white/10 bg-white/5 px-8 text-base font-medium backdrop-blur-sm hover:bg-white/10"
          >
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </div>

        {/* Trust line */}
        <p className="mt-16 text-sm text-muted-foreground/60">
          Trusted by teams processing 10M+ minutes of video monthly
        </p>
      </main>

      {/* ─── Product Suite ─── */}
      <section id="product" className="relative z-10 px-6 py-32 md:px-12 lg:px-20">
        {/* Section glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.4_0.15_265/0.08),transparent_70%)] blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <AnimateOnScroll className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">
              The full pipeline
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Seven capabilities.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                One platform.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Every stage of the video lifecycle — from raw footage to revenue —
              orchestrated by AI and managed from a single control plane.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <AnimateOnScroll
                key={cap.title}
                delay={i * 80}
                className={i === 6 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <div
                  className={`group relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] ${cap.borderGlow} hover:shadow-xl`}
                >
                  {/* Card inner glow */}
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b ${cap.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <div
                      className={`mb-4 inline-flex rounded-xl border border-white/[0.06] bg-white/[0.03] p-2.5 ${cap.iconColor} transition-colors duration-300`}
                    >
                      <cap.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {cap.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section
        id="how-it-works"
        className="relative z-10 px-6 py-32 md:px-12 lg:px-20"
      >
        {/* Section glow */}
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-[400px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.45_0.18_290/0.06),transparent_70%)] blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <AnimateOnScroll className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400">
              Simple by design
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Three steps to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                infinite content
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              From raw footage to published, monetized content — fully automated.
            </p>
          </AnimateOnScroll>

          <div className="mt-20 flex flex-col gap-0">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 120}>
                <div className="group relative flex gap-8 md:gap-12">
                  {/* Vertical connector line */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="my-1 w-px flex-1 bg-gradient-to-b from-white/10 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-16 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-xs font-bold tracking-widest text-transparent`}
                      >
                        STEP {step.number}
                      </span>
                      <span className="text-xs text-muted-foreground/50">
                        {step.subtitle}
                      </span>
                    </div>
                    <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* CTA after steps */}
          <AnimateOnScroll delay={400} className="mt-16 text-center">
            <Button
              size="lg"
              className="group h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-base font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30"
            >
              Start building
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
