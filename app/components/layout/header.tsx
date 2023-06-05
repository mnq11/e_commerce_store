// app/components/layout/Header.tsx
'use client'

import { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import useSWR from 'swr'
import CartSlider from '@/components/cart-slider'

import { getCart } from '@/lib/swell/cart'
import { ShoppingCartIcon } from '@heroicons/react/outline'

import { SignInButton, UserButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'
import NavigationMobile from './NavigationMobile'
import NavigationDesktop from './NavigationDesktop'
import Link from "next/link";

const Header = () => {
  const { data: cart, isLoading } = useSWR('cart', getCart)
  const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='sticky top-0 bg-transparent bg-opacity-10 backdrop-filter backdrop-blur-sm z-10 py-6'>
      <nav className='container mx-auto max-w-screen-lg flex flex-row items-center justify-between px-4 sm:px-0 relative'>
        {/* Logo */}
        <div className='flex-grow font-semibold text-xl sm:text-3xl text-gray-200'>
          <Link href='/'>CAFE</Link>
        </div>

        {/* Nav links for Desktop */}
        <div className="hidden sm:block">
          <NavigationDesktop />
        </div>

        {/* Nav links for Mobile */}
        <div className="sm:hidden absolute top-full w-full right-0 ">
          <NavigationMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Hamburger menu and Shopping cart */}
        <div className="flex items-center justify-end">
          <div className="sm:hidden">
            <button
              type="button"
              className="text-gray-200 hover:text-blue-500 transform transition-transform duration-500"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon className="h-6 w-6 rotate-180" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>

          <button
            className='flex items-center gap-x-2 pl-4 text-white'
            onClick={() => setCartSliderIsOpen(open => !open)}
          >
            <ShoppingCartIcon className='h-7 w-7' />

            {cart?.item_quantity ? (
              <span className='flex h-5 w-5 items-center justify-center rounded bg-sky-600 text-xs font-medium text-gray-200'>
                {cart?.item_quantity}
              </span>
            ) : null}
          </button>

          <div className='hidden sm:flex items-center justify-end gap-6 ml-6'>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode='modal'>
                <button className='rounded border text-gray-200 border-gray-200 px-3 py-0.5'>
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </nav>
      <CartSlider
        cart={cart}
        cartIsLoading={isLoading}
        open={cartSliderIsOpen}
        setCartSliderIsOpen={setCartSliderIsOpen}
      />
    </header>
  )
}

export default Header
