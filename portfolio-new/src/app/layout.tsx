
"use client";

import { Inter } from 'next/font/google'
import './globals.css'
import useWindowSize from '@/global/useWindowSIze'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isMobile = useWindowSize("mobile");
  const isTablet = useWindowSize("laptop")

  return (
    <html lang="en">
      {
        isTablet ? 
        <body className={`${inter.className} overflow-x-hidden`}>
          {children}
        </body> : 
        <body className={`${inter.className} grid grid-cols-6 md:overflow-hidden`}>
          <div className='bg-[#fafafa] col-span-1 h-screen'>
          </div>
      
          <div className='col-span-4 h-screen md:overflow-scroll md:overflow-x-hidden'>
              {children}
          </div>
            
          <div className='bg-[#fafafa] col-span-1 h-screen'>
          </div>
        </body>
      }
    </html>
  )
}
