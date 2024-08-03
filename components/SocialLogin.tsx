import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/20/solid';

export default function SocialLogin() {
  return (
    <>
      <div />
      <div>
        <Link href='/github/start'>
          <FaGithub className='size-6' />
          <span>Continue with Github</span>
        </Link>
        <Link href='/sms'>
          <ChatBubbleOvalLeftEllipsisIcon className='size-6' />
          <span>Continue with SMS</span>
        </Link>
      </div>
    </>
  );
}
