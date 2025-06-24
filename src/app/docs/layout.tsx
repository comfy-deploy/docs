import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import type { PageTree } from "fumadocs-core/server";
import { FileText, Link } from "fumadocs-ui/internal/icons";

function filterTree(tree: PageTree.Root, isApiPage: boolean): PageTree.Root {
  return {
    ...tree,
    children: tree.children.filter((child) => {
      // Check if this is an API page node by looking at the URL
      if (child.type === 'page' && child.url) {
        const isApiNode = child.url.includes('/api/');
        return isApiPage ? isApiNode : !isApiNode;
      }
      
      if (child.type === 'folder') {
        // Filter folder children recursively
        const filteredFolder = {
          ...child,
          children: child.children.filter((subChild) => {
            if (subChild.type === 'page' && subChild.url) {
              const isApiNode = subChild.url.includes('/api/');
              return isApiPage ? isApiNode : !isApiNode;
            }
            return !isApiPage; // Include folders in non-API pages
          })
        };
        
        // Only include folders that have children after filtering
        return filteredFolder.children.length > 0;
      }
      
      return !isApiPage;
    }),
  };
}

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug?: string[] };
}) {
  const slug = params.slug?.[0];
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
