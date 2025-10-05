import type { Metadata } from "next";

import "./globals.css";

import { inter, urbanist } from "@/lib/utils/font.util";

export const metadata: Metadata = {
  metadataBase: new URL("https://cedarsmedicare-six.vercel.app/"),
  title: {
    default:
      "Cedars Medicare | Leading Healthcare Solutions in Beirut, Lebanon",
    template: "%s | Cedars Medicare",
  },
  description:
    "Cedars Medicare offers innovative healthcare solutions, including telemedicine, TPA consultancy, and comprehensive medical services. Committed to quality and patient-centric care, we ensure efficient claims processing and membership management tailored to individual and organizational needs. Trusted by top partners in the healthcare industry.",
  authors: [{ name: "Cedars Medicare" }],
  creator: "Cedars Medicare",
  publisher: "Cedars Medicare",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/assets/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/assets/icons/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/assets/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/assets/icons/favicon.ico",
  },

  openGraph: {
    title: "Cedars Medicare - Leading Healthcare Solutions in Beirut, Lebanon",
    description:
      "Cedars Medicare offers innovative healthcare solutions, including telemedicine, TPA consultancy, and comprehensive medical services. Committed to quality and patient-centric care, we ensure efficient claims processing and membership management tailored to individual and organizational needs. Trusted by top partners in the healthcare industry.",
    url: "https://cedarsmedicare-six.vercel.app/",
    siteName: "Cedars Medicare",
    images: [
      {
        url: "/assets/images/meta.png",
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
    images: ["/assets/images/meta.png"],
    creator: "@cedarsmedicare",
    site: "@cedarsmedicare",
  },

  verification: {
    // google: "google-verification-code",
  },

  alternates: {
    canonical: "https://cedarsmedicare-six.vercel.app/",
    languages: {
      "en-US": "https://cedarsmedicare-six.vercel.app/",
      "ar-LB": "https://cedarsmedicare-six.vercel.app/ar",
    },
  },

  category: "healthcare",

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

/**
 * The root layout component for the Cedars Medicare website.
 * It renders the HTML document and sets the font family to Inter and Urbanist.
 * @param {React.ReactNode} children - The children elements to render inside the HTML document.
 * @returns {JSX.Element} The root layout component.
 */
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
