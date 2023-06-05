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
import Navigation from './Navigation'
import Link from "next/link";

const Header = () => {
  const { data: cart, isLoading } = useSWR('cart', getCart)
  const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className='z-10 py-10 text-stone-400 relative bg-transparent'>
        <nav className='container mx-auto max-w-screen-lg flex items-center justify-between px-4 sm:px-0'>
          {/* Logo */}
          <div className='font-semibold text-xl sm:text-3xl'>
            <Link href='/'>CAFE</Link>
          </div>

          {/* Hamburger menu */}
          <div className="sm:hidden flex items-center justify-between">
            <button
              className='flex items-center gap-x-2 pl-4'
              onClick={() => setCartSliderIsOpen(open => !open)}
            >
              <ShoppingCartIcon className='h-7 w-7' />

              {cart?.item_quantity ? (
                <span className='flex h-5 w-5 items-center justify-center rounded bg-sky-600 text-xs font-medium text-white'>
                  {cart?.item_quantity}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 transform transition-transform duration-500"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon className="h-6 w-6 rotate-180" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>

          {/* Nav links */}
          <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Shopping cart */}
          <div className='hidden sm:flex items-center justify-end gap-6'>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode='modal'>
                <button className='rounded border border-gray-400 px-3 py-0.5'>
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
            <button
              className='flex items-center gap-x-2 pl-4'
              onClick={() => setCartSliderIsOpen(open => !open)}
            >
              <ShoppingCartIcon className='h-7 w-7' />

              {cart?.item_quantity ? (
                <span className='flex h-5 w-5 items-center justify-center rounded bg-sky-600 text-xs font-medium text-white'>
                  {cart?.item_quantity}
                </span>
              ) : null}
            </button>
          </div>
        </nav>
      </header>
      <CartSlider
        cart={cart}
        cartIsLoading={isLoading}
        open={cartSliderIsOpen}
        setCartSliderIsOpen={setCartSliderIsOpen}
      />
    </>
  )
}

export default Header
