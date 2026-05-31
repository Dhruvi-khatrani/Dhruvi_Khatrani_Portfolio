import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a1628 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
            fontSize: "18px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a78bfa",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#5516be",
            }}
          />
          Full-Stack Engineer · Available for Work
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: 700,
            marginBottom: "32px",
            background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {siteConfig.jobTitle}
        </div>
        <div
          style={{
            fontSize: "24px",
            lineHeight: 1.5,
            color: "#cbd5e1",
            maxWidth: "900px",
          }}
        >
          Modern, scalable web applications with React, Next.js, Node.js &amp;
          beautiful UI/UX
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "48px",
            flexWrap: "wrap",
          }}
        >
          {["React.js", "Next.js", "Node.js", "TypeScript", "Socket.IO"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  border: "1px solid rgba(167, 139, 250, 0.3)",
                  background: "rgba(85, 22, 190, 0.15)",
                  fontSize: "18px",
                  color: "#e2e8f0",
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
