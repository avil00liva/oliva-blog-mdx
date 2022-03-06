import Image from 'next/image'
import React from 'react'
import picture from "../../images/olivaspic.jpg"
import BlogPView from './BlogPView'

const MainContent = ({posts}) => {
  return (
    <main className='flex flex-col justify-center px-8 bg-gray-50 dark:bg-black'>
        <div className='flex flex-col justify-center items-start max-w-3xl min-w-[100px] laptop:w-[42rem]  border-gray-200 dark:border-gray-700 mx-auto pb-16 '>
            <div className='flex flex-col-reverse tablet:flex-row items-start tablet:items-center tablet:justify-between w-full'>
                <div className='flex flex-col pr-8 tablet:flex-1'>
                    <h1 className='font-bold text-3xl laptop:text-5xl tracking-tight mb-1 text-black dark:text-white'>Avilo Oliva</h1>
                    <h2 className='text-gray-700 dark:text-gray-200 mb-4'>
                        Personal journey  | <span className='font-semibold'>Blog</span>
                    </h2>
                    <p className='text-gray-600 dark:text-gray-400 mb-16'>
                        Trying to learn something new every week.
                    </p>
                </div>
                <div className='w-[80px] h-[80px] tablet:h-[120px] tablet:w-[120px] relative mb-8 tablet:mb-0 mr-auto tablet:self-baseline'>
                    <Image 
                        src={picture} 
                        width={101}
                        height={101}
                        alt="Avilo Oliva Picture" 
                        className='rounded-full filter dark:grayscale w-full h-full object-cover'                        
                    />
                </div>
            </div>
            <BlogPView posts={posts}/>
        </div>
    </main>
  )
}

export default MainContent