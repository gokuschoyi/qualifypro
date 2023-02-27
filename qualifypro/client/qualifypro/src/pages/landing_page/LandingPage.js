import React from 'react'
import './LandingPage.css'
import { Box } from '@mui/material'
import { Navbar, Banner, Difference, Courses } from '../../components'
const LandingPage = () => {
    return (
        <Box className='content'>
            <Navbar />
            <Banner />
            <Difference />
            <Courses />
        </Box>
    )
}

export default LandingPage