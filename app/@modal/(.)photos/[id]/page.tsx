import type { Metadata } from 'next';
import Photo from '@/components/Photo';
import { Modal } from './modal';
import { getImageById } from '@/network';

// parallel-routes not support meta
export const metadata: Metadata = {
  title: 'modal title',
  description: 'modal description',
};

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = await getImageById(id);

  return (
    <Modal>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto',
          gap: '5px',
        }}
      >
        <Photo {...photo} />
        <Photo {...photo} />
        <Photo {...photo} />
        <Photo {...photo} />
        <Photo {...photo} />
        <Photo {...photo} />
        <Photo {...photo} />
      </div>
    </Modal>
  );
}
