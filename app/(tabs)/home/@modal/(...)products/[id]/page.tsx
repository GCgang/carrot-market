import { UserIcon } from '@heroicons/react/24/solid';
import { notFound } from 'next/navigation';
import { getProduct } from '@/app/products/[id]/page';
import CloseButton from '@/components/CloseButton';
import Image from 'next/image';
import { formatToWon } from '@/lib/utils';
import Link from 'next/link';

export default async function Modal({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }

  const product = await getProduct(id);
  if (!product) {
    return notFound();
  }
  return (
    <div className='absolute w-full h-full z-50 flex items-center justify-center bg-neutral-800 rounded-lg bg-opacity-60 left-0 top-0'>
      <CloseButton />
      <div className='w-full max-w-screen-sm flex flex-col items-center'>
        <div className='w-11/12 bg-neutral-900 rounded-md overflow-hidden'>
          <div className='p-5'>
            <div className='relative aspect-square'>
              <Image
                fill
                src={`${product.photo}/public`}
                alt={product.title}
                className='object-cover'
              />
            </div>

            <div className='flex flex-col gap-y-4'>
              <div className='py-3 flex items-center gap-3 border-b border-neutral-700'>
                <div className='size-10 rounded-full overflow-hidden'>
                  {product.user.avatar !== null ? (
                    <Image
                      src={product.user.avatar}
                      alt={product.user.username}
                      width={40}
                      height={40}
                    />
                  ) : (
                    <UserIcon />
                  )}
                </div>

                <div>
                  <h3 className='text-sm'>{product.user.username}</h3>
                </div>
              </div>

              <div className='flex flex-col gap-y-2'>
                <h1 className='text-xl font-semibold'>{product.title}</h1>
                <p className='text-sm'>{product.description}</p>
              </div>
            </div>
          </div>

          <div className='w-full p-5 bg-neutral-800 flex justify-between items-center'>
            <span className='font-semibold text-xl'>
              {formatToWon(product.price)}원
            </span>

            <div className='flex gap-x-5'>
              <Link
                className='bg-orange-500 px-5 py-2.5 rounded-md text-white font-semibold'
                href={``}
              >
                채팅하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
