'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { uploadProduct } from './action';
import { useState } from 'react';
import { useFormState } from 'react-dom';

export default function AddProduct() {
  const [preview, setPreview] = useState('');
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }
    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
  };
  const [state, action] = useFormState(uploadProduct, null);
  return (
    <div>
      <form action={action}>
        <label htmlFor='photo'>
          {preview === '' ? (
            <>
              <PhotoIcon className='w-20' />
              <div>사진을 추가해주세요.</div>
              {state?.fieldErrors.photo}
            </>
          ) : null}
        </label>
        <input
          onChange={handleImageChange}
          type='file'
          id='photo'
          name='photo'
          accept='image/*'
        />
        <Input
          name='title'
          required
          placeholder='제목'
          type='text'
          errors={state?.fieldErrors.title}
        />
        <Input
          name='price'
          required
          placeholder='가격'
          errors={state?.fieldErrors.price}
        />
        <Input
          name='description'
          required
          placeholder='자세한 설명'
          type='text'
          errors={state?.fieldErrors.description}
        />
        <Button text='작성 완료' />
      </form>
    </div>
  );
}
