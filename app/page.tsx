import { getImageList } from '@/network';
import LodaMore from './LodaMore';

export default async function Page() {
  const PhotosRSC = await getImageList(1);

  return (
    <>
      <section className='cards-container'>{PhotosRSC}</section>
      <LodaMore />
    </>
  );
}
