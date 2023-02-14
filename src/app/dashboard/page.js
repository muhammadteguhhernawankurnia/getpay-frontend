import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '../components/header';
import DashboardCard from '../components/dashboard-card';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className='flex flex-row justify-evenly'>
        <div className='=flex flex-col p-8'>
          <DashboardCard />
        </div>
        <div className='=flex flex-col p-8 justify-evenly'>
          <div className='bg-blue-700 rounded-lg w-[60vw] h-[20vh] text-white p-2 shadow-xl'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col p-2'>
                <p className='text-lg'>Balance</p>
                <p className='text-3xl'>Rp. 120.000</p>
                <p className='text-sm mt-2'>+62 813-9387-7946</p>
              </div>
              <div className='flex flex-col'>
                <button className='btn glass '>Transfer</button>
                <button className='btn glass mt-2'>Top Up</button>
              </div>
            </div>
          </div>

          <div className='flex flew-row mt-4 justify-between'>
            <div className='flex flex-col'>
              <div className='card w-[29vw] h-[29vw] bg-base-100 shadow-xl'>
                <div className='card-body'>
                  <Image
                    src='/diagram-home.png'
                    alt='diagram-home-img'
                    className='hidden sm:block mx-auto'
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='card w-[29vw] h-[29vw] bg-base-100 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title'>Transaction History</h2>
                  <div className='flex flex-col'>
                    <div className='flex flex-row p-2'>
                      <Image
                        src='/user-2.svg'
                        alt='user-img'
                        className='hidden sm:block mx-auto'
                        width={50}
                        height={50}
                      />
                      <div className='flex flex-col text-start ml-2'>
                        <p className='text-xl'>Samuel Suhi</p>
                        <p>Accept</p>
                      </div>
                      <p className='text-end justify-center'>+Rp50.000</p>
                    </div>

                    <div className='flex flex-row p-2'>
                      <Image
                        src='/user-1.svg'
                        alt='user-img'
                        className='hidden sm:block mx-auto'
                        width={50}
                        height={50}
                      />
                      <div className='flex flex-col text-start ml-2'>
                        <p className='text-xl'>Marpuah</p>
                        <p>Accept</p>
                      </div>
                      <p className='text-end justify-center'>+Rp1.500</p>
                    </div>

                    <div className='flex flex-row p-2'>
                      <Image
                        src='/user-2.svg'
                        alt='user-img'
                        className='hidden sm:block mx-auto'
                        width={50}
                        height={50}
                      />
                      <div className='flex flex-col text-start ml-2'>
                        <p className='text-xl'>Samuel Suhi</p>
                        <p>Accept</p>
                      </div>
                      <p className='text-end justify-center'>+Rp2.000</p>
                    </div>

                    <div className='flex flex-row p-2'>
                      <Image
                        src='/user-1.svg'
                        alt='user-img'
                        className='hidden sm:block mx-auto'
                        width={50}
                        height={50}
                      />
                      <div className='flex flex-col text-start ml-2'>
                        <p className='text-xl'>Marpuah</p>
                        <p>Accept</p>
                      </div>
                      <p className='text-end justify-center'>+Rp10.500</p>
                    </div>
                  </div>
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
