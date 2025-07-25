import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  
  // Handle the empty slug case - redirect to introduction
  if (!params.slug || params.slug.length === 0) {
    redirect('/docs/introduction');
  }
  
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  const slug = params.slug?.join("/") ?? "";
  const url = `https://docs.comfydeploy.com/docs/${slug}`;

  return {
    title: page.data.title,
    description: page.data.description,
    keywords: [
      "ComfyDeploy",
      page.data.title,
      "ComfyUI",
      "ComfyUI REST API",
      "ComfyUI Python API",
      "ComfyUI API tutorial",
      "Deploy ComfyUI API",
      "ComfyUI API documentation",
    ],
    authors: [{ name: "ComfyDeploy" }],
    publisher: "ComfyDeploy",
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url,
      images: [{ url: "/images/cover.png" }],
    },
  };
}
