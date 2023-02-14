'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

const Register = () => {
  const router = useRouter();
  const [RegisterForm, setRegisterForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const [validate, setValidate] = useState({ error: false, message: '' });

  const handleRegister = (event) => {
    event.preventDefault();
    const data = new URLSearchParams(RegisterForm);
    axios
      .post('http://localhost:5002/api/v1/auth/register', data)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem('@userRegister', JSON.stringify(res.data.data));
        router.push('/login');
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        setValidate({ error: true, message: err.response.data.message });
      });
  };
  //private route ketika user sudah Register gak bisa balik ke form Register
  useEffect(() => {
    if (localStorage.getItem('@userRegister')) {
      router.push('/login');
    }
  }, []);

  return (
    <>
      <div className='flex flex-row'>
        <div className='w-1/2 bg-dark'>
          <Image
            src='/background-auth.png'
            alt='background-auth-img'
            className='hidden sm:block mx-auto'
            width={1000}
            height={2400}
          />
        </div>
        <div className='w-1/2 bg-white'>
          <div className='flex flex-col p-16'>
            <label className='label'>
              <span className='label-text text-4xl font-bold'>
                Start Accessing Banking Needs With All Devices and All Platforms
                With 30.000+ Users
              </span>
            </label>
            <label className='label'>
              <span className='label-text text-2xl'>
                Transfering money is eassier than ever, you can access FazzPay
                wherever you are. Desktop, laptop, mobile phone? we cover all of
                that for you!
              </span>
            </label>
            <form onSubmit={handleRegister} className=''>
              <div className='flex flex-col'>
                <input
                  onChange={(e) =>
                    setRegisterForm({
                      ...RegisterForm,
                      first_name: e.target.value,
                    })
                  }
                  type='text'
                  placeholder='Enter your first name'
                  className='border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 mt-4'
                />
                <input
                  onChange={(e) =>
                    setRegisterForm({
                      ...RegisterForm,
                      last_name: e.target.value,
                    })
                  }
                  type='text'
                  placeholder='Enter your last name'
                  className='border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 mt-4'
                />
                <input
                  onChange={(e) =>
                    setRegisterForm({
                      ...RegisterForm,
                      email: e.target.value,
                    })
                  }
                  type='email'
                  placeholder='Enter your email'
                  className='border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 mt-4'
                />
                <input
                  onChange={(e) =>
                    setRegisterForm({
                      ...RegisterForm,
                      password: e.target.value,
                    })
                  }
                  type='password'
                  placeholder='Enter your password'
                  className='border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 mt-4'
                />
              </div>
              <button
                type='submit'
                className='bg-base-300 text-dark text-xl font-bold w-full h-[8vh] mt-12 rounded-lg '
              >
                Sign Up
              </button>
              <label className='label justify-center '>
                <div className='flex flex-row '>
                  <p className='text-dark'>Already have an account?</p>
                  <p className='text-info'>Register</p>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
