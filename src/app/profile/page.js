import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '../components/header';
import DashboardCard from '../components/dashboard-card';
import Footer from '../components/footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Profile() {
  return (
    <>
      <Header />
      <div className='flex flew-row p-2'>
        <div className='flex flex-col p-8'>
          <DashboardCard />
        </div>

        <div className='flex flex-col p-4'>
          <div className='card w-[60vw] bg-base-100 shadow-xl mt-4'>
            <figure>
              <img
                src='https://loremflickr.com/320/240'
                alt='profile-img'
                className='h-[12vh] w-[12vh] mt-4 rounded-lg'
              />
            </figure>
            <p className='text-center'>edit</p>
            <p className='text-center mt-2'>Robert Chandler</p>
            <p className='text-center'>+62 813-9387-7946</p>
            <div className='card-body'>
              <Link href={`/personalinfo`} title='personal info'>
                <button className='bg-base-300 text-dark text-xl font-bold w-full h-[8vh] mt-2 rounded-lg shadow-lg hover:bg-blue-700 text-dark shadow-lg'>
                  Personal Information ➥
                </button>
              </Link>
              <button className='bg-base-300 text-dark text-xl font-bold w-full h-[8vh] mt-2 rounded-lg shadow-lg hover:bg-blue-700 text-dark shadow-lg'>
                Change Password ➥
              </button>
              <button className='bg-base-300 text-dark text-xl font-bold w-full h-[8vh] mt-2 rounded-lg shadow-lg hover:bg-blue-700 text-dark shadow-lg'>
                Change PIN ➥
              </button>
              <button className='bg-base-300 text-dark text-xl font-bold w-full h-[8vh] mt-2 rounded-lg shadow-lg hover:bg-blue-700 text-dark shadow-lg'>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
