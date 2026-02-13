import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://docurag-ai-qa-for-internal-knowledge-bases.vercel.app', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://docurag-ai-qa-for-internal-knowledge-bases.vercel.app/pricing', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
