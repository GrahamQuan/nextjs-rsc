import { getImageList } from '@/network';
import LodaMore from './LodaMore';

export default async function Page() {
  const PhotosRSC = await getImageList(1);

  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-1 justify-center items-center p-16 sm:justify-items-center'>
        {PhotosRSC}
      </section>
      <LodaMore />
    </>
  );
}
