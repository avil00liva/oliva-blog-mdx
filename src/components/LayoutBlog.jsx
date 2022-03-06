

const Layout = ({children}) => {
  return (
    <main className='flex flex-col justify-center px-8 bg-gray-50 dark:bg-black'>
        <article className='mdxContainer flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16'>
            {children}
        </article>
    </main>
  )
}

export default Layout