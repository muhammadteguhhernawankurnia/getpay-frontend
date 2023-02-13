import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function DashboardCard() {
  return (
    <>
      <div className='card h-full w-[20vw] bg-base-100 shadow-xl'>
        <div className='card-body'>
          <Link href={`/`} title='homepage/dashboard'>
            <div className='flex flex-row p-2 justify-start'>
              <Image
                src='/dashboard.svg'
                alt='dashboard-img'
                className=''
                width={30}
                height={30}
              />
              <h2 className='text-xl ml-2'>Dashboard</h2>
            </div>
          </Link>

          <Link href={`/transaction`} title='transfer'>
            <div className='flex flex-row p-2 justify-start'>
              <Image
                src='/transfer.svg'
                alt='transfer-img'
                className=''
                width={30}
                height={30}
              />
              <h2 className='text-xl ml-2'>Transfer</h2>
            </div>
          </Link>

          <Link href={`/topup`} title='top up'>
            <div className='flex flex-row p-2 justify-start'>
              <Image
                src='/top-up.svg'
                alt='top-up-img'
                className=''
                width={30}
                height={30}
              />
              <h2 className='text-xl ml-2'>Top Up</h2>
            </div>
          </Link>

          <Link href={`/profile`} title='profile'>
            <div className='flex flex-row p-2 justify-start'>
              <Image
                src='/profile.svg'
                alt='profile-img'
                className=''
                width={30}
                height={30}
              />
              <h2 className='text-xl ml-2'>Profile</h2>
            </div>
          </Link>

          <div className='flex flex-row p-2 mt-16 justify-start'>
            <Image
              src='/log-out.svg'
              alt='log-out-img'
              className=''
              width={30}
              height={30}
            />
            <h2 className='text-xl ml-2'>Logout</h2>
          </div>
        </div>
      </div>
    </>
  );
}
