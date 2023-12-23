import React from 'react'
import { SkillCardProps } from './skillCard.interface'
import Image from 'next/image'

const skillCard: React.FC<SkillCardProps> = ({ logo, name, borderAlign = true }) => {
  return (
    <div className={`bg-[#fafafa] drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)] rounded-tl-full rounded-tr-full ${borderAlign ? 'rounded-bl-full' : 'rounded-br-full'} w-[100%] md:w-[45%] flex flex-row justify-between p-5`}>
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


