import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createOpenAPI, attachFile } from 'fumadocs-openapi/server';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    // adds a badge to each page item in page tree
    attachFile,
  },
});

// Create OpenAPI instance for API playground
export const openapi = createOpenAPI();
