import { MetadataRoute } from "next";

/**
 * Generates the Web App Manifest for the Cedars Medicare website.
 *
 * @returns A {@link MetadataRoute.Manifest} object containing metadata and
 *          icons for the website.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cedars Medicare",
    short_name: "Cedars Medicare",
    description:
      "Cedars Medicare offers innovative healthcare solutions, including telemedicine, TPA consultancy, and comprehensive medical services. Committed to quality and patient-centric care, we ensure efficient claims processing and membership management tailored to individual and organizational needs. Trusted by top partners in the healthcare industry.",
    display: "standalone",
    background_color: "#000408",
    theme_color: "#000408",
    orientation: "portrait",
    scope: "/",
    start_url: "/",
    id: "/",
    icons: [
      {
        src: "/assets/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/assets/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/assets/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/assets/icons/maskable-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
