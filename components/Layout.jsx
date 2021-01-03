import React from 'react'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Header from './Header/Header'
export default function Layout({children})
{
    return(
        <>
            <Header/>
            <Banner/>
            {children}
            <Footer/>
        </>
    )
}