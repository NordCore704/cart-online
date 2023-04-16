import React from 'react'
import { logo } from '@/images'
import Image from 'next/image'
import Link from 'next/link'
import { mail, linkedIn, instagram, twitter } from '@/images'
import { useRouter } from 'next/router'
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
})

const Footer = () => {
  const router = useRouter
  const currentRoute = router.pathname

  return (
    <footer className='foot border-y border-black h-[50vh]  relative mt-60 flex flex-col gap-4 items-center justify-end bg-periwinkle p-5'>
      <div className="logo-motto--div border border-black h-[30vh] w-[55%] bg-[#48acf0] absolute left-1/4 -top-1/4 rounded-md cartoon flex flex-col items-center justify-center gap-4 p-4">
        <div className="flex items-center justify-self-start">
        <Image src={logo} alt='logo'width={50}/>
        <p className='font-semibold'>CartO</p>
        </div>
        <p className='uppercase text-lg font-semibold'>Shop With Us Today!</p>
        <Link href={'/store'}  className={`btn btn-accent bg-schemeRed hover:bg-[#5cddb4] text-black uppercase font-semibold cartoon foot-btn ${inter.className}`}>Go Now!</Link>
      </div>
      <div className="links-foot flex gap-4 items-center justify-center">
        <Link href={'/'} className={currentRoute === '/' ? 'active' : `font-semibold text-black hover:text-schemeRed transition`}>Home</Link>
        <Link href={'/about-us'} className='font-semibold text-black hover:text-schemeRed transition' >About Us</Link>
        <Link href={'/store'} className="font-semibold text-black hover:text-schemeRed transition">Shop</Link>
        <Link href={'/contact'} className="font-semibold text-black hover:text-schemeRed transition">Contact</Link>
      </div>
      <p className='text-lg uppercase text-black font-semibold'>Our Socials</p>
      <div className="social--div flex gap-3">
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <Image alt='instagram' width={40} className='hover:cursor-pointer' src={instagram}/>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <Image alt='twitter' className='hover:cursor-pointer' width={40} src={twitter}/>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <Image alt='linkedin'className='hover:cursor-pointer' width={40} src={linkedIn}/>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <Image alt='mail' width={40} className='hover:cursor-pointer' src={mail}/>
        </a>
      </div>
      <p className={inter.className}>© 2023 CartO — Shop for Everything!</p>
    </footer>
  )
}

export default Footer