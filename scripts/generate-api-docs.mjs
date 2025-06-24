import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  // the OpenAPI schema file we just created
  input: ['./comfydeploy-openapi.yaml'],
  // output to content/api directory
  output: './content/api',
  // include descriptions in generated files
  includeDescription: true,
  // use the APIPage component
  frontmatter: (title, description) => ({
    title: title || 'API Reference',
    description: description || 'ComfyDeploy API documentation',
  })
}); 