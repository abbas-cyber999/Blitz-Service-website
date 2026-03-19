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
          background: "linear-gradient(135deg, #0f2d52, #1c4f86)",
          borderRadius: "16px",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 48,
            height: 48,
            border: "3px solid #c8a34f",
            borderRadius: 999
          }}
        />
        <span
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: 700
          }}
        >
          B
        </span>
      </div>
    ),
    size
  );
}
