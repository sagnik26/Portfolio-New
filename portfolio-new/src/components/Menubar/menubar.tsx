import React from 'react'
import Link from 'next/link'

const Menubar = () => {
  return (
    <div className='flex flex-row justify-evenly items-center w-[380px] shadow-lg h-[40px] rounded-[40px] m-2'>
      <Link href="/"><span className='text-sm'>Home</span></Link>
      <Link href="/projects"><span className='text-sm'>Projects</span></Link>
      <Link href="/blogs"><span className='text-sm'>Blogs</span></Link>
      <Link href="/contact"><span className='text-sm'>Contact</span></Link>
    </div>
  )
}

export default Menubar
