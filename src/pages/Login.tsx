import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {FormControlLabel, FormLabel} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import './Login.css';
import Routes from "../Routes";



const defaultTheme = createTheme();

export default function LogIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Username: ", process.env.REACT_APP_USERNAME);
        console.log("Password", process.env.REACT_APP_PASSWOR);
        if (
          username === process.env.REACT_APP_USERNAME &&
          password === process.env.REACT_APP_PASSWORD
        ) {
          sessionStorage.setItem("isLoggedIn", "true");
        navigate(`/home`);
          console.log("Login successful!");
        } else {
          setError("Invalid username or password");
        }
        console.log("LoggedIn");
      };
  return (
    // <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className="loginContainer" sx={{ bgcolor: '#ffff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',  }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormLabel htmlFor="salutation"> Email </FormLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              autoComplete="email"
              autoFocus
            />
            <FormLabel htmlFor="salutation"> Password </FormLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , bgcolor: '#EA4403'}}
            >
            Login
            </Button>  
            <div style={{ minHeight: "1em" }}>
            {error && (
              <span>
                {error}
              </span>
            )}
          </div>
          </Box>
        </Box>
        {/* <Routes /> */}
      </Container>
    // </ThemeProvider>
  );
}