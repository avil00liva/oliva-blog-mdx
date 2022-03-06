import {  getAllFilesMetaData } from '../lib/mdx'
import BlogsPost from '../src/components/BlogsPost'


export default function BlogsPage({posts}) {

  return (
    <>
      <div className='bg-white dark:bg-black text-black dark:text-white w-full min-h-screen'>
        <BlogsPost posts={posts}/>
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