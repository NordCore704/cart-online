import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { apparelIcon } from '@/images'

const Fashion = () => {
  return (
    <div className=" rounded-md flex flex-col items-center justify-center shadow-md p-4 text-center cartoon">
      <Image alt="accessories-icon" src={apparelIcon} />
      <h3 className="text-lg font-semibold">Apparel</h3>
      <p>CartO provides a vast and never ending store of different kinds of apparel, fashion is not limited in our store, we have everything!</p>
      <Link href={'/products'} className='cartoon flex items-center justify-center h-10 w-26 mt-4 p-3 rounded-md bg-[#ff0035]'>Check It Out</Link>
    </div>
  )
}

export default Fashion