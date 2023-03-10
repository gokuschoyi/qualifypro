import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './CourseDetails.css'
import { CourseNavbar } from '../../course_components'
import COURSE_DATA from './CourseData'
import CourseOne from '../../assets/course1.png'
import CourseTwo from '../../assets/course2.jpg'
import CourseThree from '../../assets/course3.jpg'
import CourseFour from '../../assets/course4.jpg'
import CourseFive from '../../assets/course5.jpg'
import CourseSix from '../../assets/course6.jpeg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import { Footer, MetaProvider } from '../../components'

import { Box, Typography, Grid, CardMedia, Button, Divider, Card, CardContent, CardActions } from '@mui/material'
const CourseDetails = () => {
    const { courseId } = useParams()
    // console.log(courseId)
    const navigate = useNavigate()
    var data = COURSE_DATA[courseId]

    const filteredCourses = Object.values(COURSE_DATA).filter(course => course.courseId !== courseId);
    // console.log(data.courseId)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [toggle, setToggle] = useState(false);
    const showNav = () => {
        setToggle((prev) => !prev)
    }

    const handleMoreCourseInfo = value => (e) => {
        window.scrollTo(0, 0)
        navigate(`/courses/${value}`)
        console.log(value)
    }
    const registerCourse = (e) => {
        const { value } = e.target
        navigate(`/register/${value}`)
        // console.log(value)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const showAlternate = courseId === undefined ? true : false

    const metaTitle = courseId === undefined ? 'QualifyPro | Courses' : `QualifyPro | ${data.title}`
    const metaLink = courseId === undefined ? 'courses' : `courses/${courseId}`

    return (
        <Box className='course-details-container'>
            <MetaProvider
                title={`QualifyPro | ${metaTitle}`}
                description={`Explore the various course offered by QualifyPro.`}
                link={`${metaLink}`} />
            <CourseNavbar toggle={toggle} setToggle={setToggle} showNav={showNav} showAlternate={showAlternate}/>
            {courseId === undefined
                ?
                (
                    <Box className='course-details-content' onClick={(e) => setToggle(false)}>
                        <Box className='all-course-details-banner'>
                            <Typography variant='h1' color='white' fontWeight='400'>Explore our different courses below.</Typography>
                        </Box>
                        <Box className='available-courses course-info-box'>
                            <Grid container spacing={2} sx={{ marginTop: '20px', paddingBottom: '6rem' }}>
                                {COURSE_DATA && Object.keys(COURSE_DATA).map((key) => {
                                    return (
                                        <Grid key={key} item xs={12} sm={6} md={4} className='course-card'>
                                            <Card sx={{ width: 345, boxShadow: 10 }} className='card-container'>
                                                <Box display='flex' flexDirection='column' justifyContent='space-between'>
                                                    <CardMedia
                                                        sx={{ height: 200 }}
                                                        component="img"
                                                        image={
                                                            COURSE_DATA[key].courseId === 'courseOne' ? CourseOne : '' ||
                                                                COURSE_DATA[key].courseId === 'courseTwo' ? CourseTwo : '' ||
                                                                    COURSE_DATA[key].courseId === 'courseThree' ? CourseThree : '' ||
                                                                        COURSE_DATA[key].courseId === 'courseFour' ? CourseFour : '' ||
                                                                            COURSE_DATA[key].courseId === 'courseFive' ? CourseFive : '' ||
                                                                                COURSE_DATA[key].courseId === 'courseSix' ? CourseSix : ''
                                                        }
                                                        title={COURSE_DATA[key].title}
                                                        alt={COURSE_DATA[key].title}
                                                        loading='lazy'
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {COURSE_DATA[key].title}
                                                        </Typography>
                                                        <Typography variant="body1" color="text.secondary">
                                                            {COURSE_DATA[key].duration}
                                                        </Typography>
                                                        <Typography className='course-descritpion' variant="body2" color="text.secondary">
                                                            {COURSE_DATA[key].description}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions className='action-button'>
                                                        <Button onClick={(e) => handleMoreCourseInfo(`${COURSE_DATA[key].courseId}`)(e)} value={`${COURSE_DATA[key].courseId}`} size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                                            ':hover': {
                                                                color: 'white !important',
                                                                backgroundColor: '#f76e39 !important',
                                                            },
                                                        }} >MORE</Button>
                                                    </CardActions>
                                                </Box>
                                            </Card>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            <Box className='scroll-to-top '>
                                <KeyboardDoubleArrowUpOutlinedIcon onClick={scrollToTop} />
                            </Box>
                        </Box>
                    </Box>
                )
                :
                (
                    <Box className='course-details-content' onClick={(e) => setToggle(false)}>
                        <Box className='course-details-banner'>
                            <Typography variant='h1' color='white' fontWeight='400'>COURSE DETAILS</Typography>
                            <Typography variant='h2' color='white' fontWeight='400' sx={{ textAlign: 'center' }}>{data.title}</Typography>
                            <Typography variant='h4' color='white' fontWeight='400' sx={{ width: '80%', textAlign: 'center' }}>{data.description}</Typography>
                        </Box>
                        <Box className='course-info-box'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                    <Box className='image-holder'>
                                        <CardMedia
                                            sx={{ padding: '20px', height: '100%', width: '90%' }}
                                            component="img"
                                            image={courseId === 'courseOne' ? CourseOne : '' || courseId === 'courseTwo' ? CourseTwo : '' || courseId === 'courseThree' ? CourseThree : '' || courseId === 'courseFour' ? CourseFour : '' || courseId === 'courseFive' ? CourseFive : '' || courseId === 'courseSix' ? CourseSix : ''}
                                            title={`${data.courseId}`}
                                            alt={`${data.courseId}`}
                                            loading="lazy"
                                        />
                                    </Box>
                                    <Box className='course-link-box'>
                                        <ul>
                                            <li>
                                                <a className='course-link' href='#learn'>Overview</a>
                                            </li>
                                            <li>
                                                <a className='course-link' href='#content'>Content</a>
                                            </li>
                                            <li>
                                                <a className='course-link' href='#assessment'>Assessment</a>
                                            </li>
                                            <li>
                                                <a className='course-link' href='#requirement'>Entry Requirements</a>
                                            </li>
                                            <li>
                                                <a className='course-link' href='#career'>Careers</a>
                                            </li>
                                            <li>
                                                <a className='course-link' href='#fee'>Fee</a>
                                            </li>
                                        </ul>
                                    </Box>
                                    <Box id='learn' className='learn-box course-content-padding'>
                                        <Box className='learn-box-content'>
                                            <Typography variant='h2' color='black' fontWeight='400' id='learn'>What you will learn</Typography>
                                        </Box>
                                        <Box className='learn-box-points'>
                                            {data.learning_points.map((item, index) => {
                                                return (
                                                    <Box className='learn-box-points-item' key={index}>
                                                        <ChevronRightIcon sx={{ color: '#4d48ff', fontSize: '1.5rem', marginRight: '10px' }} />
                                                        <Typography sx={{ marginRight: '20px' }} variant='h5' textAlign='justify' color='black' fontWeight='400'>{item}</Typography>
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                    <Box id='content' className='content-box course-content-padding'>
                                        <Box className='content-box-content'>
                                            <Typography variant='h2' color='black' fontWeight='400' id='learn'>Course Content</Typography>
                                        </Box>
                                        <Box className='content-box-points'>
                                            <Typography sx={{ margin: '0 20px 0 0px' }} variant='h5' textAlign='justify' color='black' fontWeight='400'>The course content may vary depending on the institution offering the course, but typically includes the following topics:</Typography>
                                            {data.course_content.map((item, index) => {
                                                return (
                                                    <Box className='content-box-points-item' key={index}>
                                                        <FiberManualRecordOutlinedIcon sx={{ color: '#4d48ff', fontSize: '1rem', marginRight: '10px' }} />
                                                        <Typography sx={{ marginRight: '20px' }} variant='h5' textAlign='justify' color='black' fontWeight='400'>{item}</Typography>
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                    <Box id='assessment' className='assessment-box course-content-padding'>
                                        <Box className='assessment-box-content'>
                                            <Typography variant='h2' color='black' fontWeight='400' id='learn'>Assessment</Typography>
                                        </Box>
                                        <Box className='assessment-box-points'>
                                            <Typography sx={{ margin: '0 20px 0 0px' }} variant='h5' textAlign='justify' color='black' fontWeight='400'>
                                                {data.course_assessment}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box id='requirement' className='requirement-box course-content-padding'>
                                        <Box className='requirement-box-content'>
                                            <Typography variant='h2' color='black' fontWeight='400' id='learn'>Entry Requirements</Typography>
                                        </Box>
                                        <Box className='requirement-box-points'>
                                            <Typography sx={{ margin: '0 20px 0 0px' }} variant='h5' textAlign='justify' color='black' fontWeight='400'>  Entry requirements may vary depending on the institution offering the course, but typically include:</Typography>
                                            {data.entry_requirement.map((item, index) => {
                                                return (
                                                    <Box className='requirement-box-points-item' key={index}>
                                                        <FiberManualRecordOutlinedIcon sx={{ color: '#4d48ff', fontSize: '1rem', marginRight: '10px' }} />
                                                        <Typography sx={{ marginRight: '20px' }} variant='h5' textAlign='justify' color='black' fontWeight='400'>{item}</Typography>
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                    <Box id='career' className='career-box course-content-padding'>
                                        <Box className='career-box-content'>
                                            <Typography variant='h2' color='black' fontWeight='400' id='learn'>Career Opportunity</Typography>
                                        </Box>
                                        <Box className='career-box-points'>
                                            <Typography sx={{ margin: '0 20px 0 0px' }} variant='h5' textAlign='justify' color='black' fontWeight='400'>  Graduates of the Diploma of Building and Construction are equipped with the knowledge and skills required to pursue a range of roles in the building and construction industry, including:</Typography>
                                            {data.career_opportunity.map((item, index) => {
                                                return (
                                                    <Box className='career-box-points-item' key={index}>
                                                        <FiberManualRecordOutlinedIcon sx={{ color: '#4d48ff', fontSize: '1rem', marginRight: '10px' }} />
                                                        <Typography sx={{ marginRight: '20px' }} variant='h5' textAlign='justify' color='black' fontWeight='400'>{item}</Typography>
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                    <Box id='fee' className='fee-box course-content-padding'>
                                        <Box className='fee-box-content'>
                                            <Typography variant='h2' color='black' fontWeight='400' id='learn'>Course Fee</Typography>
                                        </Box>
                                        <Box className='fee-box-points'>
                                            <Typography sx={{ margin: '0 20px 0 0px' }} variant='h5' textAlign='justify' color='black' fontWeight='400'>{data.course_fee_desc}</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='course-final-description'>
                                        <Typography variant='h5' textAlign='justify' color='black' fontWeight='400'>Ready to pursue a career in building and construction? Enroll in a Diploma of Building and Construction to gain the necessary skills and knowledge to manage construction projects from start to finish. With comprehensive training in project management, building codes, estimating and costing, and more, this course provides a pathway to a rewarding career in the industry. Don't wait, enroll today and take the first step towards your future.</Typography>
                                        <Box className='short-course-details'>
                                            <Box className='course-duration short-course-row'>
                                                <Typography sx={{ minWidth: '150px' }} variant='h5' textAlign='justify' color='black' fontWeight='500'>Course Duration :</Typography>
                                                <Typography variant='h5' textAlign='justify' color='black' fontWeight='400'>{data.duration}</Typography>
                                            </Box>
                                            <Box className='course-date short-course-row'>
                                                <Typography sx={{ minWidth: '150px' }} variant='h5' textAlign='justify' color='black' fontWeight='500'>Course Date :</Typography>
                                                <Typography variant='h5' textAlign='justify' color='black' fontWeight='400'>{data.dates}</Typography>
                                            </Box>
                                            <Box className='course-location short-course-row'>
                                                <Typography sx={{ minWidth: '150px' }} variant='h5' textAlign='justify' color='black' fontWeight='500'>Course Location :</Typography>
                                                <Typography variant='h5' textAlign='justify' color='black' fontWeight='400'>{data.location}</Typography>
                                            </Box>
                                            <Box className='course-instructor short-course-row'>
                                                <Typography sx={{ minWidth: '150px' }} variant='h5' textAlign='justify' color='black' fontWeight='500'>Instructor :</Typography>
                                                <Typography variant='h5' textAlign='justify' color='black' fontWeight='400'>{data.instructor}</Typography>
                                            </Box>
                                        </Box>
                                        <Box className='course-enroll'>
                                            <Button onClick={(e) => registerCourse(e)} value={`${courseId}`} size="small" variant="text" style={{ fontSize: '14px', color: `white`, backgroundColor: '#f76e39', marginRight: '20px' }} sx={{
                                                ':hover': {
                                                    color: 'white !important',
                                                    backgroundColor: '#4d48ff !important',
                                                },
                                            }} >REGISTER</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                    <Box className='course-feature-box'>
                                        <Box className='course-feature-course-details'>
                                            <Box className='course-feature-duration course-feature-row'>
                                                <Typography sx={{ minWidth: '150px' }} variant='h5' textAlign='justify' color='black' fontWeight='500'>Course Duration :</Typography>
                                                <Typography variant='h5' textAlign='justify' color='black' fontWeight='400'>{data.duration}</Typography>
                                            </Box>
                                            <Box className='course-feature-date course-feature-row'>
                                                <Typography sx={{ minWidth: '150px' }} variant='h5' textAlign='justify' color='black' fontWeight='500'>Course Date :</Typography>
                                                <Typography variant='h5' textAlign='justify' color='black' fontWeight='400'>{data.dates}</Typography>
                                            </Box>
                                            <Box className='course-feature-location course-feature-row'>
                                                <Typography sx={{ minWidth: '150px' }} variant='h5' textAlign='justify' color='black' fontWeight='500'>Course Location :</Typography>
                                                <Typography variant='h5' textAlign='justify' color='black' fontWeight='400'>{data.location}</Typography>
                                            </Box>
                                            <Box className='course-feature-instructor course-feature-row'>
                                                <Typography sx={{ minWidth: '150px' }} variant='h5' textAlign='justify' color='black' fontWeight='500'>Instructor :</Typography>
                                                <Typography variant='h5' textAlign='justify' color='black' fontWeight='400'>{data.instructor}</Typography>
                                            </Box>
                                        </Box>
                                        <Divider className='divider' />
                                        <Box className='price-box-container'>
                                            <Box className='price-box'>
                                                <Typography variant='h5' textAlign='justify' color='black' fontWeight='600'>Price : </Typography>
                                                <Typography variant='h5' textAlign='justify' color='black' fontWeight='400'>{`$ ${data.course_fee}`}</Typography>
                                            </Box>
                                            <Box className='course-enroll-side'>
                                                <Button onClick={(e) => registerCourse(e)} value={`${courseId}`} size="small" variant="text" style={{ fontSize: '14px', color: `white`, backgroundColor: '#f76e39', marginRight: '20px' }} sx={{
                                                    ':hover': {
                                                        color: 'white !important',
                                                        backgroundColor: '#4d48ff !important',
                                                    },
                                                }} >REGISTER NOW</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className='related-courses'>
                                        <Box>
                                            <Typography sx={{ marginBottom: '20px' }} variant='h2' color='black' fontWeight='400' id='learn'>Related Courses</Typography>
                                        </Box>
                                        <Box className='individual-course'>
                                            {filteredCourses.map((course, index) => {
                                                return (
                                                    <Card key={index} sx={{ width: 'auto', boxShadow: 10 }} className='relatedcoursecard-container'>
                                                        <Box>
                                                            <CardMedia
                                                                sx={{ height: 200 }}
                                                                component="img"
                                                                image={course.courseId === 'courseOne' ? CourseOne : '' || course.courseId === 'courseTwo' ? CourseTwo : '' || course.courseId === 'courseThree' ? CourseThree : '' || course.courseId === 'courseFour' ? CourseFour : '' || course.courseId === 'courseFive' ? CourseFive : '' || course.courseId === 'courseSix' ? CourseSix : ''}
                                                                title="green iguana"
                                                                alt={`${course.title}`}
                                                                loading="lazy"
                                                            />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                    {course.title}
                                                                </Typography>
                                                                <Typography variant="body1" color="text.secondary">
                                                                    {course.duration}
                                                                </Typography>
                                                                <Typography className='relatedcourse-course-descritpion' variant="body2" color="text.secondary">
                                                                    {course.description}
                                                                </Typography>
                                                            </CardContent>
                                                        </Box>
                                                        <CardActions className='action-button'>
                                                            <Button onClick={(e) => handleMoreCourseInfo(`${course.courseId}`)(e)} size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                                                ':hover': {
                                                                    color: 'white !important',
                                                                    backgroundColor: '#f76e39 !important',
                                                                },
                                                            }} >MORE</Button>
                                                            <Button id={`${course.courseId}`} onClick={(e) => registerCourse(e)} value={`${course.courseId}`} size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                                                ':hover': {
                                                                    color: 'white !important',
                                                                    backgroundColor: '#f76e39 !important',
                                                                },
                                                            }}>REGISTER</Button>
                                                        </CardActions>
                                                    </Card>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box className='scroll-to-top '>
                                <KeyboardDoubleArrowUpOutlinedIcon onClick={scrollToTop} />
                            </Box>
                            <Box className='disclaimer'>
                                <Typography sx={{ width: '80%' }} variant='h5' textAlign='center' color='black' fontWeight='500'>Please note that this is a general overview and that course details may vary depending on the institution offering the course. It is recommended that you consult with the institution offering the course for specific course details and requirements.</Typography>
                            </Box>
                        </Box>
                    </Box>
                )
            }
            <Footer />
        </Box>
    )
}

export default CourseDetails