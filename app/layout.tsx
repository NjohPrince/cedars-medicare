import type { Metadata } from "next";

import "./globals.css";

import { inter, urbanist } from "@/lib/utils/font.util";

export const metadata: Metadata = {
  metadataBase: new URL("https://cedarsmedicare.vercel.app/"),
  title: "Cedars Medicare | Leading Healthcare Solutions in Beirut, Lebanon",
  description:
    "Cedars Medicare offers innovative healthcare solutions, including telemedicine, TPA consultancy, and comprehensive medical services. Committed to quality and patient-centric care, we ensure efficient claims processing and membership management tailored to individual and organizational needs. Trusted by top partners in the healthcare industry.",
  icons: {
    icon: "/assets/icons/favicon.ico",
    apple: "/assets/icons/apple-touch-icon.png",
  },

  openGraph: {
    title: "Cedars Medicare - Leading Healthcare Solutions in Beirut, Lebanon",
    description:
      "Cedars Medicare offers innovative healthcare solutions, including telemedicine, TPA consultancy, and comprehensive medical services. Committed to quality and patient-centric care, we ensure efficient claims processing and membership management tailored to individual and organizational needs. Trusted by top partners in the healthcare industry.",
    url: "https://cedarsmedicare.vercel.app/",
    siteName: "Cedars Medicare",
    images: [
      {
        url: "/assets/meta/meta.png",
        width: 1200,
        height: 630,
        alt: "Cedars Medicare - Leading Healthcare Solutions in Beirut, Lebanon",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cedars Medicare - Leading Healthcare Solutions in Beirut, Lebanon",
    description:
      "Cedars Medicare offers innovative healthcare solutions, including telemedicine, TPA consultancy, and comprehensive medical services. Committed to quality and patient-centric care, we ensure efficient claims processing and membership management tailored to individual and organizational needs. Trusted by top partners in the healthcare industry.",
    images: ["/assets/meta/meta.png"],
  },

  keywords: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable}`}>
        {children}
      </body>
    </html>
  );
}
