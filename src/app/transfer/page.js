import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Transfer() {
  return (
    <div className='flex flex-row flex-wrap p-16'>
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div className='card card-side bg-base-100 shadow-xl p-4'>
            <figure>
              <img src='https://loremflickr.com/320/240' alt='Movie' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className='card-actions justify-end'>
                <Link href={`/transfer/${index}`} title='view confirmation'>
                  <button className='btn btn-primary'>Watch</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
