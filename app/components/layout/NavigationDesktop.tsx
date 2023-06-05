// app/components/layout/NavigationDesktop.tsx

import { SignedIn } from '@clerk/nextjs/app-beta/client'
import Link from 'next/link'

const NavigationDesktop = () => {
  const navItemClass = 'text-gray-200 text-base font-medium uppercase tracking-wider p-3 hover:bg-blue-600 transition-colors duration-300';

  return (
    <ul className='flex flex-row items-center'>
      <li className={navItemClass}>
        <Link href='/products'>Products</Link>
      </li>
      <li className={navItemClass}>
        <Link href='/about'>About</Link>
      </li>
      <li className={navItemClass}>
        <Link href='/contact'>Contact</Link>
      </li>
      <SignedIn>
        <li className={navItemClass}>
          <Link href='/dashboard'>Dashboard</Link>
        </li>
      </SignedIn>
    </ul>
  )
}

export default NavigationDesktop
