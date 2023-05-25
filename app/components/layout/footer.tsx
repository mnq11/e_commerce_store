const Footer = () => {
  return (
    <footer className='z-10 py-10 text-stone-400'>
      <div className='container'>
        <h5 className='text-lg'>CAFE CO.</h5>
        <p className='mt-4 text-sm text-stone-500'>
          &copy; {new Date().getFullYear()} Cafe Co.
        </p>
        <div className='text-sm text-stone-400'>
          Developed by{'Mohammed  '}
          <a
            className='text-sky-600'
            href='https://www.mohammedn.info/'
            rel='noreferrer'
            target='_blank'
          >
            Visit my website
          </a>{' '}


          .
        </div>
      </div>
    </footer>
  )
}

export default Footer
