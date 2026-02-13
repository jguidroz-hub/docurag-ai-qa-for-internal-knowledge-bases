import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://docurag-ai-qa-for-internal-knowledge-bases.vercel.app/sitemap.xml',
  };
}
