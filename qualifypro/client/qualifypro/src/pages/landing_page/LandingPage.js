import React from 'react'
import './LandingPage.css'
import { Box } from '@mui/material'
import { Navbar, Banner, Difference, Courses, FAQ, ContactUs, Review, Footer } from '../../components'
const LandingPage = () => {
    return (
        <Box className='landing-page'>
            <Navbar />
            <Box className='content'>
                <Banner />
                <Difference />
                <Courses />
                <FAQ />
                <ContactUs />
                <Review />
            </Box>
            <Footer />
        </Box>
    )
}

export default LandingPage