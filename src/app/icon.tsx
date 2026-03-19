import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020617, #0f172a)",
          borderRadius: "16px",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 48,
            height: 48,
            border: "3px solid #fbbf24",
            borderRadius: 999
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            background: "#38bdf8",
            borderRadius: 999
          }}
        />
        <span
          style={{
            color: "white",
            fontSize: 34,
            fontWeight: 700
          }}
        >
          D
        </span>
      </div>
    ),
    size
  );
}
