import Link from 'next/link'
import React from 'react'

const PageContent = [
    {
        link: "/",
        title: "Home"
    },
    {
        link: "/blogs",
        title: "Blogs"
    },
    {
        link: "/playlist",
        title: "Playlists"
    },
]
const PageContent2 = [
    {
        link: "https://www.linkedin.com/in/jos%C3%A9-agust%C3%ADn-oliva-1710301b7/",
        title: "LinkedIn"
    },
    {
        link: "https://github.com/avil00liva",
        title: "Github"
    },
    {
        link: "",
        title: "---"
    },
]


const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 dark:bg-black'>
        <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
        <div className='w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 quini:grid-cols-3'>
            <div className='flex flex-col space-y-4'>
                {PageContent.map((link,index)=>{
                    return (
                        <>
                            <Link href={link.link} key={index}>
                                <a className='text-gray-500 hover:text-gray-600 transition'key={index + link.title}>
                                    {link.title}
                                </a>
                            </Link>
                        </>
                    )
                })}
            </div>
            <div className='flex flex-col space-y-4'>
                {PageContent2.map((link, index)=>{
                    return (
                        <>
                            <a className='text-gray-500 hover:text-gray-600 transition' target="_blank" rel='noopener noreferrer' key={index + link.title} href={link.link}>
                                {link.title}
                            </a>
                        </>
                    )
                })}
            </div>
        </div>
    </footer>
  )
}

export default Footer