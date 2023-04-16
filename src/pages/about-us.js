import React from 'react'
import { About, OurStory } from '../exports'
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
})

export const aboutUs = () => {

  return (
    <article className='min-h-screen'>
        <About poppins={poppins}/>
        <OurStory inter={inter}/>
    </article>
  )
}

export default aboutUs