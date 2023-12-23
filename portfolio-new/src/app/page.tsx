"use client";
import Image from 'next/image'
import Menubar from '@/components/Menubar'
import SkillCard from '@/components/SkillCard';
import useWindowSize from '@/global/useWindowSIze';
import Achievements from '@/components/Achievements';

export default function Home() {
  const isMobile = useWindowSize("mobile");

  return (
    <div className="p-2 pb-10 h-[120vh]">
      <div className='flex flex-row justify-center w-[100%] my-4 z-40'>
        <Menubar tab='home' />
      </div>
      <div className='grid grid-cols-1 grid-rows-2 gap-20 lg:grid-cols-2 lg:gap-10 mx-5 lg:mx-10 z-0 mt-10 lg:mt-20 lg:h-[400px]'>
        <div className='col-span-1 flex flex-row justify-center items-center h-[350px] lg:h-[380px] z-0'>
          <Image 
            src={require("../../public/assets/me.webp")} 
            alt={'Picture of the author'}
            height={350}
            width={350} 
            style={{borderRadius: "200px" }} 
          />
        </div>
        <article className='col-span-1 z-0 h-[390px] -mt-10 lg:mt-0'>
          <h1 className='text-[45px] font-bold font-roboto leading-[50px] max-lg:text-center'>Frontend Web Developer</h1>
          <p className='text-[16px] text-[#65656d] leading-[28px] mt-[15px] pt-[10px] h-[200px] max-lg:text-center break-word'>
            I am an aspiring Frontend Developer, who loves to build dynamic and user-centric 
            web experiences. Proficient in a range of technologies, my expertise lies in JavaScript, 
            ReactJS, and NextJS. With a keen eye for detail and a passion for creating visually appealing 
            and responsive interfaces, I am dedicated to deliver seamless and engaging user interactions &
            also passionate about creating high-quality code that follows best practices and industry standards. 
          </p>
        </article>
      </div>
      <div className='mx-5 lg:mx-10 mt-[95px] md:-mt-24 lg:mt-20 z-0'>
        <h2 className='font-extrabold text-[36px] mb-5'>Skills</h2>
        <div className='flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-10 justify-between'>
          <SkillCard logo={require("../../public/assets/html.png")} name='HTML'  />
          <SkillCard logo={require("../../public/assets/css.png")} name='CSS' borderAlign={isMobile ? false : true} />
          <SkillCard logo={require("../../public/assets/js.png")} name='JavaScript' />
          <SkillCard logo={require("../../public/assets/typescript.png")} name='TypeScript' borderAlign={isMobile ? false : true} />
          <SkillCard logo={require("../../public/assets/react.png")} name='ReactJS' />
          <SkillCard logo={require("../../public/assets/next.png")} name='NextJS' borderAlign={isMobile ? false : true} />
        </div>
      </div>
      <div className='mx-5 lg:mx-10 mt-[45px] lg:mt-20 md:mb-[50px] z-0'>
        <h2 className='font-extrabold text-[36px] mb-5'>Achievements</h2>
        <div className='w-[100%]'>
          <Achievements 
            logo={require('../../public/assets/double-tick.png')} 
            title={'Smart India Hackathon (Software Edition) 2020 winner'} 
            description={'Worked on developing the UI and Authentication system for the project.'}
          />
          <Achievements 
            logo={require('../../public/assets/double-tick.png')} 
            title={'Published a research paper on IEEE B-HTC 2020 Edition'} 
            description={`I along with other members worked on "Non-contact Vibration Measurement System For Structural Health Monitoring"`}
          />
        </div>
      </div>
      <div className='h-[40px] md:h-[10px]'>

      </div>
    </div>
  )
}
