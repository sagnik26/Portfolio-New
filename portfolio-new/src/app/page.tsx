import Image from 'next/image'
import Link from 'next/link'
import Menubar from '@/components/Menubar'

export default function Home() {
  return (
    <main className="p-2">
      <div className='flex flex-row justify-center w-[100%] my-4'>
        <Menubar tab='home' />
      </div>
      <div className='border-2'>
        <h1>hello</h1>
      </div>
    </main>
  )
}
