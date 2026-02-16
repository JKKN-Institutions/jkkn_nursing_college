import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Nursing Course — Specialisations | JKKN Nursing",
  description: "M.Sc Nursing at JKKN with 5 specializations: Child Health, Community Health, Medical-Surgical, Mental Health, OBG. 2-year course, INC approved.",
  keywords: "msc nursing colleges in tamilnadu, msc nursing distance education in tamilnadu, best msc nursing colleges in tamilnadu, msc nursing private colleges in tamilnadu",
  openGraph: {
    title: "M.Sc Nursing Course — Specialisations | JKKN Nursing",
    description: "M.Sc Nursing at JKKN with 5 specializations: Child Health, Community Health, Medical-Surgical, Mental Health, OBG. 2-year course, INC approved.",
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
    title: "M.Sc Nursing Course — Specialisations | JKKN Nursing",
    description: "M.Sc Nursing at JKKN with 5 specializations: Child Health, Community Health, Medical-Surgical, Mental Health, OBG. 2-year course, INC approved.",
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
