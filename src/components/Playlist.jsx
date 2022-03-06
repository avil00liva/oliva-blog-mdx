import React from 'react'
import Layout from "./Layout"

const PlayItems = [
    {
        id: "01",
        title: "3 AM Coding Session - Lofi Hip Hop Mix [Study & Coding Beats]",
        duration: "1:34:50",
        link: "https://youtu.be/_ITiwPMUzho"
    },
    {
        id: "02",
        title: "3:30 AM Coding Session - Lofi Hip Hop Mix [Study & Coding Beats]",
        duration: "1:38:35",
        link: "https://youtu.be/8nXqcugV2Y4"
    },
    {
        id: "03",
        title: "code-fi / lofi beats to code/relax to",
        duration: "1:00:20",
        link: "https://youtu.be/f02mOEt11OQ"
    },
    {
        id: "04",
        title: "Galaxy Coding Session - Lofi Hip Hop Mix [Study & Coding Beats]",
        duration: "1:40:19",
        link: "https://youtu.be/uNulhfvsY2I"
    },
]

const Playlist = () => {
  return (
    <Layout>
        <h1 className='text-2xl tablet:text-4xl tracking-tight font-extrabold mb-6'>Coding Session ~ Playlist</h1>
        <p className='dark:text-gray-500 mb-6'>Nice playlists for short coding sessions. You will enjoy it 🎧💖.</p>
{PlayItems.map((item,index)=>{
    return (
        <>
            <a href={item.link} className='w-full' aria-label='3 AM Coding Session - Lofi Hip Hop Mix [Study & Coding Beats]' target="_blank" rel='noopener noreferrer' key={index}>
                <div className='w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all'>
            <div className='flex flex-col quini:flex-row justify-between items-baseline min-h-[56px]'>
                <div className='flex items-center'>
                    <div className='dark:text-gray-300 text-gray-400 text-left mr-6'>
                        {item.id}
                    </div>
                    <h4 className='text-lg font-medium w-full text-gray-800 dark:text-gray-100'>
                        {item.title}
                    </h4>
                </div>
                <div className='flex items-center mt-2 quini:mt-0 w-full quini:w-auto justify-between'>
                    <p className='text-gray-500 dark:text-gray-400 text-left quini:text-right w-32 tablet:mb-0 mr-2 ml-10 quini:ml-0'>
                        {item.duration}
                    </p>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-gray-500 dark:text-gray-100' viewBox='0 0 20 30' fill='currentColor'>
                        <path fillRule="evenodd" d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
                </div>
            </a>
        </>
    )
})
    }
    </Layout>
  )
}

export default Playlist