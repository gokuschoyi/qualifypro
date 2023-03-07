import React from 'react'
import './SimpleNavbar.css'
import { Box } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
const SimpleNavbar = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <Box className='simple-navbar'>
            <Box className='simple-navbar-logo'>
                <a className='simple-logo' href='/'>QualifyPro</a>
                <KeyboardDoubleArrowLeftOutlinedIcon onClick={goBack} className='go-back'/>
            </Box>
        </Box>
    )
}

export default SimpleNavbar