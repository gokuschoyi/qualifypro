import React, { useEffect} from 'react'
import './Navbar.css'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = (props) => {
    const { toggle, setToggle, showNav } = props;
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
    // console.log(md)
    useEffect(() => {
        if (md) {
            document.getElementsByClassName('navbar-links')[0].classList.remove('nav-show');
            document.getElementsByClassName('navbar-links')[0].classList.add('nav-hide');
        }
        else {
            document.getElementsByClassName('navbar-links')[0].classList.remove('nav-hide');
            document.getElementsByClassName('navbar-links')[0].classList.add('nav-show');
        }
    })
    useEffect(() => {
        if (!md) {
            setToggle(false)
        }
    }, [md, setToggle])

    const hamburgerContent = () => {
        const mountedStyle = { animation: "inAnimation 250ms ease-in" };
        const unmountedStyle = {
            animation: "outAnimation 270ms ease-out",
            animationFillMode: "forwards"
        };
        return (
            <Box className="ham-nav" style={toggle ? mountedStyle : unmountedStyle}>
                <Box className='ham-navbar-links'>
                    <a href='#home' className='ham-nav-link'>HOME</a>
                    <a href='#aboutus' className='ham-nav-link'>ABOUT US</a>
                    <a href='#courses' className='ham-nav-link'>COURSES</a>
                    <a href='#faq' className='ham-nav-link'>F.A.Q</a>
                    <a href='#contactus' className='ham-nav-link'>CONTACT US</a>
                    <a href='#reviews' className='ham-nav-link'>REVIEWS</a>
                </Box>
            </Box>
        )
    }

    return (
        <Box className='navbar-container'>
            <Box className='navbar-logo'>
                <a className='logo' href='#home'>QualifyPro</a>
            </Box>
            <Box className='navbar-links'>
                <a href='#home' className='nav-link navbar-hover-underline-animation'>HOME</a>
                <a href='#aboutus' className='nav-link navbar-hover-underline-animation'>ABOUT US</a>
                <a href='#courses' className='nav-link navbar-hover-underline-animation'>COURSES</a>
                <a href='#faq' className='nav-link navbar-hover-underline-animation'>F.A.Q</a>
                <a href='#contactus' className='nav-link navbar-hover-underline-animation'>CONTACT US</a>
                <a href='#reviews' className='nav-link navbar-hover-underline-animation'>REVIEWS</a>
            </Box>
            <Box className='getstarted-hamburger'>
                <Box className='get-started'>
                    <a href='/courses' className='get-started-link'>GET STARTED</a>
                </Box>
                {md &&
                    <Box className="hamburger-icon" mr={2}>
                        <MenuIcon onClick={showNav} className="hamburger" />
                    </Box>
                }
            </Box>
            {hamburgerContent()}
        </Box>
    )
}

export default Navbar