import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import type { PageTree } from "fumadocs-core/server";
import { FileText, Link } from "fumadocs-ui/internal/icons";

function filterTree(tree: PageTree.Root, isApiPage: boolean): PageTree.Root {
  if (isApiPage) {
    const apiRoot = tree.children.find((child) => 'url' in child && child.url?.startsWith('/docs/api'));
    if (apiRoot && apiRoot.type === 'folder') {
      return { ...apiRoot, children: apiRoot.children ?? [] } as PageTree.Root;
    }
  }

  return {
    ...tree,
    children: tree.children.filter((child) => {
      if ('url' in child && child.url?.startsWith('/docs/api')) return false;

      if (child.type === 'folder') {
        const filtered = {
          ...child,
          children: child.children.filter((sub) => !('url' in sub) || !sub.url?.startsWith('/docs/api')),
        };
        return filtered.children.length > 0;
      }

      return true;
    }),
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.[0];
  const isApiPage = slug === "api";

  const tree = filterTree(source.pageTree, isApiPage);
  const tabs = [
    {
      url: "/docs",
      title: "Dashboard",
      icon: <FileText className="size-4" />,
      description: "Guides",
      props: { className: "fd-tab-item" },
    },
    {
      url: "/docs/api",
      title: "API",
      icon: <Link className="size-4" />,
      description: "API Reference",
      props: { className: "fd-tab-item" },
    },
  ];

  return (
    <DocsLayout tree={tree} {...baseOptions} sidebar={{ tabs }} >
      {children}
    </DocsLayout>
  );
}
