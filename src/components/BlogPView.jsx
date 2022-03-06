import Link from 'next/link'
import React from 'react'

const BlogPView = ({posts}) => {
  return (
    <div className='w-full min-h-[100px] mb-16'>
        <h3 className='font-bold text-2xl tablet:text-4xl tracking-tight mb-6 text-black dark:text-white'>
            Blogs preview
        </h3>
        <div className='flex flex-col tablet:gap-6 tablet:flex-row'>
            {posts.slice(0, 3).reverse().map((post)=>{
                return (
                    <>
                    <Link href={`/${post.slug}`} key={post.slug} className="mdStyle">
                        <a className='my-4 tablet:max-h-[256px] tablet:min-h-[248px] transform hover:scale-[1.01] transition-all rounded-xl w-full tablet:w-1/3 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]'>
                            <div className='flex flex-col justify-between h-full bg-gray-100 dark:bg-black  rounded-lg p-4'>
                                <div className='flex flex-col justify-between'>
                                    <h4 className='text-lg tablet:text-lg font-medium mb-6 tablet:mb-4 quini:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight'>
                                        {post.title}
                                    </h4>
                                    <h5 className='text-xs dark:text-green-300 mb-2'>{post.date}</h5>
                                    <p className='mb-2 text-ellipsis overflow-hidden tablet:whitespace-nowrap'>{post.excerpt}</p>
                                    <span className='dark:text-green-500 font-semibold'>{post.tags.join(" ")}</span>
                                </div>
                            </div>
                        </a>
                    </Link>
                    </>
                )
            })   
            }
        </div>
        <Link href="/blogs">
            <a className='flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6 items-center gap-x-1'>
                Read all posts
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='h-6 w-6 ml-1 text-gray-600 dark:text-gray-400'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"></path>
                </svg>
            </a>
        </Link>
    </div>
  )
}

export default BlogPView