"use client";

import { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { uploadVideo, type UploadResult } from "@/lib/api";
import { Upload, CheckCircle, AlertCircle, Film, ArrowLeft } from "lucide-react";
import Link from "next/link";

type UploadState =
  | { phase: "idle" }
  | { phase: "uploading"; progress: number; fileName: string }
  | { phase: "done"; result: UploadResult }
  | { phase: "error"; message: string };

export default function DashboardPage() {
  const [state, setState] = useState<UploadState>({ phase: "idle" });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async (file: File) => {
    setState({ phase: "uploading", progress: 0, fileName: file.name });
    try {
      const result = await uploadVideo(file, (pct) => {
        setState((prev) =>
          prev.phase === "uploading" ? { ...prev, progress: pct } : prev
        );
      });
      setState({ phase: "done", result });
    } catch (err) {
      setState({
        phase: "error",
        message: err instanceof Error ? err.message : "Upload failed",
      });
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.45_0.2_265/0.15),transparent_70%)] blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 md:px-12 lg:px-20">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              VideoOS
            </span>
          </Link>
          <span className="text-sm text-muted-foreground">/</span>
          <span className="text-sm font-medium text-foreground">Dashboard</span>
        </div>
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 bg-white/5 text-sm backdrop-blur-sm hover:bg-white/10"
          >
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
            Home
          </Button>
        </Link>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-1 flex-col items-center px-5 py-12 sm:px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-2xl">
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Upload Video</h1>
          <p className="mb-8 text-muted-foreground">
            Upload a video file to process it through the MediaOS pipeline. You'll receive an HLS streaming URL when complete.
          </p>

          {/* Upload zone */}
          {state.phase === "idle" && (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
              className="group cursor-pointer rounded-2xl border-2 border-dashed border-white/10 bg-white/[0.02] p-12 text-center transition-all hover:border-blue-500/30 hover:bg-white/[0.04]"
            >
              <div className="mx-auto mb-4 inline-flex rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 text-blue-400 transition-colors group-hover:text-blue-300">
                <Upload className="h-6 w-6" />
              </div>
              <p className="mb-2 text-lg font-medium text-foreground">
                Drop your video here or click to browse
              </p>
              <p className="text-sm text-muted-foreground">
                Supports MP4, MOV, MKV, AVI, WebM, WMV, MPEG (up to 5 GB)
              </p>
              <input
                ref={inputRef}
                type="file"
                accept=".mp4,.mov,.mkv,.avi,.webm,.wmv,.mpeg,.mpg,.m4v"
                onChange={handleInputChange}
                className="hidden"
              />
            </div>
          )}

          {/* Uploading state */}
          {state.phase === "uploading" && (
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
              <div className="mb-4 flex items-center gap-3">
                <Film className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-foreground">
                  {state.fileName}
                </span>
              </div>
              <div className="mb-2 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${state.progress}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {state.progress < 100
                  ? `Uploading... ${state.progress}%`
                  : "Processing video on server..."}
              </p>
            </div>
          )}

          {/* Success state */}
          {state.phase === "done" && (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8">
              <div className="mb-4 flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-medium text-foreground">
                  Upload complete
                </span>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">File</dt>
                  <dd className="font-mono text-foreground">
                    {state.result.data.filename}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Size</dt>
                  <dd className="text-foreground">
                    {(state.result.data.sizeBytes / (1024 * 1024)).toFixed(1)} MB
                  </dd>
                </div>
                {state.result.data.hlsUrl && (
                  <div>
                    <dt className="text-muted-foreground">HLS Stream URL</dt>
                    <dd className="break-all font-mono text-sm text-blue-400">
                      {state.result.data.hlsUrl}
                    </dd>
                  </div>
                )}
                {state.result.data.transcode && (
                  <div>
                    <dt className="text-muted-foreground">Transcode Job</dt>
                    <dd className="text-foreground">
                      #{state.result.data.transcode.jobId} — {state.result.data.transcode.status}
                    </dd>
                  </div>
                )}
              </dl>
              <Button
                onClick={() => setState({ phase: "idle" })}
                className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500"
              >
                Upload another video
              </Button>
            </div>
          )}

          {/* Error state */}
          {state.phase === "error" && (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
              <div className="mb-4 flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <span className="text-lg font-medium text-foreground">
                  Upload failed
                </span>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                {state.message}
              </p>
              <Button
                onClick={() => setState({ phase: "idle" })}
                variant="outline"
                className="border-white/10 bg-white/5 hover:bg-white/10"
              >
                Try again
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
