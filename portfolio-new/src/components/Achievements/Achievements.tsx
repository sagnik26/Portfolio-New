import React from 'react'
import Image from 'next/image'
import { AchievementProps } from './Achievements.interface'

const Achievements: React.FC<AchievementProps> = ({ logo, title, description }) => {
  return (
    <div className='mb-4'>
      <div className='flex flex-row'>
        <Image src={logo} alt='double-tick icon' style={{ objectFit: "contain" }} />
        <h1 className='ml-2 text-md text-gray-800 font-semibold'>{title}</h1>
      </div>
      <h2 className='ml-8 text-sm text-[#65656d]'>{description}</h2>
    </div>
  )
}

export default Achievements



