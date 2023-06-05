// app/components/layout/Navigation.tsx
import { SignedIn } from '@clerk/nextjs/app-beta/client'
import Link from 'next/link'
import { useCallback } from 'react'

const Navigation = ({ isOpen, setIsOpen }) => {
  const toggleMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, [setIsOpen]);

  const navItemClass = 'text-gray-200 text-base font-medium uppercase tracking-wider p-3 hover:bg-blue-600 transition-colors duration-300';

  return (
    <ul className={`${isOpen ? 'flex flex-col sm:flex-row' : 'hidden'} sm:flex top-full right-0 bg-transparent max-w-full py-0 rounded-md transition-all duration-500 ease-in-out`}>
      <li className={`${navItemClass} bg-transparent sm:block`}>
        <Link passHref href='/products'>
          <div onClick={toggleMenu}>Products</div>
        </Link>
      </li>
      <li className={`${navItemClass} sm:block`}>
        <Link passHref href='/about'>
          <div onClick={toggleMenu}>About</div>
        </Link>
      </li>
      <li className={`${navItemClass} sm:block`}>
        <Link passHref href='/contact'>
          <div onClick={toggleMenu}>Contact</div>
        </Link>
      </li>
      <SignedIn>
        <li className={`${navItemClass} sm:block`}>
          <Link passHref href='/dashboard'>
            <div onClick={toggleMenu}>Dashboard</div>
          </Link>
        </li>
      </SignedIn>
    </ul>
  )
}

export default Navigation
