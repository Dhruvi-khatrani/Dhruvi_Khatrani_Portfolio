import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #5516be, #0566d9)",
          borderRadius: "8px",
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        DK
      </div>
    ),
    { ...size },
  );
}
