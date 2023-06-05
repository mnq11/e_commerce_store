// app/about/page.jsx
"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import heroImage from '@/public/images/about.jpg'

const Page = () => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();


  return (
    <section className="h-full" dir="ltr">
      <div className="relative isolate h-full overflow-hidden pt-14">
        <Image
          alt='Om vårt företag'
          src={heroImage}
          className='fixed inset-0 -z-10 h-full w-full object-cover'
        />

        <div
          aria-hidden='true'
          className='fixed inset-0 -z-10 bg-black/70 bg-blend-multiply'
        />

        <div className='mx-auto max-w-2xl py-32 px-4 sm:py-48 md:px-6 lg:py-56 xl:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl'>
              Vårt kaffe rostas med kärlek.
            </h1>
            <p className='mt-6 text-lg leading-8 text-stone-300'>
              Vi erbjuder det bästa kaffet med de finaste ingredienserna. Vi ser till att erbjuda en unik upplevelse för kaffeälskare.
            </p>
          </div>

          <div className='mt-10 flex flex-col items-center justify-center gap-y-6'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                Vår Historia
              </h2>
              <p className='mt-6 text-lg leading-8 text-stone-300'>
                { /* Lägg till din historia här */}
              </p>
            </div>

            <div className='text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                Vårt Team
              </h2>
              <p className='mt-6 text-lg leading-8 text-stone-300'>
                { /* Lägg till information om ditt team här */}
              </p>
            </div>

            <div className='text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl'>
                Vårt Uppdrag
              </h2>
              <p className='mt-6 text-lg leading-8 text-stone-300'>
                { /* Lägg till ditt uppdragsförklaring här */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page;
