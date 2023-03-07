import React, { useState } from 'react'
import './LandingPage.css'
import {
    Box,
    Typography,
} from '@mui/material'

import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import { Navbar, Banner, Difference, Courses, FAQ, ContactUs, Review, Footer, SideContact } from '../../components'
const LandingPage = () => {
    const [toggle, setToggle] = useState(false);
    const showNav = () => {
        setToggle((prev) => !prev)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className='landing-page'>
            <Navbar toggle={toggle} setToggle={setToggle} showNav={showNav} />
            <Box className='side-contact' onClick={handleClickOpen}>
                <div className='background-side-contact'></div>
                <Typography variant='h3' className='side-contact-text'>CONTACT US</Typography>
            </Box>
            <Box className='content' onClick={(e) => setToggle(false)}>
                <SideContact open={open} handleClose={handleClose} />
                <Banner />
                <Difference />
                <Courses />
                <FAQ />
                <ContactUs />
                <Review />
                <Box className='scroll-to-top '>
                    <KeyboardDoubleArrowUpOutlinedIcon onClick={scrollToTop} />
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default LandingPage