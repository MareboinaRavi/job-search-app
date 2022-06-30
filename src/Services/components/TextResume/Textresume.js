import React from 'react'
import Buy from './Buy'
import Home from './Home'
import Footer from './Navbar/Footer'
// import '../TextResume/Textresume.css'

const Textresume = () => {
    return (
        <div style={{overflowX:"hidden"}}>
            <Home/>
            <Buy/>
            <Footer/>
        </div>
    )
}

export default Textresume
