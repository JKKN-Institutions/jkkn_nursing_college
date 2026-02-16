import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSc Nursing Colleges in Tamilnadu | Admission 2026",
  description: "Looking for MSc Nursing colleges in Tamilnadu? JKKN offers MSc Nursing distance education in Tamilnadu with INC approval & specialised clinical training.",
  keywords: "msc nursing colleges in tamilnadu, msc nursing distance education in tamilnadu, best msc nursing colleges in tamilnadu, msc nursing private colleges in tamilnadu",
  openGraph: {
    title: "MSc Nursing Colleges in Tamilnadu | Admission 2026",
    description: "Looking for MSc Nursing colleges in Tamilnadu? JKKN offers MSc Nursing distance education in Tamilnadu with INC approval & specialised clinical training.",
    type: "website",
    url: "https://nursing.jkkn.ac.in/msc-nursing",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png",
        width: 1200,
        height: 630,
        alt: "MSc Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSc Nursing Colleges in Tamilnadu | Admission 2026",
    description: "Looking for MSc Nursing colleges in Tamilnadu? JKKN offers MSc Nursing distance education in Tamilnadu with INC approval & specialised clinical training.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.jkkn.ac.in/msc-nursing",
  },
};

export default function MScNursingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
