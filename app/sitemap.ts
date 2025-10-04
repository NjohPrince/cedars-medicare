import { MetadataRoute } from "next";

/**
 * Generates a sitemap for the Cedars Medicare website.
 *
 * @returns A list of URLs and their corresponding metadata.
 */
export default async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  const urls: MetadataRoute.Sitemap = [
    {
      url: "https://cedarsmedicare.vercel.app/",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  return urls.map((url) => ({
    ...url,
    lastModified: currentDate,
  }));
}
