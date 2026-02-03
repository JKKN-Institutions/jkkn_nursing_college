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
  title: "JKKN College of Nursing & Research - Sresakthimayeil Institute",
  description: "JKKN College of Nursing & Research offering B.Sc.(Nursing), P.B.Sc.(Nursing), and M.Sc.(Nursing) programs with excellent facilities and experienced faculty.",
  keywords: "nursing college, JKKN, nursing education, BSc Nursing, MSc Nursing, Tamil Nadu, medical education",
  icons: {
    icon: "/images/nursing_logo.png",
    shortcut: "/images/nursing_logo.png",
    apple: "/images/nursing_logo.png",
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
