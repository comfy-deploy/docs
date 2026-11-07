import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createOpenAPI } from 'fumadocs-openapi/server';

// Create OpenAPI instance for API playground
export const openapi = createOpenAPI({
  // must match the `document` prop of <APIPage /> in content/docs/api
  input: ['comfydeploy-openapi.yaml'],
});

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  // adds a badge to each page item in page tree
  plugins: [openapi.loaderPlugin()],
});
