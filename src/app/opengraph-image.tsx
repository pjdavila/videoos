import { ImageResponse } from "next/og";

export const alt = "VideoOS — The Operating System for AI-Powered Video";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)",
          position: "relative",
        }}
      >
        {/* Gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(147,51,234,0.08) 40%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #3b82f6, #9333ea)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "18px solid white",
                borderTop: "12px solid transparent",
                borderBottom: "12px solid transparent",
                marginLeft: 4,
              }}
            />
          </div>
          <span
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            VideoOS
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 800,
            letterSpacing: "-0.03em",
          }}
        >
          The operating system for AI-powered video
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            marginTop: 24,
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          Turn any video into multiple monetizable assets — automatically.
        </div>
      </div>
    ),
    { ...size }
  );
}
