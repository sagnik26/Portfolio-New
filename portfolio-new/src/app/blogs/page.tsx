import Menubar from '@/components/Menubar'
import React from 'react'

const Blogs = () => {
  return (
    <main className="p-2">
      <div className='flex flex-row justify-center w-[100%] my-4'>
        <Menubar tab='blogs' />
      </div>
      <h1>Blogs</h1>
    </main>
  )
}

export default Blogs
