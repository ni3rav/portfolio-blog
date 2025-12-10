import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nirav Mehta - Fullstack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#1e2126",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "white",
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          hi, i'm <span style={{ color: "#a855f7" }}>nirav</span>
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#9ca3af",
            marginBottom: 10,
          }}
        >
          fullstack <span style={{ color: "#a855f7" }}>developer</span> and{" "}
          <span style={{ color: "#a855f7" }}>computer science junior</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#6b7280",
            fontStyle: "italic",
          }}
        >
          i like cats
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 28,
            color: "#4b5563",
          }}
        >
          ni3rav.me
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
