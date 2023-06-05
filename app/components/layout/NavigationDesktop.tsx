// app/components/layout/NavigationDesktop.tsx

import { SignedIn } from '@clerk/nextjs/app-beta/client'
import Link from 'next/link'

const NavigationDesktop = () => {
  const navItemClass = 'text-gray-200 text-base font-medium uppercase tracking-wider p-3 hover:bg-blue-600 transition-colors duration-300';

  return (
    <ul className='flex flex-row items-center'>
      <li className={`${navItemClass}`}>
        <Link href='#' >Hem</Link>
      </li>
      <li className={navItemClass}>
        <Link href='/about'>Om Oss</Link>
      </li>
      <li className={navItemClass}>
        <Link href='/products'>Produkter</Link>
      </li>
      <li className={navItemClass}>
        <Link href='/contact'>Kontakt</Link>
      </li>
      <SignedIn>
        <li className={navItemClass}>
          <Link href='/dashboard'>Kontrollpanel</Link>
        </li>
      </SignedIn>
    </ul>
  )
}

export default NavigationDesktop
