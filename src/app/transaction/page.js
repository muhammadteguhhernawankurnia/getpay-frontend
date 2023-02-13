import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '../components/header';
import DashboardCard from '../components/dashboard-card';
import Footer from '../components/footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Transaction() {
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
                <p className='text-2xl'>Search Receiver</p>
                <div className='form-control '>
                  <div className='input-group '>
                    <input
                      type='text'
                      placeholder='Search receiver here'
                      className='input input-bordered w-full bg-gray-200 text-white'
                    />
                    <button className='btn btn-square'>
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
                          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <Link href={`/inputamount`} title='input amount'>
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
              </Link>

              <Link href={`/inputamount`} title='input amount'>
                <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                  <div className='flex flex-row p-2'>
                    <Image
                      src='/user-2.svg'
                      alt='user-img'
                      className=''
                      width={50}
                      height={50}
                    />
                    <div className='flex flex-col text-start ml-2'>
                      <p className='text-xl'>Joko</p>
                      <p>+62 813-8492-9999</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
