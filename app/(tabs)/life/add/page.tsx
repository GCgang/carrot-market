'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { useFormState } from 'react-dom';
import { addPost } from './actions';

export default function AddPost() {
  const [state, action] = useFormState(addPost, null);
  return (
    <div className='flex flex-col gap-10 py-8 px-6'>
      <h1 className='font-medium text-2xl'>동네생활 글쓰기</h1>
      <form action={action} className='flex flex-col gap-3'>
        <Input
          name='title'
          type='text'
          placeholder='제목'
          required
          errors={state?.fieldErrors.title}
        />
        <Input
          name='description'
          type='text'
          placeholder='내용'
          required
          errors={state?.fieldErrors.description}
        />
        <Button text='작성 완료' />
      </form>
    </div>
  );
}
