'use client'

import ResponsiveImg from '@/components/responsive-img'
import Card from '@/components/card'

export default function Home() {

  return (
    <main className='flex justify-center bg-Light-pink '>
      <div className='flex flex-col items-center'>
        <ResponsiveImg />
        
        <Card />
      </div>
      <div className='h-screen'></div>
    </main>
  )
}
