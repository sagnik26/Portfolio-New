"use client";
import Menubar from '@/components/Menubar'
import React, {useEffect, useState} from 'react'
import Timeline from '@/components/Timeline'

const Blogs = () => {
  const [myBlogs, setMyBlogs] = useState<Array<any>>([]);
  useEffect(() => {
    (async () => {
      const blogs = await fetch('https://dev.to/api/articles?username=sagnik26').then((res) => res.json())
      if(blogs.length > 0) {
        console.log(blogs);
        setMyBlogs(blogs);
      }
    })()
  }, [])

  return (
    <main className="p-2">
      <div className='flex flex-row justify-center w-[100%] my-4 z-40'>
        <Menubar tab='blogs' />
      </div>
      <div className='mx-5 lg:mx-10 mt-10'>
        <Timeline blogs={myBlogs} />
      </div>
    </main>
  )
}

export default Blogs
