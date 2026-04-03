import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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
    </div>
  );
}
