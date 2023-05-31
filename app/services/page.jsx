// app/services/page.jsx
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import heroImage from '@/public/images/about.jpg' // Change to services related image

const Page = () => {
  useRouter();
  return (
    <section className="h-full" dir="ltr">
      <div className="relative isolate h-full overflow-hidden pt-14">
        <Image
          alt=""
          src={heroImage}
          className="fixed inset-0 -z-10 h-full w-full object-cover"
        />

        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-black/70 bg-blend-multiply"
        />



      </div>
    </section>

  );
};

export default Page;
