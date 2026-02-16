import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best BSc Nursing Colleges in Tamilnadu | Admission 2026",
  description: "Explore the best BSc Nursing colleges in Tamilnadu. JKKN offers top BSc Nursing courses in Tamilnadu with INC approval, hospital training & scholarships.",
  keywords: "best bsc nursing colleges in tamilnadu, bsc nursing colleges in tamilnadu, bsc nursing best colleges in tamilnadu, bsc nursing courses in tamilnadu, top bsc nursing colleges in tamilnadu, top 10 bsc nursing colleges in tamilnadu, bsc nursing male colleges in tamilnadu, bsc male nursing colleges in tamilnadu, bsc nursing course colleges in tamilnadu, bsc nursing private colleges in tamilnadu, bsc nursing colleges in erode",
  openGraph: {
    title: "Best BSc Nursing Colleges in Tamilnadu | Admission 2026",
    description: "Explore the best BSc Nursing colleges in Tamilnadu. JKKN offers top BSc Nursing courses in Tamilnadu with INC approval, hospital training & scholarships.",
    type: "website",
    url: "https://nursing.jkkn.ac.in/bsc-nursing",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/B.Sc-Nursing-Hero-Banner_image.png",
        width: 1200,
        height: 630,
        alt: "BSc Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best BSc Nursing Colleges in Tamilnadu | Admission 2026",
    description: "Explore the best BSc Nursing colleges in Tamilnadu. JKKN offers top BSc Nursing courses in Tamilnadu with INC approval, hospital training & scholarships.",
    images: ["/images/B.Sc-Nursing-Hero-Banner_image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.jkkn.ac.in/bsc-nursing",
  },
};

export default function BScNursingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
