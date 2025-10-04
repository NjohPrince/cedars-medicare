import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cedars Medicare | Leading Healthcare Solutions in Beirut, Lebanon",
  description:
    "Cedars Medicare offers innovative healthcare solutions, including telemedicine, TPA consultancy, and comprehensive medical services. Committed to quality and patient-centric care, we ensure efficient claims processing and membership management tailored to individual and organizational needs. Trusted by top partners in the healthcare industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
