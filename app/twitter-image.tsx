import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nirav Mehta - Fullstack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Catppuccin Mocha colors
const colors = {
  base: "#1e1e2e",
  text: "#cdd6f4",
  subtext0: "#a6adc8",
  overlay0: "#6c7086",
  mauve: "#cba6f7",
};

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
          backgroundColor: colors.base,
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: colors.text,
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          hi, i'm <span style={{ color: colors.mauve }}>nirav</span>
        </div>
        <div
          style={{
            fontSize: 40,
            color: colors.subtext0,
            marginBottom: 10,
          }}
        >
          fullstack <span style={{ color: colors.mauve }}>developer</span> and{" "}
          <span style={{ color: colors.mauve }}>computer science junior</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: colors.overlay0,
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
            color: colors.overlay0,
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
