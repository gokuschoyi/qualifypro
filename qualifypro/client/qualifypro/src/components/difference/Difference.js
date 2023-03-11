import React from 'react'
import './Difference.css'
import { Box, Typography, Card, CardContent, Grid } from '@mui/material'
import d1 from '../../assets/customizeWhite.png'
import d2 from '../../assets/changeWhite.png'
import d3 from '../../assets/calendarWhite.png'
import d4 from '../../assets/experienceWhite.png'
const Difference = () => {
    return (
        <Box id='aboutus' className='difference-container padding-difference'>
            <Typography variant='h1' className='difference-title'>
                How we are different from Others?
            </Typography>
            <Box className='difference-content'>
                <ul>
                    <li>
                        <Typography variant='h6'>
                            Welcome to QualifyPro, your premier source for all things building and construction in Victoria. We are a team of passionate and dedicated professionals who are committed to empowering builders and contractors with the tools and resources they need to succeed in their careers. With years of experience in the industry, we understand the unique challenges faced by builders and contractors and are committed to providing customized solutions tailored to their needs.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='h6'>
                            From license applications and renewals to training and education, we have got you covered. At QualifyPro, we believe in the importance of staying up-to-date with the latest trends and developments in the industry. That's why we make sure that all of our services and courses are based on the latest information and guidelines. Our experienced and knowledgeable instructors are dedicated to providing hands-on learning experiences that are engaging, relevant, and accessible to our students.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='h6'>
                            Our goal is to create a community of registered builders and contractors who can work together to build a better future for all. Whether you're just starting out in your career or are looking to take your skills to the next level, QualifyPro is here to support you every step of the way. Join us today and take control of your future in the building and construction industry!
                        </Typography>
                    </li>
                </ul>
            </Box>
            <Box className='difference-card-container'>
                <Grid container spacing={2} display='flex' justifyContent='center'>
                    <Grid item xs={11} sm={6} md={3} className='diff-card'>
                        <Card className='difference-card' sx={{ boxShadow: 10 }}>
                            <CardContent className='card-split'>
                                <Box className='d-card-box'>
                                    <img src={d1} alt='Customized Services' title='customized service' loading='lazy' className='difference-icon' />
                                    <Typography variant='h5' className='difference-hover-underline-animation'>Customized Services</Typography>
                                </Box>
                                <Typography className='lower-typo' variant='body2'>Customized services for local builders and contractors for a personalized experience.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={6} md={3} className='diff-card'>
                        <Card className='difference-card' sx={{ boxShadow: 10 }}>
                            <CardContent className='card-split'>
                                <Box className='d-card-box'>
                                    <img src={d2} alt='Up-to-date Information' title='Up to date information' loading='lazy' className='difference-icon' />
                                    <Typography variant='h5' className='difference-hover-underline-animation'>Up-to-date Information</Typography>
                                </Box>
                                <Typography className='lower-typo' variant='body2'>Latest and relevant information for users.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={6} md={3} className='diff-card'>
                        <Card className='difference-card' sx={{ boxShadow: 10 }}>
                            <CardContent className='card-split'>
                                <Box className='d-card-box'>
                                    <img src={d3} alt='Flexible scheduling' title='Flexible scheduling' loading='lazy' className='difference-icon' />
                                    <Typography variant='h5' className='difference-hover-underline-animation'>Flexible scheduling</Typography>
                                </Box>
                                <Typography className='lower-typo' variant='body2'>Flexible scheduling for busy builders and contractors to obtain credentials.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={6} md={3} className='diff-card'>
                        <Card className='difference-card' sx={{ boxShadow: 10 }}>
                            <CardContent className='card-split'>
                                <Box className='d-card-box'>
                                    <img src={d4} alt='Experienced instructors' title='Experienced instructors' loading='lazy' className='difference-icon' />
                                    <Typography variant='h5' className='difference-hover-underline-animation'>Experienced instructors</Typography>
                                </Box>
                                <Typography className='lower-typo' variant='body2'>Experienced and knowledgeable instructors for hands-on learning</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

export default Difference