import React from 'react'
import './Review.css'
import { Box, Typography, Card, Rating } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import User from '../../assets/user.png'
const Review = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <Box id='reviews' className='review-container padding'>
            <Typography variant='h1' className='course-title'>
                Reviews
            </Typography>
            <Box className='review-card-container' sx={{ boxShadow: 8 }}>
                <Slider {...settings}>
                    <Box className='card-centering' sx={{ display: 'flex', justifyContent: 'center !important' }}>
                        <Card sx={{ width: '80%', boxShadow: 8 }} className='review-card'>
                            <Box display='flex' flexDirection='column' gap='0.3rem'>
                                <Box display='flex' flexDirection='row' sx={{ gap: '1rem' }}>
                                    <img src={User} alt='reviewer' className='reviewer-image' />
                                    <Box display='flex' flexDirection='column' justifyContent='center'>
                                        <Typography variant='body1' className='reviewer-name'>Ricky Males</Typography>
                                        <Typography variant='body1' className='reviewer-position'>23-04-2022</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </Box>
                                <Typography variant='body2' fontWeight={400} sx={{}} className='review-title'>Great information in a short amount of time.Very beneficial.Steve was very knowledgeable and helped along the way.
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box className='card-centering' sx={{ display: 'flex', justifyContent: 'center !important' }}>
                        <Card sx={{ width: '80%', boxShadow: 8 }} className='review-card'>
                            <Box display='flex' flexDirection='column' gap='0.3rem'>
                                <Box display='flex' flexDirection='row' sx={{ gap: '1rem' }}>
                                    <img src={User} alt='reviewer' className='reviewer-image' />
                                    <Box display='flex' flexDirection='column' justifyContent='center'>
                                        <Typography variant='body1' className='reviewer-name'>Ricky Males</Typography>
                                        <Typography variant='body1' className='reviewer-position'>23-04-2022</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </Box>
                                <Typography variant='body2' fontWeight={400} sx={{}} className='review-title'>Great information in a short amount of time.Very beneficial.Steve was very knowledgeable and helped along the way.
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box className='card-centering' sx={{ display: 'flex', justifyContent: 'center !important' }}>
                        <Card sx={{ width: '80%', boxShadow: 8 }} className='review-card'>
                            <Box display='flex' flexDirection='column' gap='0.3rem'>
                                <Box display='flex' flexDirection='row' sx={{ gap: '1rem' }}>
                                    <img src={User} alt='reviewer' className='reviewer-image' />
                                    <Box display='flex' flexDirection='column' justifyContent='center'>
                                        <Typography variant='body1' className='reviewer-name'>Ricky Males</Typography>
                                        <Typography variant='body1' className='reviewer-position'>23-04-2022</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </Box>
                                <Typography variant='body2' fontWeight={400} sx={{}} className='review-title'>Great information in a short amount of time.Very beneficial.Steve was very knowledgeable and helped along the way.
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box className='card-centering' sx={{ display: 'flex', justifyContent: 'center !important' }}>
                        <Card sx={{ width: '80%', boxShadow: 8 }} className='review-card'>
                            <Box display='flex' flexDirection='column' gap='0.3rem'>
                                <Box display='flex' flexDirection='row' sx={{ gap: '1rem' }}>
                                    <img src={User} alt='reviewer' className='reviewer-image' />
                                    <Box display='flex' flexDirection='column' justifyContent='center'>
                                        <Typography variant='body1' className='reviewer-name'>Ricky Males</Typography>
                                        <Typography variant='body1' className='reviewer-position'>23-04-2022</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </Box>
                                <Typography variant='body2' fontWeight={400} sx={{}} className='review-title'>Great information in a short amount of time.Very beneficial.Steve was very knowledgeable and helped along the way.
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                </Slider>
            </Box>
            <Box className='review-stat-container' sx={{ boxShadow: 8 }}>
                <Box className='milestone order-column'>
                    <Typography variant='h1' className='milestone-text'>OUR </Typography>
                    <Typography variant='h2' className='milestone-text'>MILESTONES</Typography>
                </Box>
                <Box className='satisfied-clients order-column'>
                    <Typography variant='h1' className='satisfied-clients-text'>200 +</Typography>
                    <Typography variant='h3' className='satisfied-clients-text'>Satisfied Clients</Typography>
                </Box>
                <Box className='experience order-column'>
                    <Typography variant='h1' className='experience-text'>4 +</Typography>
                    <Typography variant='h3' className='experience-text'>Years of Experience</Typography>
                </Box>
                <Box className='success-rate order-column'>
                    <Typography variant='h1' className='success-rate-text'>98 %</Typography>
                    <Typography variant='h3' className='success-rate-text'>Success Rate</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Review