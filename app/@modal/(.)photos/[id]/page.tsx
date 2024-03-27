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
  const list = Array.from({ length: 7 }, (v, i) => i);

  return (
    <Modal>
      <div className='flex flex-col gap-[5px] max-h-[500px] w-fit'>
        {list.map((item, idx) => (
          <div className='relative'>
            <Photo {...photo} key={idx} />
            <div className='h-8 w-8 text-lg flex justify-center items-center absolute top-10 left-2 bg-slate-200 rounded-full'>
              {idx + 1}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
