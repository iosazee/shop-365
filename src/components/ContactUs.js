import React, {useState} from "react";
import Typography  from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


const ContactUs = () => {

    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })
    const [formResponseMessage, setFormResponseMessage] = useState("")

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        const newContactInfo = {
            ...contactInfo,
            [inputName]: inputValue
        }
        setContactInfo(newContactInfo)

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(contactInfo.message.length <= 10) {
            setFormResponseMessage("Please enter in a valid message")
        } else {
            setFormResponseMessage("Form submitted successfully");
            setContactInfo({
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            })

        }
    }

    return (
        <Container sx={{flexGrow:1, display: "flex", justifyContent: "center", alignItems: "center", my:3}} >
            <Container>
                <Typography variant="h3" sx={{textDecoration: "underline #ff0000 solid ", mb: 2, fontFamily: "Pacifico"}}>Contact Us</Typography>
                <Card style={{ maxWidth:450, margin:"0 auto", padding:"20px 5px" }} >
                    <CardContent>
                        <Typography gutterBottom >Fill up the form and we will get back to you within 48hrs</Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        label='First Name'
                                        placeholder='Enter your first name'
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="firstName"
                                        value={contactInfo.firstName}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        label='Last Name'
                                        placeholder='Enter your last name'
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="lastName"
                                        value={contactInfo.lastName}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField
                                        label='Email'
                                        type='email'
                                        placeholder='Enter your email address'
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="email"
                                        value={contactInfo.email}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField
                                        label='Message'
                                        placeholder='Type your message here'
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="message"
                                        value={contactInfo.message}
                                        onChange={handleChange}
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <Typography gutterBottom variant="body2" component="p" color="red">{formResponseMessage}</Typography>
                                </Grid>
                                <Grid xs={12} item>
                                    <Button variant="contained" color="primary" fullWidth type="submit" >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </Container>
    )
}

export default ContactUs;