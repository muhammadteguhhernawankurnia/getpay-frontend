import Image from 'next/image';
import { Inter } from '@next/font/google';
import Footer from './components/footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* start header */}
      <div className='navbar bg-white shadow-xl h-[15vh] w-[100vw] p-12'>
        <div className='flex-1 '>
          <p className='text-xl text-blue-500'>GetPay</p>
        </div>

        <div className='flex flex-row p-4'>
          <div className=''>
            <Link href={`/login`} title='login'>
              <button className='btn btn-outline btn-primary mr-4'>
                Login
              </button>
            </Link>
          </div>

          <div className=''>
            <Link href={`/register`} title='register'>
              <button className='btn btn-active btn-primary'>Register</button>
            </Link>
          </div>
        </div>
      </div>
      {/* end header */}

      <div className='flex flex-col'>
        <div className='=flex flex-col'>
          <div className='w-full bg-dark'>
            <Image
              src='/landing-page-bg.png'
              alt='background-auth-img'
              className='hidden sm:block mx-auto'
              width={3000}
              height={3000}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
