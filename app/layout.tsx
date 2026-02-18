import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sresakthimayeil Institute of Nursing — JKKN, Komarapalayam",
  description: "Sresakthimayeil Institute of Nursing and Research, Komarapalayam. INC-approved B.Sc, M.Sc & Post Basic B.Sc Nursing courses. NAAC accredited, TNMGRMU affiliated.",
  keywords: "best nursing colleges in tamilnadu, top nursing colleges in tamilnadu, nursing colleges in tamilnadu, top 10 nursing colleges in tamilnadu, list of nursing colleges in tamilnadu, private nursing colleges in tamilnadu, nursing college, JKKN, nursing education, Tamil Nadu",
  openGraph: {
    title: "Sresakthimayeil Institute of Nursing — JKKN, Komarapalayam",
    description: "Sresakthimayeil Institute of Nursing and Research, Komarapalayam. INC-approved B.Sc, M.Sc & Post Basic B.Sc Nursing courses. NAAC accredited.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/",
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
    title: "Sresakthimayeil Institute of Nursing — JKKN, Komarapalayam",
    description: "Sresakthimayeil Institute of Nursing and Research, Komarapalayam. INC-approved B.Sc, M.Sc & Post Basic B.Sc Nursing courses. NAAC accredited.",
    images: ["/images/nursing_logo.png"],
  },
  icons: {
    icon: "/images/nursing_logo.png",
    shortcut: "/images/nursing_logo.png",
    apple: "/images/nursing_logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/",
  },
  verification: {
    google: "60d41b66b125ffef",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased bg-[#FBFBEE]`} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
