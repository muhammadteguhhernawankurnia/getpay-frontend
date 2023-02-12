'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function TransferDetails() {
  const router = useRouter();
  return (
    <>
      <div className='flex flex-col p-16'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <figure>
            <img src='https://loremflickr.com/320/240' alt='Movie' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Ini Details</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className='card-actions justify-end'>
              <button
                className='btn btn-primary'
                onClick={() => router.push('/confirmation')}
              >
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
