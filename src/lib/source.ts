import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export const dashboardSource = loader({
  baseUrl: '/docs/dashboard',
  source: docs.toFumadocsSource(),
});

export const apiSource = loader({
  baseUrl: '/docs/api', 
  source: docs.toFumadocsSource(),
});
