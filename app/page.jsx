// main page of next.js app
import Image from "next/image";
import heroImage from "@/public/images/about.jpg";
import Link from "next/link";

const Page = () => {
  return (
    <section className="h-full">
      <div className="relative isolate h-full overflow-hidden pt-14">
        <Image
          alt="Company background"
          src={heroImage}
          className="fixed inset-0 -z-10 h-full w-full object-cover"
        />

        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-black/70 bg-blend-multiply"
        />

        <div className="mx-auto max-w-2xl py-32 px-4 sm:py-48 md:px-6 lg:py-56 xl:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Vi bygger professionella webbplatser för företag.
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              Vi erbjuder skräddarsydda webbplatsbyggnadstjänster för företag som fokuserar på produktförsäljning. Vi
              strävar efter att skapa en unik och smidig onlineupplevelse för att sälja dina produkter.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/services"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 cursor-pointer"
              >
                Utforska våra tjänster
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white cursor-pointer"
              >
                Läs mer om oss <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
