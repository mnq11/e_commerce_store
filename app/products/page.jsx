// app/products/page.jsx
import { getProducts } from '@/lib/swell/products'
import Image from "next/image";
import heroImage from '@/public/images/about.jpg'
import Products from '@/components/products'

const Page = async () => {
  const { results: products } = await getProducts({ page: 1 })

  return (
    <section className="h-full" dir="ltr">
      <div className="relative isolate h-full overflow-hidden pt-14">
        <Image
          alt='Our products'
          src={heroImage}
          className='fixed inset-0 -z-10 h-full w-full object-cover'
        />

        <div
          aria-hidden='true'
          className='fixed inset-0 -z-10 bg-black/70 bg-blend-multiply'
        />

        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl'>
            Our Products
          </h1>
          <p className='mt-6 text-lg leading-8 text-stone-300'>
            Here you can find our finest products.
          </p>
        </div>
        <Products products={products} />


      </div>
    </section>
  );
}

export default Page;