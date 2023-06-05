// app/components/layout/NavigationMobile.tsx

import { SignedIn } from '@clerk/nextjs/app-beta/client'
import Link from 'next/link'
import { useCallback } from 'react'

const NavigationMobile = ({ isOpen, setIsOpen }) => {
  const toggleMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, [setIsOpen]);

  const navItemClass = 'text-gray-200 text-base font-medium uppercase tracking-wider p-3 hover:bg-blue-600 transition-colors duration-300';

  return (
    <ul className={`${isOpen ? 'flex flex-col items-end pr-3' : 'hidden'} bg-transparent max-w-full py-0 rounded-md transition-all duration-500 ease-in-out`}>
      <li className={`${navItemClass}`}>
        <Link href='/products' onClick={toggleMenu}>Products</Link>
      </li>
      <li className={`${navItemClass}`}>
        <Link href='/about' onClick={toggleMenu}>About</Link>
      </li>
      <li className={`${navItemClass}`}>
        <Link href='/contact' onClick={toggleMenu}>Contact</Link>
      </li>
      <SignedIn>
        <li className={`${navItemClass}`}>
          <Link href='/dashboard' onClick={toggleMenu}>Dashboard</Link>
        </li>
      </SignedIn>
    </ul>
  )
}

export default NavigationMobile
