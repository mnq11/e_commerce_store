// app/components/product.jsx
'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useSWRConfig } from 'swr'

import clsx from 'clsx'

import { Disclosure, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { MinusIcon, PlusIcon } from '@heroicons/react/outline'
import { formatCurrency } from '@/lib/utils'
import { addToCart } from '@/lib/swell/cart'
import { Blinker } from '@/components/ui/loading'


const Product = ({ product }) => {
  const router = useRouter()
  const { mutate } = useSWRConfig()
  const [isPending, startTransition] = useTransition()
  const [loading, setLoading] = useState(false)

  const isMutating = loading || isPending

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    await addToCart({
      product_id: product.id,
      quantity: 1
    })
    setLoading(false)
    mutate('cart')
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
          {/* Image gallery */}
          <Tab.Group as='div' className='flex flex-col-reverse'>
            {/* Image selector */}
            <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
              <Tab.List className='grid grid-cols-4 gap-6'>
                {product.images.map(image => (
                  <Tab
                    key={image.id}
                    className='relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-stone-900 hover:bg-stone-50 focus:outline-none'
                  >
                    {({ selected }) => (
                      <>
                        <span className='sr-only'>
                          {' '}
                          {image?.file?.metadata}{' '}
                        </span>
                        <span className='absolute inset-0 overflow-hidden rounded-md'>
                        <Image
                          alt={`Product ${product.name} image`}
                          fill
                          src={image?.file?.url}
                          className='h-full w-full object-cover object-center'
                        />


                        </span>
                        <span
                          className={clsx(
                            selected ? 'ring-sky-500' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                          )}
                          aria-hidden='true'
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className='aspect-w-1 aspect-h-1 w-full'>
              {product.images?.map(image => (
                <Tab.Panel key={image.id}>
                  <Image
                    fill
                    src={image.file.url}
                    alt={image.file.metadata || `Product ${product.name} image`}
                    className='h-full w-full object-cover object-center sm:rounded-lg'
                  />


                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
            <h1 className='text-3xl font-bold tracking-tight text-stone-100'>
              {product.name}
            </h1>

            <div className='mt-3'>
              <h2 className='sr-only'>Product information</h2>
              <p className='text-3xl tracking-tight text-stone-100'>
                {formatCurrency({ amount: product.price })}
              </p>
            </div>

            {/* Reviews */}
            <div className='mt-3'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map(rating => (
                    <StarIcon
                      key={rating}
                      className={clsx(
                        (product.rating || 4) > rating
                          ? 'text-yellow-500'
                          : 'text-stone-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='sr-only'>{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className='mt-6'>
              <h3 className='sr-only'>Description</h3>

              <div
                className='space-y-6 text-base text-stone-100'
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className='mt-6' onSubmit={handleSubmit}>
              <div className='sm:flex-col1 mt-10 flex'>
                <button
                  type='submit'
                  disabled={isMutating}
                  className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-sky-600 py-3 px-8 text-base font-medium text-gray-200 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-stone-50 disabled:cursor-not-allowed disabled:opacity-50 sm:w-full'
                >
                  {isMutating ? <Blinker /> : 'Add to Cart'}
                </button>
              </div>
            </form>

            <section aria-labelledby='details-heading' className='mt-12  p-4 rounded-md shadow-lg'>
              {/* Display product Status */}
              <div className='flex items-center justify-between border-b pb-2 mb-2 border-gray-200'>
                <h3 className='text-lg font-semibold text-stone-100'>Availability</h3>
                <p className='text-lg text-stone-100'>{!product.active ? 'In Stock' : 'Out of Stock'}</p>
              </div>

              {/* Display Categories */}
              <div className='border-b pb-2 mb-2 border-stone-100'>
                <h3 className='text-lg font-semibold text-stone-100 mb-2'>Categories:</h3>
                {product.category_index?.id?.map((category, index) => (
                  <p key={index} className='text-base text-stone-100 ml-4'>- {category}</p>
                ))}
              </div>

              {/* Display Attributes */}
              <div>
                <h3 className='text-lg font-semibold text-stone-100 mb-2'>Attributes:</h3>
                {Object.entries(product.attributes).map(([key, value], index) => (
                  <div key={index} className='flex justify-between text-base text-stone-100'>
                    <span className='font-medium'>{key}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
