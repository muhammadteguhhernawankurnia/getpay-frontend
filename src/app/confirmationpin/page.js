import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '../components/header';
import DashboardCard from '../components/dashboard-card';
import Footer from '../components/footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function ConfirmationPIN() {
  return (
    <>
      <Header />
      <div className='flex flex-row justify-evenly'>
        <div className='=flex flex-col p-8'>
          <DashboardCard />
        </div>
        <div className='p-8'>
          <div className='rounded-lg w-[60vw] h-full text-dark p-4 bg-base-100 shadow-xl'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col'>
                <div className='card-actions justify-end'>
                  <button className='btn btn-circle btn-outline '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
                <p className='text-2xl'>Enter PIN to Transfer</p>
                <p className='text-xl text-gray-300'>
                  Enter your 6 digits PIN for confirmation to continue
                  transferring money.
                </p>
              </div>

              <div className='flex flex-row rounded-lg mt-2 shadow-md p-2'>
                <input
                  type='number'
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                />
                <button className='btn bg-blue-700 border-none ml-2'>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
