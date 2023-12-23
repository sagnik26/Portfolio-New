import React from 'react'
import { SkillCardProps } from './skillCard.interface'
import Image from 'next/image'

const skillCard: React.FC<SkillCardProps> = ({ logo, name, borderAlign = true }) => {
  return (
    <div className={`bg-gray-100 rounded-full w-[100%] md:w-[45%] flex flex-row justify-between p-5`}>
      {
        borderAlign ? 
        <>
          <Image src={logo} alt={name} style={{ objectFit: "contain" }} />
          <h2 className='font-bold text-xl flex flex-col justify-center'>{name}</h2>
        </> :
        <>
          <h2 className='font-bold text-xl flex flex-col justify-center'>{name}</h2>
          <Image src={logo} alt={name} />
        </>
      }

    </div>
  )
}

export default skillCard


