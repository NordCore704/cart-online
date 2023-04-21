import React from 'react'
import { jeanKids, studio } from '@/images'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const AboutLink = ({poppins, inter}) => {
  return (
    <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row rounded-lg p-8 overflow-hidden items-center justify-center gap-3'>
        <div className="jean-div flex rounded-md lg:w-[50%] md:w-[50%] w-[100%]">
        <Image src={jeanKids} alt='jean-kids'/>
        </div>

        <div className="jean-div flex items-center justify-center flex-col p-3 gap-3 w-[100%] lg:w-[50%]">
            <p className={`text-3xl font-bold  ${poppins.className}`}>What We Do</p>
            <p className={`${inter.className} text-center`}>
                CartO is an online e-commerce store that serves as a provider of every single one of your every material need ranging from fashion to electronics, etc.
            </p>
            <Link href={'/about-us'} className={`p-3 text-center flex items-center gap-3 capitalize rounded-sm hover:bg-schemeBlue duration-300 transition-colors bg-schemeDarkBlue text-schemeWhite ${poppins.className}`}>Learn more <FaArrowRight/> </Link>
        </div>
    </div>
  )
}

export default AboutLink