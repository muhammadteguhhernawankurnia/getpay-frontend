'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '../components/header';
import DashboardCard from '../components/dashboard-card';
import Footer from '../components/footer';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

const InputAmount = () => {
  const router = useRouter();
  const [InputAmountForm, setInputAmountForm] = useState({
    sender_id: '',
    receiver_id: '',
    amount: '',
    balance: '',
    description: '',
  });

  const [validate, setValidate] = useState({ error: false, message: '' });

  const handleInputAmount = (event) => {
    event.preventDefault();
    const data = new URLSearchParams(InputAmountForm);
    axios
      .post('http://localhost:5002/api/v1/transfer', data)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem('@userLogin', JSON.stringify(res.data.data));
        // router.push('/inputamountconfirmation');
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        setValidate({ error: true, message: err.response.data.message });
      });
  };
  //private route ketika user sudah InputAmount gak bisa balik ke form InputAmount
  // useEffect(() => {
  //   if (localStorage.getItem('@userLogin')) {
  //     // router.push('/inputamountconfirmation');
  //   }
  // }, []);

  return (
    <>
      {/* ketika pake header error, tp pas hapus local storage jalan lagi*/}
      <Header />
      <div className='flex flex-row justify-evenly'>
        <div className='=flex flex-col p-8'>
          <DashboardCard />
        </div>
        <div className='p-8'>
          <form onSubmit={handleInputAmount} className=''>
            <div className='rounded-lg w-[60vw] h-full text-dark p-4 bg-base-100 shadow-xl'>
              <div className='flex flex-col justify-between'>
                <div className='flex flex-col'>
                  <p className='text-2xl'>Transfer Money</p>
                </div>

                <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                  <div className='flex flex-row p-2'>
                    <label
                      tabIndex={0}
                      className='btn btn-ghost btn-circle avatar'
                    >
                      <div className='w-10 rounded-lg'>
                        <img src='https://loremflickr.com/320/240' />
                      </div>
                    </label>
                    <div className='flex flex-col text-start ml-2'>
                      <input
                        onChange={(e) =>
                          setInputAmountForm({
                            ...InputAmountForm,
                            sender_id: e.target.value,
                          })
                        }
                        type='text'
                        placeholder='Input Sender'
                        className='input w-full max-w-xs'
                      />
                      {/* <p>+62 888-9999-6666</p> */}
                    </div>
                  </div>
                </div>

                <div className='flex flex-col rounded-lg mt-2 shadow-md p-2'>
                  <div className='flex flex-row p-2'>
                    <Image
                      src='/avatar-none.png'
                      alt='user-img'
                      className=''
                      width={50}
                      height={50}
                    />
                    <div className='flex flex-col text-start ml-2'>
                      <input
                        onChange={(e) =>
                          setInputAmountForm({
                            ...InputAmountForm,
                            receiver_id: e.target.value,
                          })
                        }
                        type='text'
                        placeholder='Input Receiver'
                        className='input w-full max-w-xs'
                      />
                      {/* <p>+62 813-8492-9994</p> */}
                    </div>
                  </div>
                </div>

                <p className='mt-4 text-gray-500'>
                  Type the amount you want to transfer and then press continue
                  to the next steps.
                </p>

                <div className='flex flex-col justify-center text-center'>
                  <p className='text-3xl text-gray-500 mt-2'>
                    <input
                      onChange={(e) =>
                        setInputAmountForm({
                          ...InputAmountForm,
                          amount: e.target.value,
                        })
                      }
                      type='number'
                      placeholder='Input Amount'
                      className='input input-bordered w-full max-w-xs'
                    />

                    <input
                      onChange={(e) =>
                        setInputAmountForm({
                          ...InputAmountForm,
                          balance: e.target.value,
                        })
                      }
                      type='number'
                      placeholder='Your Balance'
                      className='input input-bordered w-full max-w-xs ml-4'
                    />
                  </p>
                  <p className='text-xl mt-2'>Rp120.000 Available</p>
                  <input
                    onChange={(e) =>
                      setInputAmountForm({
                        ...InputAmountForm,
                        description: e.target.value,
                      })
                    }
                    type='text'
                    placeholder='Add some notes'
                    className='input input-bordered w-full mt-2'
                  />
                  <div className='text-end mt-4'>
                    {/* <Link
                      href={`/inputamountconfirmation`}
                      title='confirmation'
                    > */}
                    <button
                      type='submit'
                      className='btn bg-blue-700 border-none ml-2'
                    >
                      Continue
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InputAmount;
