import React from 'react'
import { gadgetsIcon } from '@/images'
import Image from 'next/image'
import Link from 'next/link'

const Gadgets = () => {
  return (
    <div className="rounded-md flex flex-col items-center justify-center shadow-md p-4 text-center cartoon">
    <Image alt="accessories-icon" src={gadgetsIcon} />
    <h3 className="text-lg font-semibold">Gadgets</h3>
    <p>Fans of gizmos are covered nicely, we have all kinds of gadgets, you name it, we deliver it to you straight up, jump in and pick what suits you</p>
    <Link href={'/products'} className='cartoon flex items-center justify-center h-5 w-24 mt-4 p-3 rounded-md bg-[#48acf0] uppercase'>Jump In</Link>
  </div>
  )
}

export default Gadgets