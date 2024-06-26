import React from 'react';
import Image from 'next/image';
import type { PhotoType } from '@/network';

export default function Photo({ download_url }: PhotoType) {
  return (
    <div className='flex justify-center items-center h-[200px] max-w-[200px] rounded-lg text-black'>
      <Image src={download_url} width={200} height={200} alt={download_url} />
    </div>
  );
}
