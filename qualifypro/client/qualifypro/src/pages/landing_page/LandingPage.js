import React,{useState} from 'react'
import './LandingPage.css'
import { Box } from '@mui/material'
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import { Navbar, Banner, Difference, Courses, FAQ, ContactUs, Review, Footer } from '../../components'
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

    return (
        <Box className='landing-page'>
            <Navbar toggle={toggle} setToggle={setToggle} showNav={showNav} />
            <Box className='content' onClick={(e) => setToggle(false)}>
                <Banner />
                <Difference />
                <Courses />
                <FAQ />
                <ContactUs />
                <Review />
                <Box className='scroll-to-top '>
                    <KeyboardDoubleArrowUpOutlinedIcon onClick={scrollToTop}/>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default LandingPage