import React from 'react'
import { studio, street, bagModel, indians, paris } from '@/images'

import Link from 'next/link'
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa'

const PhotoCollage = ({inter, poppins}) => {
  return (
    <div className='flex flex-col items-center justify-between gap-8 p-5 mt-10 bg-periwinkle border-t border-black'>
        <div className="w-full h-[70%] relative flex justify-between ">
            <Image src={indians} className='rounded-full w-[32%] border border-black' alt='models'/>
            <Image src={paris} className='border border-black bg-schemeBlue rounded-full w-[30%] absolute top-10 left-[33%]' alt='models'/>
            {/* <Image src={street} className=' rounded-full w-[30%] absolute '/> */}
            <div className="flex flex-col self-end justify-self-end gap-4 w-[35%]">
            <Image src={bagModel} className='rounded-full border border-black' alt='models'/>
            <FaPlus className='self-center text-black'/>
            <Image src={studio} className='rounded-full border border-black' alt='models'/>
            </div>
            {/* <Image src={bagModel} className='rounded-full w-[30%] absolute top-25 lg:top-25 right-10'/>
            <Image src={studio} className='rounded-full w-[30%] absolute lg:top-0 lg:right-20 mt-10 right-64'/> */}
          
        </div>
        <div className="flex items-center flex-col gap-4">
            <div className="text-center text-black">
            <p className={`${poppins.className} font-bold text-4xl uppercase`}>Express</p>
            <p className={`${poppins.className} font-semibold text-4xl uppercase`}>Your<span className='font-bold'>self</span></p>
            </div>
                <Link href={'/store'} className={`p-3 w-64 text-center border-black text-black border text-2xl bg-schemeBlue rounded-full hover:bg-schemeRed transition-colors duration-300 hover:text-white ${poppins.className}`}>See How</Link>
        </div>
    </div>
  )
}

export default PhotoCollage