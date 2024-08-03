import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/20/solid';

export default function SocialLogin() {
  return (
    <>
      <div className='w-full h-px bg-neutral-500' />
      <div className='flex flex-col gap-3'>
        <Link
          href='/github/start'
          className='primary-btn flex h-10 items-center justify-center gap-2'
        >
          <FaGithub className='size-6' />
          <span>Continue with Github</span>
        </Link>
        <Link
          href='/sms'
          className='primary-btn flex h-10 items-center justify-center gap-2'
        >
          <ChatBubbleOvalLeftEllipsisIcon className='size-6' />
          <span>Continue with SMS</span>
        </Link>
      </div>
    </>
  );
}
