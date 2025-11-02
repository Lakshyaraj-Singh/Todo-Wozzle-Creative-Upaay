import React from 'react'
import { Outlet } from "react-router";

import { Footer } from './Components/Footer';
import { SlideMenu } from './Components/Main/SideMenu';
export const Applayout = () => {

    return(
        <>
        <div className='flex'>
        <div className='w-1/5'>

        <SlideMenu/>
        </div>
        <div className='w-4/5'> 
        <Outlet/>
        </div>

        </div>
        <Footer/>
        </>
    )
}