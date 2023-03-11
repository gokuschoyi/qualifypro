import React from 'react'
import './Courses.css'
import Course1 from '../../assets/course1.png'
import Course2 from '../../assets/course2.jpg'
import Course3 from '../../assets/course3.jpg'
import Course4 from '../../assets/course4.jpg'
import Course5 from '../../assets/course5.jpg'
import Course6 from '../../assets/course6.jpeg'
import Collapse from '@mui/material/Collapse';
import { useNavigate } from 'react-router-dom'
import { COURSE_DATA } from '../../pages'
import { Box, Typography, Card, CardContent, CardActions, Button, Grid, CardMedia } from '@mui/material'

const Courses = () => {
    const [showMore, setShowMore] = React.useState(false)
    const handleShowMore = () => {
        setShowMore((prev) => !prev)
    }
    const navigate = useNavigate()

    const courseDataKeys = Object.keys(COURSE_DATA)
    const totalCourse = courseDataKeys.length;

    const firstHalfOfCourse = {}
    const secondHalfOfCourse = {}

    if (totalCourse > 3) {
        courseDataKeys.slice(0, 3).forEach((key) => {
            firstHalfOfCourse[key] = COURSE_DATA[key]
        });
        courseDataKeys.slice(3).forEach((key) => {
            secondHalfOfCourse[key] = COURSE_DATA[key]
        });
    } else {
        courseDataKeys.forEach((key) => {
            firstHalfOfCourse[key] = COURSE_DATA[key]
        });
    }

    const showCourseDetails = (e) => {
        const { value } = e.target
        navigate(`/courses/${value}`)
        // console.log(value)
    }

    const registerCourse = (e) => {
        const { value } = e.target
        navigate(`/register/${value}`)
        // console.log(value)
    }

    return (
        <Box id='courses' className='course-container padding'>
            <Typography variant='h1' className='course-title'>
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
                    {firstHalfOfCourse && Object.keys(firstHalfOfCourse).map((key) => {
                        return (
                            <Grid key={key} item xs={12} sm={6} md={4} className='course-card'>
                                <Card sx={{ width: 345, boxShadow: 10 }} className='card-container'>
                                    <Box display='flex' flexDirection='column' justifyContent='space-between'>
                                        <CardMedia
                                            sx={{ height: 200 }}
                                            component="img"
                                            image={firstHalfOfCourse[key].courseId === 'courseOne' ? Course1 : '' || firstHalfOfCourse[key].courseId === 'courseTwo' ? Course2 : '' || firstHalfOfCourse[key].courseId === 'courseThree' ? Course3 : ''}
                                            title={firstHalfOfCourse[key].title}
                                            alt={firstHalfOfCourse[key].title}
                                            loading='lazy'
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {firstHalfOfCourse[key].title}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {firstHalfOfCourse[key].duration}
                                            </Typography>
                                            <Typography className='course-descritpion' variant="body2" color="text.secondary">
                                                {firstHalfOfCourse[key].description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className='action-button'>
                                            <Button onClick={(e) => showCourseDetails(e)} value={`${firstHalfOfCourse[key].courseId}`} size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                                ':hover': {
                                                    color: 'white !important',
                                                    backgroundColor: '#f76e39 !important',
                                                },
                                            }} >MORE</Button>
                                            <Button size="small" onClick={(e) => registerCourse(e)} value={`${firstHalfOfCourse[key].courseId}`} variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                                ':hover': {
                                                    color: 'white !important',
                                                    backgroundColor: '#f76e39 !important',
                                                },
                                            }}>REGISTER</Button>
                                        </CardActions>
                                    </Box>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>

                <Collapse in={showMore}>
                    <Box className='hidden-courses'>
                        <Grid container spacing={2} sx={{ marginTop: '2px', marginBottom: '20px' }}>
                            {secondHalfOfCourse && Object.keys(secondHalfOfCourse).map((key) => {
                                return (
                                    <Grid key={key} item xs={12} sm={6} md={4} className='course-card'>
                                        <Card sx={{ width: 345, boxShadow: 10 }} className='card-container'>
                                            <Box display='flex' flexDirection='column' justifyContent='space-between'>
                                                <CardMedia
                                                    sx={{ height: 200 }}
                                                    component="img"
                                                    image={secondHalfOfCourse[key].courseId === 'courseFour' ? Course4 : '' || secondHalfOfCourse[key].courseId === 'courseFive' ? Course5 : '' || secondHalfOfCourse[key].courseId === 'courseSix' ? Course6 : ''}
                                                    title={secondHalfOfCourse[key].title}
                                                    alt={secondHalfOfCourse[key].title}
                                                    loading='lazy'
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {secondHalfOfCourse[key].title}
                                                    </Typography>
                                                    <Typography variant="body1" color="text.secondary">
                                                        {secondHalfOfCourse[key].duration}
                                                    </Typography>
                                                    <Typography className='course-descritpion' variant="body2" color="text.secondary">
                                                        {secondHalfOfCourse[key].description}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions className='action-button'>
                                                    <Button onClick={(e) => showCourseDetails(e)} value={`${secondHalfOfCourse[key].courseId}`} size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                                        ':hover': {
                                                            color: 'white !important',
                                                            backgroundColor: '#f76e39 !important',
                                                        },
                                                    }} >MORE</Button>
                                                    <Button size="small" onClick={(e) => registerCourse(e)} value={`${secondHalfOfCourse[key].courseId}`} variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                                        ':hover': {
                                                            color: 'white !important',
                                                            backgroundColor: '#f76e39 !important',
                                                        },
                                                    }}>REGISTER</Button>
                                                </CardActions>
                                            </Box>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Collapse>

                <Box display='flex' justifyContent='center'>
                    <Button onClick={handleShowMore} size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                        marginTop: '25px',
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