'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

import { getImageList } from '@/network';
import Loading from '@/components/Loading';

let page = 2;
const delay = 500;

export default function LodaMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (inView) {
      const timeoutId = setTimeout(async () => {
        const PhotosRSC = await getImageList(page);
        setData((prev) => [...prev, ...PhotosRSC]);
        page++;
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView]);

  return (
    <>
      <section className='grid grid-cols-3 gap-16 justify-center items-center p-16 sm:justify-items-center'>
        {data}
      </section>
      <section className='flex justify-center items-center w-full'>
        <div ref={ref} className='h-9'>
          <Loading />
        </div>
      </section>
    </>
  );
}
