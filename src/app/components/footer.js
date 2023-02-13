import Image from 'next/image';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
  return (
    <>
      <footer className='footer items-center bg-blue-700 text-neutral-content p-6 h-[10vh] w-[100vw]'>
        <div className='items-center grid-flow-col'>
          <p>2020 GetPay. All right reserved.</p>
        </div>
        <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
          <p>+62 5637 8882 9901</p>
          <p>contact@fazzpay.com</p>
        </div>
      </footer>
    </>
  );
}
