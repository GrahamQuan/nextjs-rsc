'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import useLockScroll from '@/hooks/useLockScroll';

export function Modal({ children }: { children: React.ReactNode }) {
  useLockScroll();

  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
      <dialog
        ref={dialogRef}
        className='w-4/5 max-w-[500px] h-auto max-h-[500px] border-none rounded-lg bg-white p-20 flex justify-center items-center text-4xl font-semibold'
        onClose={onDismiss}
      >
        {children}
        <button
          type='button'
          onClick={onDismiss}
          className='absolute top-10 right-10 w-10 h-10 after:content-["x"] after:text-2xl after:pb-1 after:text-black  bg-transparent border-none rounded-full cursor-pointer flex items-center justify-center font-semibold hover:bg-gray-200'
        />
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}
