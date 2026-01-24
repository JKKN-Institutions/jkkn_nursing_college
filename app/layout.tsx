import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JKKN College of Nursing & Research - Sresakthimayeil Institute",
  description: "JKKN College of Nursing & Research offering B.Sc.(Nursing), P.B.Sc.(Nursing), and M.Sc.(Nursing) programs with excellent facilities and experienced faculty.",
  keywords: "nursing college, JKKN, nursing education, BSc Nursing, MSc Nursing, Tamil Nadu, medical education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[#FBFBEE]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
