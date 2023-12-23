import Menubar from '@/components/Menubar'
import React from 'react'

const Contact = () => {
  return (
    <main className="p-2">
      <div className='flex flex-row justify-center w-[100%] my-4 z-40'>
        <Menubar tab='contact' />
      </div>
      <div className='mx-5 lg:mx-10 mt-10'>
        <h1 className='font-bold text-[45px] break-word'>{`Let's`} Get in Touch: Ways to Connect with Me</h1>
        <h2 className='mt-5 text-[24px] text-gray-400'>Thank you for your interest in getting in touch with me.</h2>
        <div className='mt-5'></div>
      </div>
    </main>
  )
}

export default Contact
