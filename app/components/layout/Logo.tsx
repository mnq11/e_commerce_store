// app/components/layout/Logo.tsx

import Link from 'next/link'

const Logo = () => (
  <div className='mx-auto font-bold text-3xl'>
    <Link href='/'>
      <span className='cursor-pointer uppercase tracking-widest'>CAFE</span>
    </Link>
  </div>
)

export default Logo
