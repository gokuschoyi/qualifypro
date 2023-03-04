import React from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import { getSessionId } from '../../api/Stripe'
import './Register.css'
import {
    Box,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Divider,
    Button,
    Checkbox
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { Footer, SimpleNavbar } from '../../components'
import COURSE_DATA from '../course_details/CourseData'


const Register = () => {
    const { courseId } = useParams()
    var data = COURSE_DATA[courseId]
    const line_items = [
        {
            "quantity": 1,
            "price_data": {
                "currency": "aud",
                "unit_amount": data.course_fee * 100,
                "product_data": {
                    "name": data.title,
                    "description": data.description,
                    "images": [
                        "https://picsum.photos/200/300"
                    ]
                }
            }
        }
    ]

    const initialState = {
        firstName: '',
        lastName: '',
        addressHome: '',
        addressApartment: '',
        addressSuburb: '',
        addressState: '',
        addressPostcode: '',
        phoneNumber: '',
        email: '',
    }

    const [state, setState] = React.useState(initialState)

    const handleChange = (event) => {
        const { name, value } = event.target
        setState({
            ...state,
            [name]: value
        })
    }

    const {
        firstName,
        lastName,
        addressHome,
        addressApartment,
        addressSuburb,
        addressState,
        addressPostcode,
        phoneNumber,
        email
    } = state

    const [checked, setChecked] = React.useState(false)

    const handleCheckBox = (e) => {
        setChecked(e.target.checked)
    }

    const registerObject = {}
    const stripe = useStripe()

    const handlePayment = async () => {
        registerObject.clientdata = state
        registerObject.coursedata = { line_items, email }
        try {
            const response = await getSessionId(registerObject)
            if (response.status === 200) {
                const { id } = response.data
                const { error } = await stripe.redirectToCheckout({
                    sessionId: id
                })
                if (error) {
                    console.log(error)
                }
                console.log(id)
            }
        }
        catch (err) {
            var response = err.response
            if (response.status === 400) {
                console.log(response.data.error)
            }
            if (response.status === 500) {
                console.log(response.data.error)
            }
        }
    }

    return (
        <Box className='regsiter-container'>
            <SimpleNavbar />
            <Box className='register-content'>
                <Typography variant='h3' className='register-title'>Billing Details</Typography>
                <Box className='client-details-box'>
                    <Box className='client-name-box'>
                        <TextField name='firstName' value={firstName} onChange={(e) => handleChange(e)} fullWidth required id="first-name" label="First Name" variant="outlined" />
                        <TextField name='lastName' value={lastName} onChange={(e) => handleChange(e)} fullWidth required id="last-name" label="Last Name" variant="outlined" />
                    </Box>
                    <Box className='address-box'>
                        <TextField name='addressHome' value={addressHome} onChange={(e) => handleChange(e)} fullWidth required id="address-home" label="House number and Street name" variant="outlined" />
                        <TextField name='addressApartment' value={addressApartment} onChange={(e) => handleChange(e)} fullWidth id="address-apartment" label="Apartment, suite, unit, etc. (optional)" variant="outlined" />
                        <TextField name='addressSuburb' value={addressSuburb} onChange={(e) => handleChange(e)} fullWidth required id="address-suburb" label="Suburb" variant="outlined" />
                        <FormControl fullWidth>
                            <InputLabel id="select-state">Select State</InputLabel>
                            <Select
                                labelId="select-state"
                                id="demo-simple-select"
                                label="State"
                                value={addressState}
                                name='addressState'
                                onChange={(e) => handleChange(e)}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value='Victoria'>Victoria</MenuItem>
                                <MenuItem value='Australian Capital Territory'>Australian Capital Territory</MenuItem>
                                <MenuItem value='New South Wales'>New South Wales</MenuItem>
                                <MenuItem value='Western Territory'>Northern Territory</MenuItem>
                                <MenuItem value='Queensland'>Queensland</MenuItem>
                                <MenuItem value='South Australia'>South Australia</MenuItem>
                                <MenuItem value='Tasmania'>Tasmania</MenuItem>
                                <MenuItem value='Western Australia'>Western Australia</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField name='addressPostcode' value={addressPostcode} onChange={(e) => handleChange(e)} fullWidth required id="address-postcode" label="Postcode" variant="outlined" />
                        <TextField name='phoneNumber' value={phoneNumber} onChange={(e) => handleChange(e)} fullWidth required id="address-phonenumber" label="Phone Number" variant="outlined" />
                        <TextField name='email' value={email} onChange={(e) => handleChange(e)} fullWidth required id="email" label="Email" variant="outlined" />
                    </Box>
                </Box>
                <Box className='product-description'>
                    <Typography variant='h3' className='product-title'>Your Order</Typography>
                    <Box className='product-description-header'>
                        <Typography variant='h5' className='product-name'>PRODUCT</Typography>
                        <Typography variant='h5' className='product-price'>SUBTOTAL</Typography>
                    </Box>
                    <Divider />
                    <Box className='product-description-details'>
                        <Typography variant='h5' className='product-name'>{data.title} x 1</Typography>
                        <Typography variant='h5' className='product-price'>${data.course_fee}</Typography>
                    </Box>
                    <Divider />
                    <Box className='product-description-gst'>
                        <Typography variant='h5' className='product-name'>GST 10%</Typography>
                        <Typography variant='h5' className='product-price'>${data.course_fee * 0.1}</Typography>
                    </Box>
                    <Divider sx={{ borderWidth: '2px' }} />
                    <Box className='product-description-total'>
                        <Typography variant='h5' className='product-name'>TOTAL</Typography>
                        <Typography variant='h5' className='product-price'>${(data.course_fee * 1.1).toFixed(2)}</Typography>
                    </Box>
                    <Box className='product-description-disclaimer'>
                        <Typography variant='h5' className='product-name'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className='tandc-link'><a href='/privacy-policy'>privacy policy</a></span> .</Typography>
                        <Box className='checkbox'>
                            <Checkbox onChange={(e) => handleCheckBox(e)} />
                            <Typography variant='h5' className='product-name'>I have read and agree to the website <span className='tandc-link'><a href='/terms-and-conditions'>terms and conditions</a></span> *</Typography>
                        </Box>
                    </Box>
                    <Box className='pay-now'>
                        <Button onClick={handlePayment} size="small" variant="text" style={{ fontSize: '14px', color: `white`, backgroundColor: '#399ff7', }} sx={{
                            ':hover': {
                                color: 'white !important',
                                backgroundColor: '#f76e39 !important',
                            },
                        }}>Pay Now</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Register