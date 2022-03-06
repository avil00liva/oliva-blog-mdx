import Head from 'next/head'
import { useState } from 'react'
import {  getAllFilesMetaData } from '../lib/mdx'
import MainContent from '../src/components/MainContent'


export default function Home({posts}) {
  const [lights, SetLights] = useState(false)

  const handleLights = ()=> {
    SetLights(!lights)
  }

  return (
    <>
      <Head>
        <title>Oliva Personal Blog</title>
      </Head>
      <div className='bg-white dark:bg-black text-black dark:text-white w-full min-h-screen'>
        <MainContent posts={posts}/>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetaData()

  return {
    props: {posts}
  }
}