import defaultMdxComponents from 'fumadocs-ui/mdx';
import { OpenAPIPage } from '@/components/api-page';
import YouTube from '@/components/YouTube';
import { openapi } from '@/lib/source';
import type { MDXComponents } from 'mdx/types';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    APIPage: async (props) => (
      <OpenAPIPage
        {...props}
        payload={{ bundled: (await openapi.getSchema(props.document)).bundled }}
      />
    ),
    YouTube,
    ...components,
  };
}
