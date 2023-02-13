import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '../components/header';
import DashboardCard from '../components/dashboard-card';
import Footer from '../components/footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function PersonalInfo() {
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
                <p className='text-2xl'>Personal Information</p>
                <p className='text-gray-400'>
                  We got your personal information from the sign up proccess. If
                  you want to make changes on your information, contact our
                  support.
                </p>
              </div>

              <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                <p className='text-sm text-gray-400'>First Name</p>
                <p className='text-xl'>Robert</p>
              </div>

              <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                <p className='text-sm text-gray-400'>Last Name</p>
                <p className='text-xl'>Chandler</p>
              </div>

              <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                <p className='text-sm text-gray-400'>Verified E-mail</p>
                <p className='text-xl'>pewdiepie1@gmail.com</p>
              </div>

              <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                <p className='text-sm text-gray-400'>Phone Number</p>
                <p className='text-xl text-start'>+62 813-9387-7946</p>
                <p className='text-sm text-blue-700 text-end'>Manage</p>
              </div>

              <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                <p className='text-sm text-gray-400'>PIN</p>
                <p className='text-xl text-start'>123456</p>
                <p className='text-sm text-blue-700 text-end'>Manage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
