import React from 'react'
import { errorImage } from '@/images'
import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
})


const NotFound = () => {
  return (
    <div className='h-full flex items-center flex-col justify-center gap-3'>
        <Image src={errorImage}/>
        <p className={`${poppins.className} font-semibold p-5 text-center`}>The route that you have requested for does not exist on the server👾</p>
        <Link href={'/'} className={`${inter.className} text-center capitaliize font-bold p-3 bg-[#53db] border-2 border-schemeBlue rounded-md hover:bg-schemeRed hover:border-green-500 duration-300 transition-colors `}>Back to home</Link>
    </div>
  )
}

export default NotFound