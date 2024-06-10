import React from 'react'
import { StickyNavbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
   <section>
    <StickyNavbar/>
    <Outlet/>
    </section> 
    </>
  )
}
