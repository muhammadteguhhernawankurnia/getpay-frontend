import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '../components/header';
import DashboardCard from '../components/dashboard-card';
import Footer from '../components/footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function InputAmountConfirmation() {
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
                <p className='text-2xl'>Transfer To</p>
                <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                  <div className='flex flex-row p-2'>
                    <Image
                      src='/user-1.svg'
                      alt='user-img'
                      className=''
                      width={50}
                      height={50}
                    />
                    <div className='flex flex-col text-start ml-2'>
                      <p className='text-xl'>Marpuah</p>
                      <p>+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className='text-2xl mt-2'>Details</p>

              <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                <p className='text-sm text-gray-400'>Amount</p>
                <p className='text-xl'>Rp100.000</p>
              </div>

              <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                <p className='text-sm text-gray-400'>Balance Left</p>
                <p className='text-xl'>Rp20.000</p>
              </div>

              <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                <p className='text-sm text-gray-400'>Date & Time</p>
                <p className='text-xl'>May 11, 2020 - 12.20</p>
              </div>

              <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                <p className='text-sm text-gray-400'>Notes</p>
                <p className='text-xl text-start'>For buying some socks</p>
              </div>
            </div>

            <div className='text-end mt-4'>
              <Link href={`/confirmationpin`} title='confirmation pin'>
                <button className='btn bg-blue-700 border-none ml-2'>
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
