// app/components/layout/Cart.tsx

import { useState } from 'react'
import useSWR from 'swr'
import { getCart } from '@/lib/swell/cart'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { SignedIn, UserButton, SignedOut, SignInButton } from '@clerk/nextjs'

const Cart = () => {
  const { data: cart } = useSWR('cart', getCart)

  return (
    <div className='hidden sm:flex items-center justify-end gap-6'>
      <button
        className='flex items-center gap-x-2 pl-4'
      >
        <ShoppingCartIcon className='h-7 w-7' />

        {cart?.item_quantity ? (
          <span className='flex h-5 w-5 items-center justify-center rounded bg-sky-600 text-xs font-medium text-stone-200'>
            {cart?.item_quantity}
          </span>
        ) : null}
      </button>
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
    </div>
  )
}

export default Cart
