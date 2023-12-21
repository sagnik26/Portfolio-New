
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

  return (
    <html lang="en">
      {
        isMobile ? 
        <body className={`${inter.className}`}>
          {children}
        </body> : 
        <body className={`${inter.className} grid grid-cols-6 lg:overflow-hidden`}>
          <div className='bg-[#fafafa] col-span-1 h-screen'>
          </div>
      
          <div className='col-span-4 h-screen lg:overflow-scroll lg:overflow-x-hidden'>
              {children}
          </div>
            
          <div className='bg-[#fafafa] col-span-1 h-screen'>
          </div>
        </body>
      }
    </html>
  )
}
