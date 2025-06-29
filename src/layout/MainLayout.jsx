import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router'
import Footer from '../component/Footer'

const MainLayout = () => {
  return (
    <div>
       <Navbar></Navbar>
       <div>
        <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default MainLayout
