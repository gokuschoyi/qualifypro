import React from 'react'
import './Banner.css'
import { Particle } from '../../components'
import BannerImage from '../../assets/bannerPic.jpg'
import { Box, Grid, Button, Typography } from '@mui/material'
const Banner = () => {
    return (
        <Box id='home' className='banner-container'>
            {/* <Particle /> */} {/* This is the particle effect */}
            <Grid justifyContent='center' container spacing={2} p={{ xs: 2, md: 3, lg: 5 }}>
                <Grid item xs={11} sm={11} md={11} lg={7} xl={7} display='flex' alignItems='center'>
                    <Box className='banner-left-grid'>
                        <Typography variant='h1' fontFamily='Montserrat' fontWeight={300} className='banner-title'>
                            Empowering Builders & Contractors with a One-Stop Destination
                        </Typography>
                        <Typography variant='h6' className='banner-subtitle'>
                            The ultimate destination for builders and contractors in Victoria, Australia. Get access to a wide range of services and resources to help you succeed in your building and construction projects. From license applications to renewal services, we have got you covered. Register now and join our community of registered builders and contractors. Building a better future, together!
                        </Typography>
                        <Box className='button-group'>
                            <Button size="small" variant="text" style={{ fontSize: '14px', color: `white`, backgroundColor: '#399ff7', marginRight: '20px' }} sx={{
                                ':hover': {
                                    color: 'white !important',
                                    backgroundColor: '#f76e39 !important',
                                },
                            }} >GET STARTED</Button>
                            <Button size="small" variant="text" style={{ fontSize: '14px', color: `white`, backgroundColor: '#399ff7', }} sx={{
                                ':hover': {
                                    color: 'white !important',
                                    backgroundColor: '#f76e39 !important',
                                },
                            }}>HOW IT WORKS</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={11} sm={11} md={11} lg={4} xl={4}>
                    <Box className='bannerimage-holder'>
                        <img className='image' src={BannerImage} alt='bannerImage' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Banner