import Menubar from '@/components/Menubar'
import React from 'react'

const Contact = () => {
  return (
    <main className="p-2">
      <div className='flex flex-row justify-center w-[100%] my-4 sticky top-7 lg:top-10 z-40'>
        <Menubar tab='contact' />
      </div>
      <h1>Contact</h1>
    </main>
  )
}

export default Contact
