'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function Confirmation() {
  const router = useRouter();
  return (
    <>
      <div className='flex flex-col p-16'>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-xs w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-sm w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-md w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-lg w-full max-w-xs'
        />
      </div>
    </>
  );
}
