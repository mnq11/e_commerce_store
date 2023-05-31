// app/contact/page.jsx
"use client";
import ContactForm from "../components/ContactForm";
import Image from 'next/image';
import heroImage from "@/public/images/about.jpg";

const Page = () => {
  return (
    <section className="h-full relative">

      <Image
        alt='Contact background'
        src={heroImage}
        className='fixed inset-0 -z-10 h-full w-full object-cover'
      />

      <div className="fixed inset-0 bg-black bg-opacity-70 bg-blend-multiply" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-2xl py-32 px-4 sm:py-48 md:px-6 lg:py-56 xl:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Kontakta oss
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            Vi är här för att hjälpa till. Tveka inte att kontakta oss om du har några frågor eller förfrågningar.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
