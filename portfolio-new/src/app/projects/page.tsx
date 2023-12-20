import Menubar from '@/components/Menubar'
import React from 'react'

const Projects = () => {
  return (
    <main className="p-2">
      <div className='flex flex-row justify-center w-[100%] my-4 sticky top-7 lg:top-10 z-40'>
        <Menubar tab='projects' />
      </div>
      <h1>Projects</h1>
    </main>
  )
}

export default Projects
