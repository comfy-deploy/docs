import { source } from '@/lib/source';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://docs.comfydeploy.com';
  const entries = [
    { url: baseUrl },
    { url: `${baseUrl}/docs` },
    ...source.generateParams().map((params) => {
      const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
      return { url: `${baseUrl}/docs/${slug}` };
    }),
  ];

  const urls = entries
    .map(({ url }) => {
      const lastmod = new Date().toISOString();
      return `<url><loc>${url}</loc><lastmod>${lastmod}</lastmod></url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
