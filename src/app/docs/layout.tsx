import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import type { PageTree } from 'fumadocs-core/server';
import { FileText, Link } from 'fumadocs-ui/icons';

function filterTree(tree: PageTree.Root, api: boolean): PageTree.Root {
  return {
    ...tree,
    children: tree.children.filter((child) => {
      const isApiFolder = child.type === 'folder' && child.name === 'API Reference';
      return api ? isApiFolder : !isApiFolder;
    }),
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isApi = pathname.startsWith('/docs/api');

  const tree = filterTree(source.pageTree, isApi);
  const tabs = [
    {
      url: '/docs/introduction',
      title: 'Dashboard',
      icon: <FileText className="size-4" />,
      description: 'Guides',
      props: { className: 'fd-tab-item' },
    },
    {
      url: '/docs/api-docs/run/deployment-queue',
      title: 'API',
      icon: <Link className="size-4" />,
      description: 'API Reference',
      props: { className: 'fd-tab-item' },
    },
  ];

  return (
    <DocsLayout tree={tree} {...baseOptions} sidebar={{ tabs }}>
      {children}
    </DocsLayout>
  );
}
