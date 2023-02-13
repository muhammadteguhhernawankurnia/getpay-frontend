import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '../components/header';
import DashboardCard from '../components/dashboard-card';
import Footer from '../components/footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function InputAmount() {
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
                <p className='text-2xl'>Transfer Money</p>
              </div>

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

              <p className='mt-4 text-gray-500'>
                Type the amount you want to transfer and then press continue to
                the next steps.
              </p>

              <div className='flex flex-col justify-center text-center'>
                <p className='text-3xl text-gray-500 mt-2'>0.00</p>
                <p className='text-xl mt-2'>Rp120.000 Available</p>
                <input
                  type='text'
                  placeholder='Add some notes'
                  className='input input-bordered w-full mt-2'
                />
                <div className='text-end mt-4'>
                  <Link href={`/inputamountconfirmation`} title='confirmation'>
                    <button className='btn bg-blue-700 border-none ml-2'>
                      Continue
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
