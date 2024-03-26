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
      <section className='cards-container'>{data}</section>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div ref={ref} style={{ height: '36px' }}>
          <Loading />
        </div>
      </section>
    </>
  );
}
