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

  keywords: [
    "Cedars Medicare",
    "Healthcare Solutions",
    "Telemedicine",
    "TPA Consultancy",
    "Medical Services",
    "Claims Processing",
    "Membership Management",
    "Patient-Centric Care",
    "Healthcare Industry",
    "Beirut, Lebanon",
    "Health Insurance",
    "Medical Network",
    "Corporate Health Plans",
    "Individual Health Plans",
    "Family Health Plans",
    "Wellness Programs",
    "Health Coverage",
    "Medical Assistance",
    "Healthcare Providers",
    "Insurance Claims",
    "Healthcare Partnerships",
    "Quality Care",
    "Innovative Healthcare",
    "Health Solutions",
    "Medical Support",
    "Healthcare Management",
    "Patient Services",
    "Health Benefits",
    "Medical Claims",
    "Healthcare Expertise",
    "Trusted Healthcare",
  ],
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
