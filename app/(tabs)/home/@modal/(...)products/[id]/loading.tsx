import CloseButton from '@/components/CloseButton';
import { PhotoIcon } from '@heroicons/react/24/solid';

export default function Loading() {
  return (
    <div className='absolute w-full h-full z-50 flex justify-center items-center bg-black/60 left-0 top-0'>
      <CloseButton />
      <div className='w-full max-w-screen-sm bg-neutral-900 rounded-md overflow-hidden'>
        <div className='animate-pulse p-5 flex flex-col'>
          <div className='aspect-square border-neutral-700 text-neutral-700 border-4 border-dashed rounded-md flex justify-center items-center'>
            <PhotoIcon className='h-28' />
          </div>

          <div className='flex flex-col gap-y-4'>
            <div className='py-3 flex items-center gap-3 border-b border-neutral-700'>
              <div className='flex gap-2 items-center'>
                <div className='size-10 rounded-full bg-neutral-700' />
                <div className='h-5 w-40 bg-neutral-700 rounded-md' />
              </div>
            </div>

            <div className='h-5 w-80 bg-neutral-700 rounded-md' />
          </div>
        </div>

        <div className='w-full p-5 bg-neutral-800 flex justify-between items-center'>
          <span className='font-semibold text-xl'>
            <div className='h-5 w-20 bg-neutral-700 rounded-md' />
          </span>

          <div className='flex gap-x-5'>
            <div className='bg-neutral-500 px-5 py-2.5 rounded-md text-white font-semibold'>
              <div className='h-5 w-16 bg-neutral-700 rounded-md' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
