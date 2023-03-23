import React, {useState} from "react";
import Typography  from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";


const LoginForm = () => {


    const [email, setEmail]  = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault();

        // Authenticate user
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          console.error("Error signing in:", error.message);
        } else {
          navigate("/admin/dashboard");
        }
      };


    return (
        <section style={{marginBottom:25}}>
            <Typography variant="h3" style={{marginTop:25}}>Login</Typography>
            <Card style={{ maxWidth:450, margin:"0 auto", padding:"20px 5px" }} >
                <CardContent>
                    <form onSubmit={handleLogin} >
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField
                                    label='Email'
                                    type='email'
                                    placeholder='Enter your email address'
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label='Password'
                                    type="password"
                                    placeholder='Type your password here'
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <Button variant="contained" color="primary" fullWidth type="submit"  >
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </section>
    )
}


const LogoutButton = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        // Log out user
        await supabase.auth.signOut();
        navigate("/");
      };

    return (
      <Button  onClick={handleLogout} >Logout</Button>
    )
}


const LoginLogoutPage = () => {
    const {user} = supabase.auth.getSession()

    return (
        <section>
            {
                user ? (
                    <>
                    <Typography>Welcome {user.email}</Typography>
                    <LogoutButton />
                    </>
                ) : (
                    <>
                    <Typography>ADMIN</Typography>
                    <LoginForm />
                    </>
                )

            }
        </section>
    )
}

export default LoginLogoutPage;
