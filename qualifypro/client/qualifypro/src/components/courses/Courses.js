import React from 'react'
import './Courses.css'
import Course1 from '../../assets/course1.png'
import Course2 from '../../assets/course2.jpg'
import Course3 from '../../assets/course3.jpg'
import Collapse from '@mui/material/Collapse';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid, CardMedia } from '@mui/material'

const Courses = () => {
    const [showMore, setShowMore] = React.useState(false)
    const handleShowMore = () => {
        setShowMore((prev) => !prev)
    }
    // console.log(showMore)

    return (
        <Box id='courses' className='course-container padding'>
            <Typography variant='h3' className='course-title'>
                Courses
            </Typography>
            <Box className='course-description'>
                <Typography className='course-points' variant='h6'>
                    At QualifyPro, we are committed to providing builders and contractors with the training and education they need to succeed in their careers. Our courses are designed to be relevant, engaging, and accessible, and are taught by experienced instructors who have extensive experience in the building and construction industry.
                </Typography>
                <Typography className='course-points' variant='h6'>
                    All of our courses are offered with flexible scheduling options to accommodate the busy schedules of builders and contractors, and we offer a range of support services to help students succeed. Whether you're looking to obtain a new license, renew an existing one, or simply enhance your skills, QualifyPro has got you covered.
                </Typography>
                <Typography className='course-points' variant='h6'>
                    Contact us today to learn more about our offered courses!
                </Typography>
            </Box>

            <Box className='course-box'>
                <Grid container spacing={2} sx={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Grid item xs={12} sm={6} md={4} className='course-card'>
                        <Card sx={{ width: 345, boxShadow: 10 }} className='card-container'>
                            <Box>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    component="img"
                                    image={Course1}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Diploma of Building and Construction
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Course Duration: Typically 12 to 24 months full-time or part-time equivalent
                                    </Typography>
                                    <Typography className='course-descritpion' variant="body2" color="text.secondary">
                                        The Diploma of Building and Construction is designed for individuals who want to develop their skills and knowledge in the construction industry, and to progress their career in building and construction. The course covers the key principles of building and construction, including project management, planning and scheduling, procurement, cost management, contract administration, building codes and standards, and workplace health and safety.
                                    </Typography>
                                </CardContent>
                            </Box>
                            <CardActions className='action-button'>
                                <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                    ':hover': {
                                        color: 'white !important',
                                        backgroundColor: '#f76e39 !important',
                                    },
                                }} >MORE</Button>
                                <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                    ':hover': {
                                        color: 'white !important',
                                        backgroundColor: '#f76e39 !important',
                                    },
                                }}>REGISTER</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='course-card'>
                        <Card sx={{ width: 345, boxShadow: 10 }} className='card-container'>
                            <Box>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    component="img"
                                    image={Course2}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Certificate IV in Building & Construction (Building)
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Course Duration: Typically 12 to 24 months full-time or part-time equivalent
                                    </Typography>
                                    <Typography className='course-descritpion' variant="body2" color="text.secondary">
                                        The Certificate IV in Building and Construction (Building) is designed for individuals who want to develop their skills and knowledge in the construction industry, and to progress their career in building and construction. The course covers the key principles of building and construction, including project management, planning and scheduling, procurement, cost management, contract administration, building codes and standards, and workplace health and safety.
                                    </Typography>
                                </CardContent>
                            </Box>
                            <CardActions>
                                <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                    ':hover': {
                                        color: 'white !important',
                                        backgroundColor: '#f76e39 !important',
                                    },
                                }} >MORE</Button>
                                <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                    ':hover': {
                                        color: 'white !important',
                                        backgroundColor: '#f76e39 !important',
                                    },
                                }}>REGISTER</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='course-card'>
                        <Card sx={{ width: 345, boxShadow: 10 }} className='card-container'>
                            <Box>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    component="img"
                                    image={Course3}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Certificate III Work Health & Safety
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Typically 6 to 12 months full-time or part-time equivalent
                                    </Typography>
                                    <Typography className='course-descritpion' variant="body2" color="text.secondary">
                                        The Certificate III in Work Health and Safety is designed to provide individuals with the knowledge and skills required to work in a range of work health and safety roles. The course covers the key principles of work health and safety, including hazard identification and control, risk management, workplace emergency procedures, workplace health and safety legislation and codes of practice, and the implementation of WHS policies and procedures.
                                    </Typography>
                                </CardContent>
                            </Box>
                            <CardActions>
                                <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                    ':hover': {
                                        color: 'white !important',
                                        backgroundColor: '#f76e39 !important',
                                    },
                                }} >MORE</Button>
                                <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                    ':hover': {
                                        color: 'white !important',
                                        backgroundColor: '#f76e39 !important',
                                    },
                                }}>REGISTER</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                <Collapse in={showMore}>
                    <Box className='hidden-courses'>
                        <Grid container spacing={2} sx={{ marginTop: '2px', marginBottom: '20px' }}>
                            <Grid item xs={12} sm={6} md={4} className='course-card'>
                                <Card sx={{ width: 345, boxShadow: 10 }} className='card-container'>
                                    <Box>
                                        <CardMedia
                                            sx={{ height: 200 }}
                                            component="img"
                                            image={Course1}
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Diploma of Building and Construction
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                Course Duration: Typically 12 to 24 months full-time or part-time equivalent
                                            </Typography>
                                            <Typography className='course-descritpion' variant="body2" color="text.secondary">
                                                The Diploma of Building and Construction is designed for individuals who want to develop their skills and knowledge in the construction industry, and to progress their career in building and construction. The course covers the key principles of building and construction, including project management, planning and scheduling, procurement, cost management, contract administration, building codes and standards, and workplace health and safety.
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardActions className='action-button'>
                                        <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                            ':hover': {
                                                color: 'white !important',
                                                backgroundColor: '#f76e39 !important',
                                            },
                                        }} >MORE</Button>
                                        <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                            ':hover': {
                                                color: 'white !important',
                                                backgroundColor: '#f76e39 !important',
                                            },
                                        }}>REGISTER</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} className='course-card'>
                                <Card sx={{ width: 345, boxShadow: 10 }} className='card-container'>
                                    <Box>
                                        <CardMedia
                                            sx={{ height: 200 }}
                                            component="img"
                                            image={Course2}
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Certificate IV in Building & Construction (Building)
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                Course Duration: Typically 12 to 24 months full-time or part-time equivalent
                                            </Typography>
                                            <Typography className='course-descritpion' variant="body2" color="text.secondary">
                                                The Certificate IV in Building and Construction (Building) is designed for individuals who want to develop their skills and knowledge in the construction industry, and to progress their career in building and construction. The course covers the key principles of building and construction, including project management, planning and scheduling, procurement, cost management, contract administration, building codes and standards, and workplace health and safety.
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardActions>
                                        <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                            ':hover': {
                                                color: 'white !important',
                                                backgroundColor: '#f76e39 !important',
                                            },
                                        }} >MORE</Button>
                                        <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                            ':hover': {
                                                color: 'white !important',
                                                backgroundColor: '#f76e39 !important',
                                            },
                                        }}>REGISTER</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} className='course-card'>
                                <Card sx={{ width: 345, boxShadow: 10 }} className='card-container'>
                                    <Box>
                                        <CardMedia
                                            sx={{ height: 200 }}
                                            component="img"
                                            image={Course3}
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Certificate III Work Health & Safety
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                Typically 6 to 12 months full-time or part-time equivalent
                                            </Typography>
                                            <Typography className='course-descritpion' variant="body2" color="text.secondary">
                                                The Certificate III in Work Health and Safety is designed to provide individuals with the knowledge and skills required to work in a range of work health and safety roles. The course covers the key principles of work health and safety, including hazard identification and control, risk management, workplace emergency procedures, workplace health and safety legislation and codes of practice, and the implementation of WHS policies and procedures.
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardActions>
                                        <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                            ':hover': {
                                                color: 'white !important',
                                                backgroundColor: '#f76e39 !important',
                                            },
                                        }} >MORE</Button>
                                        <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                            ':hover': {
                                                color: 'white !important',
                                                backgroundColor: '#f76e39 !important',
                                            },
                                        }}>REGISTER</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Collapse>

                <Box display='flex' justifyContent='center'>
                    <Button onClick={handleShowMore} size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                        ':hover': {
                            color: 'white !important',
                            backgroundColor: '#f76e39 !important',
                        },
                    }} >{!showMore ? 'LOAD MORE' : 'SHOW LESS'}</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Courses