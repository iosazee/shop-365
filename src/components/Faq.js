import React from 'react';
import {Container, Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from "@mui/material";
import FAQ from '../assets/FAQ.json';

function Faq(){

    const [expanded, setExpanded] = React.useState('panel0');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    return(
        <Container sx={{flexGrow:1}}>
            <Typography variant="h3" style={{marginTop:30, textDecoration: "underline #ff0000 solid", fontFamily: "Pacifico"}}>FAQs</Typography>
            <Paper elevation={3} sx={{my: 4}}>
                {FAQ.map((faq) => {
                return (
                    <Accordion disableGutters={true} key={faq.id} expanded={expanded === `panel${faq.id}`} onChange={handleChange(`panel${faq.id}`)}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
                })}
            </Paper>
            <Typography sx={{my: 2}}>
                Can't find the question or the answer you are looking for? Please don’t hesitate to contact us
            </Typography>
        </Container>
    )
}

export default Faq;