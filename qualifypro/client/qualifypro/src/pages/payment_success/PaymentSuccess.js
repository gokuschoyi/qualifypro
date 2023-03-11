import React, { useEffect, useState } from 'react'
import './PaymentSuccess.css'
import { useParams } from 'react-router-dom'
import { Box, Typography, Divider, Button, CircularProgress } from '@mui/material'
import { getClientDetails } from '../../api/Stripe'
import { Footer, SimpleNavbar, MetaProvider } from '../../components'
const PaymentSuccess = () => {
    const { session_id } = useParams()
    const [clientInfo, setClientInfo] = useState('')
    useEffect(() => {
        var data = { session_id }
        const fetchClientDetails = async () => {
            const clientInfo = await getClientDetails(data)
            setClientInfo(clientInfo.data.userData)
        }
        fetchClientDetails()
    }, [session_id])

    console.log(clientInfo)

    const baseUrl = process.env.REACT_APP_BASEURL;

    const downloadQualifyProInvoice = async (invoiceId) => {
        window.open((`${baseUrl}/download_receipt/?invoiceId=${invoiceId}`),'_self')
    }

    const downloadStripeInvoice = (e)=>{
        window.open(`${clientInfo.stripe_receipt}`,'_self')
    }

    return (
        <Box className='payment-success'>
            <MetaProvider title='Register | QualifyPro' description='Thankyou for yout purchase' link={`payment_success/${session_id}`} />
            <SimpleNavbar />
            <Box className='payment-success-content padding'>
                <Typography variant='h1'>Payment Successful</Typography>
                <Typography sx={{ marginTop: '20px' }} variant='h3'>Thank you for your purchase, {clientInfo.user_name}</Typography>
                <Typography sx={{ marginTop: '20px' }} variant='h3' className='product-title'>Your Order Summary</Typography>
                {clientInfo === '' ? <CircularProgress /> :
                    <Box className='product-description'>
                        <Box className='product-description-header'>
                            <Typography variant='h5' className='product-name'>PRODUCT</Typography>
                            <Typography variant='h5' className='product-price'>SUBTOTAL</Typography>
                        </Box>
                        <Divider />
                        <Box className='product-description-details'>
                            <Typography variant='h5' className='product-name'>{clientInfo.course_description} x 1</Typography>
                            <Typography variant='h5' className='product-price'>${Math.round((parseInt(clientInfo.amount_subtotal) / 1.1) / 100).toFixed(2)}</Typography>
                        </Box>
                        <Divider />
                        <Box className='product-description-gst'>
                            <Typography variant='h5' className='product-name'>GST 10%</Typography>
                            <Typography variant='h5' className='product-price'>${Math.round((parseInt(clientInfo.amount_subtotal) / 1.1) * 0.1 / 100).toFixed(2)}</Typography>
                        </Box>
                        <Divider sx={{ borderWidth: '2px' }} />
                        <Box className='product-description-total'>
                            <Typography variant='h5' className='product-name'>TOTAL</Typography>
                            <Typography variant='h5' className='product-price'>${(parseInt(clientInfo.amount_subtotal) / 100).toFixed(2)}</Typography>
                        </Box>
                        <Box className='invoice-download-buttons'>
                            <Button onClick={(e) => downloadQualifyProInvoice(clientInfo.invoice_id)} size="small" variant="text" style={{ fontSize: '14px', color: `white`, backgroundColor: '#399ff7', }} sx={{
                                ':hover': {
                                    color: 'white !important',
                                    backgroundColor: '#f76e39 !important',
                                },
                            }}>QualifyPro Invoice</Button>
                            <Button onClick={(e) => downloadStripeInvoice(e)} size="small" variant="text" style={{ fontSize: '14px', color: `white`, backgroundColor: '#399ff7', }} sx={{
                                ':hover': {
                                    color: 'white !important',
                                    backgroundColor: '#f76e39 !important',
                                },
                            }}>Stripe Invoice</Button>
                        </Box>
                    </Box>
                }
            </Box>
            <Footer />
        </Box>
    )
}

export default PaymentSuccess