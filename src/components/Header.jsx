import React, { useState } from 'react'
import {BsSun, BsMoon} from "react-icons/bs"
import {RiMenu4Fill} from "react-icons/ri"
import { useTheme } from 'next-themes'
import MenuNav from './MenuNav'
import Link from 'next/link'

const Headernav = () => {
  const {systemTheme, theme, setTheme} = useTheme()
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme

    if(currentTheme === "dark") {
      return (
        <div className='w-9 h-9 text-lg flex justify-center items-center rounded-md hover:border-2 border-white bg-gray-600 cursor-pointer text-bold' onClick={()=> setTheme("light")}>
          <BsSun className='text-gray-300 dark:text-gray-300 text-bold' />
        </div>
      )
    }

    else {
      return (
        <div className='w-9 h-9 text-lg text-bold flex justify-center items-center border-2 hover:border-gray-400 rounded-md bg-gray-200 cursor-pointer dark:border-white dark:bg-gray-600' onClick={()=> setTheme("dark")}>
          <BsMoon className='text-bold' />
        </div>
      )
    }
  }

  return (
    <>
      <nav className='dark:bg-black flex justify-between items-center px-4 pt-8 pb-8 tablet:pb-16 w-full min-h-[60px] tablet:max-w-3xl tablet:m-auto laptop:flex-row-reverse'>
          <RiMenu4Fill className='laptop:hidden text-2xl cursor-pointer ' onClick={handleShow}/>
          {renderThemeChanger()}
          <ul className='hidden items-center gap-3 laptop:flex'>
            <li className='w-full whitespace-nowrap text-gray-900 dark:text-gray-300 font-bold cursor-pointer'>
              <Link href="/">
                <a className='font-semibold text-gray-800 dark:text-gray-200 hidden laptop:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'>Home</a>
              </Link>
            </li>
            <li className='w-full whitespace-nowrap text-gray-900 dark:text-gray-300 font-bold cursor-pointer'>
              <Link href="/blogs">
                <a className='font-semibold text-gray-800 dark:text-gray-200 hidden laptop:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'>Blogs</a>
              </Link>
            </li>
            <li className='w-full whitespace-nowrap text-gray-900 dark:text-gray-300 font-bold cursor-pointer'>
              <Link href="/playlist">
                <a className='font-semibold text-gray-800 dark:text-gray-200 hidden laptop:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'>Playlist</a>
              </Link>
            </li>
          </ul>
      </nav>
      <MenuNav show={show} setShow={setShow}/>
    </>
  )
}

export default Headernav