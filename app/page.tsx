
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import { lusitana, robotoMono } from './ui/fonts';
import Image from 'next/image';
import mobileView from '../public/hero-mobile.png';
import desktopView from '../public/hero-desktop.png';

import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex max-h-screen flex-col p-4 ">

      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-600 p-4 md:h-52">
        <AcmeLogo />
        
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">

          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Diamond Coffee.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-600">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>

          <div className="flex flex-row md:flex-col gap-4 items-center justify-center">
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href='/dashboard'
              className="flex items-center gap-5 self-start rounded-lg bg-blue-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          maxHeight: 'calc(100vh - 250px)'
        }} className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 ">

          <Image
            src={desktopView}
            priority
            className='hidden md:block'
            alt='screenshoot of the dashboard project showing desktop & mobile versions'
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: 900
            }}
          // quality={100}
          // placeholder='blur'
          // fill
          // sizes='100vw'
          // style={{
          //   objectFit: 'contain',

          // }}
          />
          <Image
            src={mobileView}
            priority
            alt='screenshoot of the dashboard project showing mobile version'
            className='block md:hidden'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />

        </div>
      </div>
    </main>
  );
}
