/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import Layout from "./Layout"
import author from "../../images/olivaspic.jpg"
import Image from "next/image"
import Link from "next/link"


export default function BlogsPost({posts}) {
  return (
      <Layout>
        {posts.reverse().map((post, index)=>{
          return (
            <>
              <div className='w-full min-h-[100px] rounded-lg bg-gray-200 dark:bg-[#262626] shadow-lg p-0 pb-8 mb-8' key={index}>
                <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                  <img className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg laptop:rounded-lg" src={post.photoUrl}/>
                </div>
                <h1 className="text-center mb-8 cursor-pointer text-3xl font-semibold ">
                  {post.title}
                </h1>
                <div className="block laptop:flex text-center items-center justify-center mb-8 w-full">
                  <div className="flex items-center justify-center mb-4 laptop:mb-0 w-full laptop:w-auto mr-8">
                    <span>
                      <Image  
                        src={author} 
                        width={30}
                        height={30}
                        alt="Autor avatar" 
                        className='rounded-full align-middle'                        
                      />
                    </span>
                    <p className="inline align-middle text-gray-700 dark:text-gray-500 ml-2 font-medium text-lg">
                      Avilo
                    </p>
                  </div>
                  <div className="font-medium text-gray-700 dark:text-gray-500">
                    <svg className="h-6 w-6 inline mr-2 dark:text-green-500 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="align-middle">
                      {post.date}
                    </span>
                  </div>
                </div>
                <p className="text-center text-lg text-gray-700 font-normal px-4 laptop:px-20 mb-8">
                  {post.excerpt}
                </p>
                <div className="text-center">
                  <Link href={`/${post.slug}`} key={post.slug}>
                    <span className="transition duration-500 ease transform hover:translate-x-1 inline-block bg-green-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                      Continue Reading
                    </span>
                  </Link>
                </div>
                <div className="mt-4 ml-4">
                  <span className='dark:text-green-500 font-semibold'>{post.tags.join(" ")}</span>
                </div>
              </div>
            </>
          )
        })}
      </Layout>
  )
}