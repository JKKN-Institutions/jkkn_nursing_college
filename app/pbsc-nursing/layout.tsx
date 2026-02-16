import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post Basic B.Sc Nursing — JKKN Nursing College",
  description: "Post Basic B.Sc Nursing course for registered nurses at JKKN, Komarapalayam. 2-year programme, INC approved, career advancement opportunities.",
  keywords: "post bsc nursing colleges in tamilnadu, post bsc nursing correspondence course in tamilnadu, list of post bsc nursing colleges in tamilnadu, post basic bsc nursing distance education in tamilnadu, post bsc nursing distance education in tamilnadu, post bsc nursing in tamilnadu",
  openGraph: {
    title: "Post Basic B.Sc Nursing — JKKN Nursing College",
    description: "Post Basic B.Sc Nursing course for registered nurses at JKKN, Komarapalayam. 2-year programme, INC approved, career advancement opportunities.",
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
    title: "Post Basic B.Sc Nursing — JKKN Nursing College",
    description: "Post Basic B.Sc Nursing course for registered nurses at JKKN, Komarapalayam. 2-year programme, INC approved, career advancement opportunities.",
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
