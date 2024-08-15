'use client';

import Link from 'next/link';
import {
  HomeIcon as SolidHomeIcon,
  NewspaperIcon as SolidNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as SolidChatIcon,
  VideoCameraIcon as SolidVideoCameraIcon,
  UserIcon as SolidUserIcon,
} from '@heroicons/react/24/solid';
import {
  HomeIcon as OutlineHomeIcon,
  NewspaperIcon as OutlineNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as OutlineChatIcon,
  VideoCameraIcon as OutlineVideoCameraIcon,
  UserIcon as OutlineUserIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export default function TabBar() {
  const pathName = usePathname();
  return (
    <div className='fixed bottom-0 w-full mx-auto max-w-screen-md grid grid-cols-5 border-neutral-600 border-t px-5 py-3 *:text-white'>
      <Link href='/products' className='flex flex-col items-center gap-px'>
        {pathName === '/products' ? (
          <SolidHomeIcon className='w-7 h-7' />
        ) : (
          <OutlineHomeIcon className='w-7 h-7' />
        )}
        <span>홈</span>
      </Link>
      <Link href='/life' className='flex flex-col items-center gap-px'>
        {pathName === '/life' ? (
          <SolidNewspaperIcon className='w-7 h-7' />
        ) : (
          <OutlineNewspaperIcon className='w-7 h-7' />
        )}
        <span>동네생활</span>
      </Link>
      <Link href='/chat' className='flex flex-col items-center gap-px'>
        {pathName === '/chat' ? (
          <SolidChatIcon className='w-7 h-7' />
        ) : (
          <OutlineChatIcon className='w-7 h-7' />
        )}
        <span>채팅</span>
      </Link>
      <Link href='/live' className='flex flex-col items-center gap-px'>
        {pathName === '/live' ? (
          <SolidVideoCameraIcon className='w-7 h-7' />
        ) : (
          <OutlineVideoCameraIcon className='w-7 h-7' />
        )}
        <span>쇼핑</span>
      </Link>
      <Link href='/profile' className='flex flex-col items-center gap-px'>
        {pathName === '/profile' ? (
          <SolidUserIcon className='w-7 h-7' />
        ) : (
          <OutlineUserIcon className='w-7 h-7' />
        )}
        <span>나의 당근</span>
      </Link>
    </div>
  );
}