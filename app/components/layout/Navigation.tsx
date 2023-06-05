import { SignedIn } from '@clerk/nextjs/app-beta/client'
import Link from 'next/link'
import { useCallback } from 'react'

const Navigation = ({ isOpen, setIsOpen }) => {

  const toggleMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, [setIsOpen]);

  const navItemClass = 'text-base font-medium uppercase tracking-wider p-3 hover:bg-blue-600 transition-colors duration-300';

  return (
    <ul className={`z-0 absolute top-full right-0 mt-0 transform origin-top-right sm:mt-0 sm:transform-none sm:relative sm:flex bg-transparent sm:bg-transparent shadow-md sm:shadow-none max-w-full sm:w-auto py-0 rounded-md sm:rounded-none sm:py-0 sm:gap-0 
                  transition duration-500 ease-in-out transform ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
    >
      <li className={navItemClass}>
        <Link href='/products'>
          <span onClick={toggleMenu}>Products</span>
        </Link>
      </li>
      <li className={navItemClass}>
        <Link href='/about'>
          <span onClick={toggleMenu}>About</span>
        </Link>
      </li>
      <li className={navItemClass}>
        <Link href='/contact'>
          <span onClick={toggleMenu}>Contact</span>
        </Link>
      </li>
      <SignedIn>
        <li className={navItemClass}>
          <Link href='/dashboard'>
            <span onClick={toggleMenu}>Dashboard</span>
          </Link>
        </li>
      </SignedIn>
    </ul>
  )
}

export default Navigation
