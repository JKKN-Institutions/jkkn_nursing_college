import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post BSc Nursing Colleges in Tamilnadu | Admission 2026",
  description: "JKKN features in the list of Post BSc Nursing colleges in Tamilnadu. INC-approved Post BSc Nursing in Tamilnadu with clinical training & placement support.",
  keywords: "post bsc nursing colleges in tamilnadu, post bsc nursing correspondence course in tamilnadu, list of post bsc nursing colleges in tamilnadu, post basic bsc nursing distance education in tamilnadu, post bsc nursing distance education in tamilnadu, post bsc nursing in tamilnadu",
  openGraph: {
    title: "Post BSc Nursing Colleges in Tamilnadu | Admission 2026",
    description: "JKKN features in the list of Post BSc Nursing colleges in Tamilnadu. INC-approved Post BSc Nursing in Tamilnadu with clinical training & placement support.",
    type: "website",
    url: "https://nursing.jkkn.ac.in/pbsc-nursing",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/P.B.B.Sc-Nursing-Hero-Banner-Image.png",
        width: 1200,
        height: 630,
        alt: "Post BSc Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Post BSc Nursing Colleges in Tamilnadu | Admission 2026",
    description: "JKKN features in the list of Post BSc Nursing colleges in Tamilnadu. INC-approved Post BSc Nursing in Tamilnadu with clinical training & placement support.",
    images: ["/images/P.B.B.Sc-Nursing-Hero-Banner-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.jkkn.ac.in/pbsc-nursing",
  },
};

export default function PBScNursingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
