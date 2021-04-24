import React from 'react'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="container main-contaniner">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
