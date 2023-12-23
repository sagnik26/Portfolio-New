import Menubar from '@/components/Menubar'
import React from 'react'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

const Projects = () => {
  return (
    <main className="p-2">
      <div className='flex flex-row justify-center w-[100%] my-4 z-40'>
        <Menubar tab='projects' />
      </div>
      <div className='mx-5 my-10 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          projects.map((project: any) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <ProjectCard
                image={require('../../../public/assets/me.webp')} 
                title={project.title} 
                techStacks={project.techStacks} 
                description={project.description} 
                github={project.github} 
                website={project.website} 
              />
            )
          })
        }
      </div>
    </main>
  )
}

export default Projects
