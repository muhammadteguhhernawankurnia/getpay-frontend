'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

const Login = () => {
  const router = useRouter();
  const [LoginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [validate, setValidate] = useState({ error: false, message: '' });
  //hooks
  // const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new URLSearchParams(LoginForm);
    // alert('awkwokowko');
    axios
      .post('http://localhost:5002/api/v1/auth/login', data)
      // axios.post({
      //   url: 'http://localhost:5002/api/v1/auth/login',
      //   method: 'POST',
      //   data: json.stringify(LoginForm),
      // })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem('@userLogin', JSON.stringify(res.data.data));
        router.push('/dashboard');
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        setValidate({ error: true, message: err.response.data.message });
      });
  };
  //private route ketika user sudah login gak bisa balik ke form login
  useEffect(() => {
    if (localStorage.getItem('@userLogin')) {
      router.push('/dashboard');
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
            <form onSubmit={handleLogin} className=''>
              <div className='flex flex-col'>
                <input
                  onChange={(e) =>
                    setLoginForm({
                      ...LoginForm,
                      email: e.target.value,
                    })
                  }
                  type='email'
                  placeholder='Enter your email'
                  className='border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 mt-4'
                />
                <input
                  onChange={(e) =>
                    setLoginForm({
                      ...LoginForm,
                      password: e.target.value,
                    })
                  }
                  type='password'
                  placeholder='Enter your password'
                  className='border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 mt-4'
                />
              </div>
              <p className='text-end mt-6 font-medium'>Forgot password?</p>
              <button
                type='submit'
                className='bg-base-300 text-dark text-xl font-bold w-full h-[8vh] mt-12 rounded-lg '
              >
                Login
              </button>
              <label className='label justify-center '>
                <div className='flex flex-row '>
                  <p className='text-dark'>Don???t have an account?</p>
                  <p className='text-info'>Let???s Sign Up</p>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
