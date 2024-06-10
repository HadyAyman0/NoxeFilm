import React from 'react'
import { StickyNavbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
   <section>
    <StickyNavbar/>
    <Outlet/>
    <Footer/>
    </section> 
    </>
  )
}
