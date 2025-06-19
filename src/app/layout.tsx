import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | ComfyDeploy Documentation',
    default: 'ComfyDeploy Documentation',
  },
  description: 'Comprehensive guides and API references for ComfyDeploy',
  metadataBase: new URL('https://docs.comfydeploy.com'),
  keywords: [
    'ComfyDeploy',
    'ComfyUI',
    'documentation',
    'AI workflows',
  ],
  authors: [{ name: 'ComfyDeploy', url: 'https://comfydeploy.com' }],
  publisher: 'ComfyDeploy',
  openGraph: {
    title: 'ComfyDeploy Documentation',
    description: 'Comprehensive guides and API references for ComfyDeploy',
    url: 'https://docs.comfydeploy.com',
    siteName: 'ComfyDeploy Docs',
    images: [
      {
        url: '/images/cover.png',
        width: 1200,
        height: 630,
        alt: 'ComfyDeploy Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
