"use client";

import Link from "next/link";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const pageStyle = {
  minHeight: "100vh",
  margin: 0,
  display: "grid",
  placeItems: "center",
  padding: "24px",
  background:
    "radial-gradient(circle at top, rgba(14, 165, 233, 0.14), transparent 40%), linear-gradient(180deg, #020617 0%, #0f172a 100%)",
  color: "#e2e8f0",
  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
} as const;

const cardStyle = {
  width: "100%",
  maxWidth: "640px",
  borderRadius: "28px",
  border: "1px solid rgba(148, 163, 184, 0.2)",
  background: "rgba(15, 23, 42, 0.78)",
  padding: "32px",
  boxShadow: "0 24px 80px -32px rgba(14, 165, 233, 0.35)",
  backdropFilter: "blur(18px)",
} as const;

const actionRowStyle = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "12px",
  marginTop: "24px",
} as const;

const buttonStyle = {
  borderRadius: "999px",
  border: "1px solid rgba(125, 211, 252, 0.35)",
  background: "linear-gradient(135deg, #0ea5e9, #10b981)",
  color: "#f8fafc",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 600,
  padding: "12px 18px",
  textDecoration: "none",
} as const;

const secondaryActionStyle = {
  ...buttonStyle,
  background: "transparent",
  color: "#bae6fd",
} as const;

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body style={pageStyle}>
        <main style={cardStyle}>
          <p
            style={{
              margin: 0,
              color: "#7dd3fc",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            AEaaS
          </p>
          <h1
            style={{
              margin: "16px 0 12px",
              color: "#f8fafc",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
            }}
          >
            Something went wrong.
          </h1>
          <p
            style={{
              margin: 0,
              color: "#cbd5e1",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            The page hit an unexpected problem. You can try the request again or
            head back to the homepage.
          </p>

          <div style={actionRowStyle}>
            <button style={buttonStyle} type="button" onClick={() => reset()}>
              Try again
            </button>
            <Link href="/" style={secondaryActionStyle}>
              Back home
            </Link>
          </div>

          {error.digest ? (
            <p
              style={{
                marginTop: "18px",
                color: "#94a3b8",
                fontSize: "13px",
              }}
            >
              Reference: {error.digest}
            </p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
