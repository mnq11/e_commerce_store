
// app/contact/page.jsx
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
    <section className="h-full" dir="rtl">
      <div className="relative isolate h-full overflow-hidden pt-14">
        <div className='relative isolate h-full overflow-hidden pt-14'>
          <Image
            alt=''
            src={heroImage}
            className='fixed inset-0 -z-10 h-full w-full object-cover'
          />

          <div
            aria-hidden='true'
            className='fixed inset-0 -z-10 bg-black/70 bg-blend-multiply'
          />

        </div>


      </div>
    </section>

  );
};

export default Page;
