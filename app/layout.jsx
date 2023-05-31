// Desc: Root layout for the app
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
    <ClerkProvider>
      <div className={`${inter.className} min-h-screen flex flex-col text-stone-700`}>
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  )
}

export default RootLayout
