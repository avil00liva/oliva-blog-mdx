import Link from 'next/link'
import React from 'react'

const MenuNav = ({show, setShow}) => {

  const handleClick = ()=> {
    setShow(false)
  }

  return (
    <div className={`h-[100vh] laptop:hidden w-full ${show ? "absolute z-50" : "hidden"}`}>
        <ul className='m-0 pt-6 pr-7 pb-0 pl-5 w-full h-full z-50 flex flex-col bg-gray-100 dark:bg-gray-900 list-none'>
            <li onClick={handleClick} className='mb-8 w-full whitespace-nowrap text-gray-900 dark:text-gray-300 font-bold text-sm dark:border-gray-300 border-b border-[rgb(207,206,206)]'>
                <Link href="/">
                  <a className='pb-4 flex decoration-inherit text-inherit'>Home</a>
                </Link>
            </li>
            <li onClick={handleClick} className='mb-8 w-full whitespace-nowrap text-gray-900 dark:text-gray-300 font-bold text-sm dark:border-gray-300 border-b border-[rgb(207,206,206)]'>
                <Link href="/blogs">
                  <a className='pb-4 flex decoration-inherit text-inherit'>Blogs</a>
                </Link>
            </li>
            <li onClick={handleClick} className='mb-8 w-full whitespace-nowrap text-gray-900 dark:text-gray-300 font-bold text-sm dark:border-gray-300 border-b border-[rgb(207,206,206)]'>
                <Link href="/playlist">
                  <a className='pb-4 flex decoration-inherit text-inherit'>Playlist</a>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default MenuNav