import { redirect } from 'next/navigation';

export default function APIPage({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.join('/') || '';
  // Redirect /api/* to /docs/api/*
  redirect(`/docs/api/${slug}`);
} 