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
  title: "Best Nursing Colleges in Tamilnadu | JKKN Nursing College",
  description: "Looking for the best nursing colleges in Tamilnadu? JKKN Nursing ranks among top nursing colleges in Tamilnadu. B.Sc, M.Sc & P.B.B.Sc courses. Apply now!",
  keywords: "best nursing colleges in tamilnadu, top nursing colleges in tamilnadu, nursing colleges in tamilnadu, top 10 nursing colleges in tamilnadu, list of nursing colleges in tamilnadu, private nursing colleges in tamilnadu, nursing college, JKKN, nursing education, Tamil Nadu",
  openGraph: {
    title: "Best Nursing Colleges in Tamilnadu | JKKN Nursing College",
    description: "Looking for the best nursing colleges in Tamilnadu? JKKN Nursing ranks among top nursing colleges in Tamilnadu. B.Sc, M.Sc & P.B.B.Sc courses. Apply now!",
    type: "website",
    url: "https://nursing.jkkn.ac.in",
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
    title: "Best Nursing Colleges in Tamilnadu | JKKN Nursing College",
    description: "Looking for the best nursing colleges in Tamilnadu? JKKN Nursing ranks among top nursing colleges in Tamilnadu. B.Sc, M.Sc & P.B.B.Sc courses. Apply now!",
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
    canonical: "https://nursing.jkkn.ac.in",
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
