import type { Metadata } from 'next';
import Photo from '@/components/Photo';
import { getImageById } from '@/network';

export const metadata: Metadata = {
  title: 'photo page title',
  description: 'photo page description',
  keywords: ['Parallel Routes', 'Next.js', 'Modal', 'URL', 'React'],
};

export default async function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = await getImageById(id);

  return <Photo {...photo} />;
}
