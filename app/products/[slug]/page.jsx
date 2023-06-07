// app/products/[slug]/page.jsx
import { getProductBySlugOrId } from '@/lib/swell/products'
import Image from "next/image";
import heroImage from '@/public/images/about.jpg'
import Product from '@/components/product'

const Page = async ({ params }) => {
  const product = await getProductBySlugOrId(params.slug)

  return (
    <section className="h-full" dir="ltr">
      <div className="relative isolate h-full overflow-hidden pt-14">
        <Image
          alt={product.name}
          src={heroImage}
          className='fixed inset-0 -z-10 h-full w-full object-cover'
        />

        <div
          aria-hidden='true'
          className='fixed inset-0 -z-10 bg-black/70 bg-blend-multiply'
        />

        <div className='text-center'>


        </div>
        <Product product={product} />


      </div>
    </section>
  );
}

export default Page;
