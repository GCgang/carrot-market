'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function CloseButton() {
  const router = useRouter();
  const handleCloseClick = () => {
    router.back();
  };
  return (
    <button
      onClick={handleCloseClick}
      className='absolute right-5 top-5 text-neutral-200'
    >
      <XMarkIcon className='size-10' />
    </button>
  );
}
