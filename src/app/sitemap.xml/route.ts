import { source } from '@/lib/source';
import { MetadataRoute } from 'next';

export async function GET(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://docs.comfydeploy.com';
  const pages = source.generateParams().map((params) => {
    const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
    return {
      url: `${baseUrl}/docs/${slug}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
    },
    ...pages,
  ];
}
