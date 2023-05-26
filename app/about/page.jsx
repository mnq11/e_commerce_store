"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import heroImage from '@/public/images/about.jpg'

const Page = () => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  if (isLoaded && !isSignedIn) {
    router.push("/sign-in?redirectUrl=/about");
  }

  return (
    <section className="h-full" dir="rtl">
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

        <div className="mx-auto max-w-2xl py-32 px-4 sm:py-48 md:px-6 lg:py-56 xl:px-8">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
              className="relative rounded-full py-1 px-3 text-sm leading-6 text-stone-400 ring-1 ring-white/10 hover:ring-white/20">
              نعلن عن الجولة التالية من التمويل.{" "}
              <Link href="#" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                اقرأ المزيد <span aria-hidden="true">&larr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              قهوتنا محمصة بالحب.
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              نحن نقدم أفضل القهوة بأجود المكونات. نتأكد من توفير تجربة فريدة لعشاق القهوة.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/products"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                تسوق المنتجات
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white"
              >
                تعلم المزيد <span aria-hidden="true">&larr;</span>
              </Link>
            </div>
          </div>
        </div>
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

      </div>
    </section>

  );
};

export default Page;
