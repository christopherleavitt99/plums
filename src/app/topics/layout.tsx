import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Topics list",
  description: "Sample layout.tsx File"
}

export default function TopicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return children;
}