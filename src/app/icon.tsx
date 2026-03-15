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
          background: "linear-gradient(135deg, #0F2D52, #1C4F86)",
          borderRadius: "16px",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 10,
            height: 48,
            background: "#C8A34F",
            transform: "rotate(28deg)",
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
          B
        </span>
      </div>
    ),
    size
  );
}
