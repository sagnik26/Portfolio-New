"use client";

import Image from 'next/image'
import Link from 'next/link'
import Menubar from '@/components/Menubar'

export default function Home() {

  return (
    <main className="p-2">
      <div className='flex flex-row justify-center w-[100%] my-4 sticky top-7 lg:top-10 z-40'>
        <Menubar tab='home' />
      </div>
      <div className='grid grid-cols-1 grid-rows-2 gap-20 mx-5 lg:grid-cols-2 lg:gap-10 lg:mx-10 z-0 lg:mt-20'>
        <div className='col-span-1 pt-[25px] flex flex-row justify-start z-0'>
          <Image 
            src={require("../../public/assets/me.webp")} 
            alt={'Picture of the author'}
            height={350}
            width={350} 
            style={{objectFit: "contain", borderRadius: "30px", transform: `rotate(-5deg)`}} 
          />
        </div>
        <article className='col-span-1 mt-[10px] z-0'>
          <h1 className='text-[45px] font-bold font-roboto leading-[50px]'>Frontend Web Developer</h1>
          <p className='text-[16px] text-[#65656d] leading-[28px] mt-[15px] pt-[10px] h-[200px]'>
            I am an aspiring Frontend Developer, who loves to build dynamic and user-centric 
            web experiences. Proficient in a range of technologies, my expertise lies in JavaScript, 
            ReactJS, and NextJS. With a keen eye for detail and a passion for creating visually appealing 
            and responsive interfaces, I am dedicated to deliver seamless and engaging user interactions &
            also passionate about creating high-quality code that follows best practices and industry standards. 
          </p>
        </article>
      </div>
    </main>
  )
}
