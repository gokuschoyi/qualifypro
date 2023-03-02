import React, { useEffect, useState } from 'react'
import './CourseNavbar.css'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink } from 'react-router-hash-link'
const CourseNavbar = () => {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const [toggle, setToggle] = useState(false);
    const showNav = () => {
        setToggle((prev) => !prev)
    }
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
    }, [md])

    const hamburgerContent = () => {
        const mountedStyle = { animation: "inAnimation 250ms ease-in" };
        const unmountedStyle = {
            animation: "outAnimation 270ms ease-out",
            animationFillMode: "forwards"
        };
        return (
            <Box className="ham-nav" style={toggle ? mountedStyle : unmountedStyle}>
                <Box className='ham-navbar-links'>
                    <ul>
                        <li className='ham-nav-link'><HashLink to='/#home'>HOME</HashLink></li>
                        <li className='ham-nav-link'><HashLink to='/#aboutus'>ABOUT US</HashLink></li>
                        <li className='ham-nav-link'><HashLink to='/#courses'>COURSES</HashLink></li>
                        <li className='ham-nav-link'><HashLink to='/#faq'>F.A.Q</HashLink></li>
                        <li className='ham-nav-link'><HashLink to='/#contactus'>CONTACT US</HashLink></li>
                        <li className='ham-nav-link'><HashLink to='/#reviews'>REVIEWS</HashLink></li>
                    </ul>
                </Box>
            </Box>
        )
    }

    return (
        <Box className='navbar-container'>
            <Box className='navbar-logo'>
                <HashLink className='logo' to='/#home'>QualifyPro</HashLink>
                
            </Box>
            <Box className='navbar-links'>
                <ul className='navigation-li-links'>
                    <li className='nav-link'><HashLink to='/#home'>HOME</HashLink></li>
                    <li className='nav-link'><HashLink to='/#aboutus'>ABOUT US</HashLink></li>
                    <li className='nav-link'><HashLink to='/#courses'>COURSES</HashLink></li>
                    <li className='nav-link'><HashLink to='/#faq'>F.A.Q</HashLink></li>
                    <li className='nav-link'><HashLink to='/#contactus'>CONTACT US</HashLink></li>
                    <li className='nav-link'><HashLink to='/#reviews'>REVIEWS</HashLink></li>
                </ul>
            </Box>
            <Box className='getstarted-hamburger'>
                <Box className='get-started'>
                    <a href='getstarted' className='get-started-link'>GET STARTED</a>
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

export default CourseNavbar