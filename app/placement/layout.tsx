import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placements & Career — JKKN Nursing College",
  description: "JKKN Nursing College placement record with top hospitals across India and abroad. Career support, training, and excellent placement opportunities.",
  openGraph: {
    title: "Placements & Career — JKKN Nursing College",
    description: "JKKN Nursing College placement record with top hospitals across India and abroad. Career support, training, and excellent placement opportunities.",
    type: "website",
    url: "https://nursing.jkkn.ac.in/placement",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Placements & Career — JKKN Nursing College",
    description: "JKKN Nursing College placement record with top hospitals across India and abroad. Career support, training, and excellent placement opportunities.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.jkkn.ac.in/placement",
  },
};

export default function PlacementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
