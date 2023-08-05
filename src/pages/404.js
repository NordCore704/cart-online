import React from 'react'
import { NotFound } from '@/exports'

const error = () => {
  return (
   <section className='min-h-screen w-full flex items-center justify-center'>
    <NotFound />
   </section>
  )
}

export default error