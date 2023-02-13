import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Header() {
  return (
    <>
      <div className='navbar bg-white shadow-xl h-[15vh] w-[100vw] p-12'>
        <div className='flex-1 '>
          <Link href={`/`} title='homepage'>
            <p className='text-xl text-blue-500'>GetPay</p>
          </Link>
        </div>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-lg'>
              <img src='https://loremflickr.com/320/240' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

        <div className='flex flex-col'>
          <p>Robert Chandler</p>
          <p>+62 8139 3877 7946</p>
        </div>

        <div className='flex-none'>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle '>
              <Image
                src='/notification.svg'
                alt='notification-img'
                className='sm:block mx-auto'
                width={20}
                height={20}
              />
              <div className='indicator'>
                <span className='badge badge-sm indicator-item'>2</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
            >
              <div className='card-body'>
                <span className='font-bold text-lg'>2 Items</span>
                <span className='text-info'>Payment success</span>
                <div className='card-actions'>
                  <button className='btn btn-primary btn-block'>
                    View notification
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
