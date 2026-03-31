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
          background: "linear-gradient(145deg, #f4ecff 0%, #7d5cc6 100%)",
          borderRadius: "18px",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 8,
            borderRadius: 16,
            border: "1.5px solid rgba(255,255,255,0.55)"
          }}
        />
        <span
          style={{
            color: "#ffffff",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.08em"
          }}
        >
          Li
        </span>
      </div>
    ),
    size
  );
}
