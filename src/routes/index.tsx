import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TantriTrace - Handloom Authenticity System" },
      {
        name: "description",
        content:
          "A working handloom authenticity web app with product registration, SHA-256 verification, tamper-evident ledger, weaver profiles, scan analytics, and exportable records.",
      },
      { property: "og:title", content: "TantriTrace - Handloom Authenticity System" },
      {
        property: "og:description",
        content:
          "Register handloom products, generate authenticity hashes, verify certificates, monitor scans, and manage weaver-owned product stories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TantriTraceApp,
});

function TantriTraceApp() {
  return (
    <iframe
      src="/tantritrace-ultimate/index.html"
      title="TantriTrace Handloom Authenticity System"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
        background: "#eef2f6",
      }}
    />
  );
}
