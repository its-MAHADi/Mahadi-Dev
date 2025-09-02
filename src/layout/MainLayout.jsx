import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router'
import Footer from '../component/Footer'
import SplashCursor from '../component/SplashCursor'

const MainLayout = () => {
  return (
    <div className=''>
      <SplashCursor></SplashCursor>
       <Navbar></Navbar>
       <div>
        <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default MainLayout
