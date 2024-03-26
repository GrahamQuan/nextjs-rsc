'use server';

import Link from 'next/link';
import Image from 'next/image';

export type PhotoType = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

const LIMIT = 18;

export async function getImageList(page: number = 1) {
  const res = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${LIMIT}`
  );
  const photos: PhotoType[] = await res.json();

  return photos.map((photo) => (
    <Link
      className='card'
      key={photo.id}
      href={`/photos/${photo.id}`}
      passHref
      scroll={false}
    >
      <Image
        src={photo.download_url}
        width={200}
        height={200}
        alt={photo.download_url}
      />
    </Link>
  ));
}

export async function getImageById(id: string): Promise<PhotoType> {
  const res = await fetch(`https://picsum.photos/id/${id}/info`);
  return await res.json();
}
