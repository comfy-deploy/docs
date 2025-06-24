import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import type { PageTree } from "fumadocs-core/server";
import { FileText, Link } from "fumadocs-ui/internal/icons";

function filterTree(tree: PageTree.Root, api: boolean): PageTree.Root {
  return {
    ...tree,
    children: tree.children.filter((child) => {
      const isApiFolder =
        child.type === "folder" && child.name === "API Reference";
      return api ? isApiFolder : !isApiFolder;
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
  const isApi = slug === "api-docs";

  const tree = filterTree(source.pageTree, isApi);
  const tabs = [
    {
      url: "/docs",
      title: "Dashboard",
      icon: <FileText className="size-4" />,
      description: "Guides",
      props: { className: "fd-tab-item" },
    },
    {
      url: "/api",
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
