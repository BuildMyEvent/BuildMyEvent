import Image from 'next/image';
import BME from '@public/BME-Logos/BME-Logo-Full-White.svg'
import Base from '@public/icons/base.svg'
import GithubLogo from '@public/github-dark.svg';
import Link from 'next/link';

export default function FooterComponent() {
  return (
    <footer className="mt-[10rem] p-6 w-full bg-gradient-to-r from-[#1C3676] to-[#3565DC] flex flex-col gap-4 items-center justify-center">
      <Link href="#hero">
        <Image src={BME} alt='BuildMyEVent Logo' width={350} />
      </Link>
      <p className="mt-2 text-white">
        &copy; {new Date().getFullYear()} BuildMyEvent. All rights reserved.
      </p>

      <a className='flex' target="_blank" rel="nonreferrer" href='https://www.base.org/'>
        <p className="mt-2 text-white my-auto mr-2 text-xl">
          Build on
        </p>
        <Image
          src={Base}
          alt="Base Logo"
          width={120}
          height={120}
        />

      </a>

      <a target="_blank" rel="nonreferrer" href='https://github.com/BuildMyEvent'>
        <Image
          src={GithubLogo}
          alt="GitHub Logo"
          width={40}
          height={40}
        />
      </a>
    </footer>
  );
}