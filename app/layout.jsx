// app/layout.jsx

import { ClerkProvider } from '@clerk/nextjs/app-beta'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: 'next ecommerce',
  description: 'Created by Mohammed Nabil'
}

const RootLayout = ({ children }) => {
  return (
    <html
      lang='en'
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
    <body className='flex h-full flex-col text-stone-100 bg-transparent px-4 sm:px-8 lg:px-16'>
        <ClerkProvider>
          <Header />
          <main className='grow bg-transparent'>{children}</main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  )
}

export default RootLayout
