import React, { useState } from 'react'
import './ContactUs.css'
import { Box, Grid, Typography, Button, Card, Divider, TextField } from '@mui/material'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
const ContactUs = () => {
    const initialContactUsData = {
        firstName: { value: '', error: false, helperText: '' },
        lastName: { value: '', error: false, helperText: '' },
        phoneNumber: { value: '', error: false, helperText: '' },
        postcode: { value: '', error: false, helperText: '' },
        subject: { value: '', error: false, helperText: '' },
        email: { value: '', error: false, helperText: '' },
        message: { value: '', error: false, helperText: '' },
    }

    const [contactUsData, setContactUsData] = useState(initialContactUsData)

    const handleContactUsData = (e) => {
        const { name, value } = e.target
        setContactUsData({
            ...contactUsData, [name]: { ...contactUsData[name], value }
        })
    }

    const handleFormSubmit = () => {
        const formFields = Object.keys(contactUsData)
        let newContactUsData = { ...contactUsData }
        formFields.forEach(field => {
            if (contactUsData[field].value === '') {
                newContactUsData = {
                    ...newContactUsData,
                    [field]: {
                        ...contactUsData[field],
                        error: true,
                        helperText: 'This field is required'
                    }
                }
            } else {
                newContactUsData = {
                    ...newContactUsData,
                    [field]: {
                        ...contactUsData[field],
                        error: false,
                        helperText: ''
                    }
                }
            }
        })
        setContactUsData(newContactUsData)
        const isNotEmpty = Object.values(contactUsData).every(field => field.value !== '')
        if (isNotEmpty) {
            console.log('not empty fields')
        }
        else {
            console.log('empty fields')
        }
    }

    const handleClear = () => {
        setContactUsData(initialContactUsData)
    }

    return (
        <Box id='contactus' className='contactus-container padding'>
            <Typography variant='h1' className='course-title'>
                Contact US
            </Typography>
            <Grid container spacing={2} className='contactus-grid-container'>
                <Grid item xs={12} md={6} className='contactus-left'>
                    <Card sx={{ width: '100%', boxShadow: 10 }} className='grid-card-left'>
                        <Box className='grid-card-left-box'>
                            <Typography variant='h3' className='contactus-left-title'>Get in Touch</Typography>
                            <Divider className='divider' />
                            <Box className='contactus-text'>
                                <Typography variant='h6' className='contactus-left-text'>At QualifyPro, we are always here to help. Whether you have questions about our courses, need assistance with license applications or renewals, or simply want to learn more about our services, we are here to assist you.</Typography>
                                <Typography variant='h6' className='contactus-left-text'>You can also reach us by filling out the contact form on our website. Simply provide us with your name, email address, and a brief message, and one of our representatives will get back to you as soon as possible.
                                </Typography>
                                <Typography variant='h6' className='contactus-left-text'>At QualifyPro we are dedicated to providing our customers with the highest level of service and support. We look forward to hearing from you and helping you succeed in your career in the building and construction industry!
                                </Typography>
                            </Box>
                            <Divider className='divider' />
                            <Box className='contactus-contact'>
                                <Typography variant='h6' className='contactus-contact-text'>You can alos reach us via</Typography>
                                <Typography variant='h6' className='contactus-contact-text'>Phone : 1-800-000-0000</Typography>
                                <Typography variant='h6' className='contactus-contact-text'>Office : 1-800-000-0000</Typography>
                                <Typography variant='h6' className='contactus-contact-text'>Email : qualifypro@gmail.com</Typography>
                            </Box>
                            <Divider className='divider' />
                            <Box className='contactus-address'>
                                <Typography variant='h6' className='contactus-address-text'>QualifyPro</Typography>
                                <Typography variant='h6' className='contactus-address-text'>12, Kent Street, Surry Hills</Typography>
                                <Typography variant='h6' className='contactus-address-text'>Melbourne, VIC, 3190</Typography>
                            </Box>
                            <Divider className='divider' />
                            <Box className='social-icon-box'>
                                <img src={Instagram} alt='customize' className='social-icon' />
                                <img src={Facebook} alt='customize' className='social-icon' />
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} className='contactus-right'>
                    <Card sx={{ width: '100%', boxShadow: 10 }} className='grid-card-right'>
                        <Box className='client-name-box-contact'>
                            <TextField
                                size="small"
                                sx={{
                                    width: 'fill-available',
                                    padding: '10px',
                                    '& label.Mui-focused': {
                                        color: 'blue',
                                    },
                                    '& label': {
                                        color: 'blue',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#1098F7',
                                        },
                                    },
                                }}
                                onChange={(e) => handleContactUsData(e)}
                                name='firstName'
                                value={contactUsData.firstName.value}
                                error={contactUsData.firstName.error}
                                helperText={contactUsData.firstName.helperText}
                                id="outlined-firstname"
                                label="First Name"
                                variant="outlined"
                                type='text'
                            />
                            <TextField
                                size="small"
                                sx={{
                                    width: 'fill-available',
                                    padding: '10px',
                                    '& label.Mui-focused': {
                                        color: 'blue',
                                    },
                                    '& label': {
                                        color: 'blue',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#1098F7',
                                        },
                                    },
                                }}
                                onChange={(e) => handleContactUsData(e)}
                                name='lastName'
                                value={contactUsData.lastName.value}
                                error={contactUsData.lastName.error}
                                helperText={contactUsData.lastName.helperText}
                                id="outlined-username"
                                label="Last Name"
                                variant="outlined"
                                type='text'
                            />
                        </Box>
                        <Box className='client-phone-box'>
                            <TextField
                                size="small"
                                sx={{
                                    width: 'fill-available',
                                    padding: '10px',
                                    '& label.Mui-focused': {
                                        color: 'blue',
                                    },
                                    '& label': {
                                        color: 'blue',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#1098F7',
                                        },
                                    },
                                }}
                                onChange={(e) => handleContactUsData(e)}
                                name='phoneNumber'
                                value={contactUsData.phoneNumber.value}
                                error={contactUsData.phoneNumber.error}
                                helperText={contactUsData.phoneNumber.helperText}
                                id="outlined-lastname"
                                label="Phone Number"
                                variant="outlined"
                                type='text'
                            />
                        </Box>
                        <Box className='client-postcode'>
                            <TextField
                                size="small"
                                sx={{
                                    width: '46%',
                                    padding: '10px',
                                    '& label.Mui-focused': {
                                        color: 'blue',
                                    },
                                    '& label': {
                                        color: 'blue',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#1098F7',
                                        },
                                    },
                                }}
                                onChange={(e) => handleContactUsData(e)}
                                name='postcode'
                                value={contactUsData.postcode.value}
                                error={contactUsData.postcode.error}
                                helperText={contactUsData.postcode.helperText}
                                id="outlined-postcode"
                                label="Postcode"
                                variant="outlined"
                                type='text'
                            />
                        </Box>
                        <Box className='client-subject'>
                            <TextField
                                size="small"
                                sx={{
                                    width: '46%',
                                    padding: '10px',
                                    '& label.Mui-focused': {
                                        color: 'blue',
                                    },
                                    '& label': {
                                        color: 'blue',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#1098F7',
                                        },
                                    },
                                }}
                                onChange={(e) => handleContactUsData(e)}
                                name='subject'
                                value={contactUsData.subject.value}
                                error={contactUsData.subject.error}
                                helperText={contactUsData.subject.helperText}
                                id="outlined-subject"
                                label="Subject"
                                variant="outlined"
                                type='text'
                            />
                        </Box>
                        <Box className='client-email'>
                            <TextField
                                size="small"
                                sx={{
                                    width: 'fill-available',
                                    padding: '10px',
                                    '& label.Mui-focused': {
                                        color: 'blue',
                                    },
                                    '& label': {
                                        color: 'blue',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#1098F7',
                                        },
                                    },
                                }}
                                onChange={(e) => handleContactUsData(e)}
                                name='email'
                                value={contactUsData.email.value}
                                error={contactUsData.email.error}
                                helperText={contactUsData.email.helperText}
                                id="outlined-email"
                                label="Email"
                                variant="outlined"
                                type='email'
                            />
                        </Box>
                        <Box className='client-message'>
                            <TextField
                                size="small"
                                multiline={true}
                                minRows='8'
                                sx={{
                                    width: 'fill-available',
                                    padding: '10px',
                                    '& label.Mui-focused': {
                                        color: 'blue',
                                    },
                                    '& label': {
                                        color: 'blue',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#1098F7',
                                        },
                                    },
                                }}
                                onChange={(e) => handleContactUsData(e)}
                                name='message'
                                value={contactUsData.message.value}
                                error={contactUsData.message.error}
                                helperText={contactUsData.message.helperText}
                                id="outlined-message"
                                label="Message"
                                variant="outlined"
                                type='text'
                            />
                        </Box>
                        <Box className='submit-form'>
                            <Button onClick={handleClear} size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                ':hover': {
                                    color: 'white !important',
                                    backgroundColor: '#f76e39 !important',
                                },
                            }} >Clear</Button>
                            <Button onClick={handleFormSubmit} size="small" variant="text" style={{ color: `white`, backgroundColor: '#03a9f4' }} sx={{
                                ':hover': {
                                    color: 'white !important',
                                    backgroundColor: '#f76e39 !important',
                                },
                            }} >Submit</Button>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContactUs