import React from 'react'
import './Footer.css'
import { Box, Typography, TextField, Button } from '@mui/material'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
const Footer = () => {
    return (
        <Box className='footer-container'>
            <Box className='footer-container-main'>
                <Box className='column-one'>
                    <Box className='footer-main'>
                        <Box>
                            <Typography variant='h2' fontWeight='400' color='white'>QualifyPro</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' fontWeight='400' color='white'>Building Strong Foundations, One Career at a Time</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' textAlign='justify' fontWeight='300' color='white'>Helping individual builders and contractors build successful and fulfilling careers in the industry, and our commitment to being a partner and support system for the community.</Typography>
                        </Box>
                    </Box>
                    <Box className='footer-subscribe'>
                        <Box>
                            <Typography variant='h5' fontWeight='400' color='white'>Subscribe to our weekly newsletter</Typography>
                        </Box>
                        <Box className='subscribe-button'>
                            <TextField
                                size='small'
                                id="outlined-basic"
                                label="Enter your Email"
                                variant="outlined"
                                sx={{
                                    width: 'fill-available',
                                    
                                    '& label.Mui-focused': {
                                        color: 'white',
                                    },
                                    '& label': {
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#1098F7',
                                        },
                                    },
                                }} />
                            <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                padding: '0px 5px 0px 5px',
                                ':hover': {
                                    color: 'white !important',
                                    backgroundColor: '#f76e39 !important',
                                },
                            }} >Subscribe</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className='column-two'>
                    <Box className='footer-links'>
                        <ul>
                            <li>
                                <Typography variant='h5' fontWeight='400' color='white'><a className='link hover-underline-animation' href='#faq' >F.A.Q's</a></Typography>
                            </li>
                            <li>
                                <Typography className='link-hover' variant='h5' fontWeight='400' color='white'><a className='link hover-underline-animation' href='#faq' >Blogs</a></Typography>
                            </li>
                            <li>
                                <Typography className='link-hover' variant='h5' fontWeight='400' color='white'><a className='link hover-underline-animation' href='#faq' >Terms & Conditions</a></Typography>
                            </li>
                            <li>
                                <Typography className='link-hover' variant='h5' fontWeight='400' color='white'><a className='link hover-underline-animation' href='#faq' >Privacy Policy</a></Typography>
                            </li>
                            <li>
                                <Typography className='link-hover' variant='h5' fontWeight='400' color='white'><a className='link hover-underline-animation' href='#faq' >Refund Policy</a></Typography>
                            </li>
                        </ul>
                    </Box>
                </Box>
                <Box className='column-three'>
                    <Box className='footer-links-two'>
                        <ul>
                            <li>
                                <Typography className='link-hover' variant='h5' fontWeight='400' color='white'><a className='link hover-underline-animation' href='#faq' >Register Now</a></Typography>
                            </li>
                            <li>
                                <Typography className='link-hover' variant='h5' fontWeight='400' color='white'><a className='link hover-underline-animation' href='#faq' >Training</a></Typography>
                            </li>
                            <li>
                                <Typography className='link-hover' variant='h5' fontWeight='400' color='white'><a className='link hover-underline-animation' href='#courses' >Services</a></Typography>
                            </li>
                            <li>
                                <Typography className='link-hover' variant='h5' fontWeight='400' color='white'><a className='link hover-underline-animation' href='#contactus' >Contact Us</a></Typography>
                            </li>
                        </ul>
                    </Box>
                </Box>
                <Box className='column-four'>
                    <Box className='social-icon-footer'>
                        <img src={Instagram} alt='customize' className='footer-social-icon' />
                        <img src={Facebook} alt='customize' className='footer-social-icon' />
                    </Box>
                </Box>
            </Box>
            <Box className='footer-container-bottom'>
                <Typography variant='h6' fontWeight='400' color='white'>© 2021 QualifyPro. All Rights Reserved.</Typography>
            </Box>
        </Box>
    )
}

export default Footer