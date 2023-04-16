import React from 'react'
import { Footer, Navbar } from '..'


const SharedLayout = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default SharedLayout