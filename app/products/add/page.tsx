'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { getUploadURL, uploadProduct } from './action';
import { useState } from 'react';
import { useFormState } from 'react-dom';

export default function AddProduct() {
  const [preview, setPreview] = useState('');
  const [uploadUrl, setUploadURL] = useState('');
  const [photoId, setPhotoId] = useState('');
  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }
    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
    const { success, result } = await getUploadURL();

    if (success) {
      const { id, uploadURL } = result;
      setUploadURL(uploadURL);
      setPhotoId(id);
    }
  };
  const interceptAction = async (_: any, formData: FormData) => {
    const file = formData.get('photo');
    if (!file) {
      return;
    }
    const cloudflareForm = new FormData();
    cloudflareForm.append('file', file);
    const response = await fetch(uploadUrl, {
      method: 'post',
      body: cloudflareForm,
    });

    if (response.status !== 200) {
      return;
    }
    const photoUrl = `https://imagedelivery.net/yazK-qW815fpTdA21yC7Sg/${photoId}`;
    formData.set('photo', photoUrl);
    return uploadProduct(_, formData);
  };
  const [state, action] = useFormState(interceptAction, null);
  return (
    <div>
      <form action={action} className='p-5 flex flex-col gap-5'>
        <label
          htmlFor='photo'
          className='border-2 aspect-square flex items-center justify-center flex-col text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover'
          style={{ backgroundImage: `url(${preview})` }}
        >
          {preview === '' ? (
            <>
              <PhotoIcon className='w-20' />
              <div className='text-neutral-400 text-sm'>
                사진을 추가해주세요.
              </div>
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
          className='hidden'
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
