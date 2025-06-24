import { redirect } from 'next/navigation';

export default async function APIPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join('/') || '';
  // Redirect /api/* to /docs/api/*
  redirect(`/docs/api/${slug}`);
} 