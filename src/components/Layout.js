import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function Layout({ children }) {
    return (
        <div className='dark:bg-gray-900 h-screen'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout