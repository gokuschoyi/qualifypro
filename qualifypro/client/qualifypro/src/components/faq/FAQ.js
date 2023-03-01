import React from 'react'
import './FAQ.css'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import Slide from '@mui/material/Slide';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const FAQ = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const mountedStyle = { animation: "inAnimationFaq 350ms ease-in" };
    const unmountedStyle = {
        animation: "outAnimationFaq 370ms ease-out",
        animationFillMode: "forwards"
    };

    return (
        <Box id='faq' className='faq-container padding'>
            <Typography variant='h1' className='faq-title'>
                F.A.Q
            </Typography>
            <Box className='faq-questions-box'>
                <Slide key='1' direction="up" timeout={500} in={true} >
                    <Accordion
                        TransitionProps={{ unmountOnExit: true }}
                        expanded={expanded === `panel1`}
                        onChange={handleChange(`panel1`)}

                    >
                        <AccordionSummary
                            className='faq-accordion-summary'
                            sx={{
                                '.MuiAccordionSummary-content': {
                                    textAlign: 'start',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease-in-out',
                                }
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography sx={{ flexShrink: 0 }} className='accordian-title'>
                                1. How to get a Builders Licence in Victoria?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='faq-accordian-details' style={expanded === `panel1` ? mountedStyle : unmountedStyle}>
                            <Typography>Step 1 :</Typography>
                            <ul>
                                <li>
                                    <Typography>Complete the Registration Application Form</Typography>
                                </li>
                                <li>
                                    <Typography>Complete Technical Referee Report</Typography>
                                </li>
                                <li>
                                    <Typography>Prepare a Portfolio of Domestic Building work to demonstrate your experience to the QualifyPro</Typography>
                                </li>
                            </ul>
                            <Typography>Step 2 :</Typography>
                            <ul>
                                <li>
                                    <Typography>Sit the Examination – Appoximately 60 Computer based Multiple Choice Questions and Complete VBA Plan based Tests at the Victorian Building Authority (VBA) offices as at the Docklands.</Typography>
                                </li>
                            </ul>
                            <Typography>Step 3 :</Typography>
                            <ul>
                                <li>
                                    <Typography>1 – 3 hour Interview with a QualifyPro Assessor</Typography>
                                </li>
                            </ul>
                            <Typography>If you want help to achieve your Builders Registration in Victoria we can help you STEP by STEP click here and CHOOSE THE LICENCE YOU NEED!
                            </Typography>
                            <Typography>If you want more detailed information on the process of getting your Licence in Victoria – Go to the next question in our FAQs or visit the following link to the QualifyPro website which provides you with the information and Forms necessary for Builders Registration.</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Slide>
                <Slide key='2' direction="up" timeout={500} in={true} >
                    <Accordion
                        TransitionProps={{ unmountOnExit: true }}
                        expanded={expanded === `panel2`}
                        onChange={handleChange(`panel2`)}

                    >
                        <AccordionSummary
                            className='faq-accordion-summary'
                            sx={{
                                '.MuiAccordionSummary-content': {
                                    textAlign: 'start',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease-in-out',
                                }
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography sx={{ flexShrink: 0 }} className='accordian-title'>
                                2. How to get a Builders Registration  in Victoria? Can you explain how it works?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='faq-accordian-details' style={expanded === `panel2` ? mountedStyle : unmountedStyle}>
                            <Typography>Testing 123</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Slide>
                <Slide key='3' direction="up" timeout={500} in={true} >
                    <Accordion
                        TransitionProps={{ unmountOnExit: true }}
                        expanded={expanded === `panel3`}
                        onChange={handleChange(`panel3`)}

                    >
                        <AccordionSummary
                            className='faq-accordion-summary'
                            sx={{
                                '.MuiAccordionSummary-content': {
                                    textAlign: 'start',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease-in-out',
                                }
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography sx={{ flexShrink: 0 }} className='accordian-title'>
                                3. Do I need to buy all your products to get my Builders Registration?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='faq-accordian-details' style={expanded === `panel3` ? mountedStyle : unmountedStyle}>
                            <Typography>Testing 123</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Slide>
                <Slide key='4' direction="up" timeout={500} in={true} >
                    <Accordion
                        TransitionProps={{ unmountOnExit: true }}
                        expanded={expanded === `panel4`}
                        onChange={handleChange(`panel4`)}

                    >
                        <AccordionSummary
                            className='faq-accordion-summary'
                            sx={{
                                '.MuiAccordionSummary-content': {
                                    textAlign: 'start',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease-in-out',
                                }
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4-content"
                            id="panel4-header"
                        >
                            <Typography sx={{ flexShrink: 0 }} className='accordian-title'>
                                4. How do I know that your information is relevant and up to date to help me get my Builders License?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='faq-accordian-details' style={expanded === `panel4` ? mountedStyle : unmountedStyle}>
                            <Typography>Testing 123</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Slide>
                <Slide key='5' direction="up" timeout={500} in={true} >
                    <Accordion
                        TransitionProps={{ unmountOnExit: true }}
                        expanded={expanded === `panel5`}
                        onChange={handleChange(`panel5`)}

                    >
                        <AccordionSummary
                            className='faq-accordion-summary'
                            sx={{
                                '.MuiAccordionSummary-content': {
                                    textAlign: 'start',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease-in-out',
                                }
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5-content"
                            id="panel5-header"
                        >
                            <Typography sx={{ flexShrink: 0 }} className='accordian-title'>
                                5. How much do your products and services cost?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='faq-accordian-details' style={expanded === `panel5` ? mountedStyle : unmountedStyle}>
                            <Typography>Testing 123</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Slide>
                <Slide key='6' direction="up" timeout={500} in={true} >
                    <Accordion
                        TransitionProps={{ unmountOnExit: true }}
                        expanded={expanded === `panel6`}
                        onChange={handleChange(`panel6`)}

                    >
                        <AccordionSummary
                            className='faq-accordion-summary'
                            sx={{
                                '.MuiAccordionSummary-content': {
                                    textAlign: 'start',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease-in-out',
                                }
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel6-content"
                            id="panel6-header"
                        >
                            <Typography sx={{ flexShrink: 0 }} className='accordian-title'>
                                6. What happens to any information that I give to QualifyPro?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='faq-accordian-details' style={expanded === `panel6` ? mountedStyle : unmountedStyle}>
                            <Typography>Testing 123</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Slide>
            </Box>
        </Box>
    )
}

export default FAQ
