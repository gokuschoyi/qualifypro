import React, { useState } from 'react'
import './SideContact.css'
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Zoom,
    TextField,
    Button
} from '@mui/material'
const SideContact = (props) => {
    const { handleClose, open } = props

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

    //send email to backend api here
    const handleSubmit = () => {
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
        if(isNotEmpty){
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
        <Box className='contactus-dialog'>
            <Dialog
                open={open}
                TransitionComponent={Zoom}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{fontSize:'1.875rem'}}>Contact Us</DialogTitle>
                <DialogContent className='dialog-content-box'>
                    <Box className='client-name-box-side'>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClear}>Clear</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default SideContact