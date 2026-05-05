import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/back1.jpg';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Link,
} from '@mui/material';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login check (replace with real logic later)
    if (email && password) {
      navigate('/shop');
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <Grid
      container
      direction={{ xs: 'column', md: 'row' }}  
      sx={{
        backgroundColor: '#FFFCFA',
        height: '100vh',
        width: '100vw',
        fontFamily: 'Source Serif Pro, serif',
        overflow: 'hidden', // Optional: Prevent overflow issues
      }}
    >
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          px: 46,
          textAlign: 'center',
          marginRight: '0px',
        }}
      ></Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        square
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          px: 25,
          backgroundColor: '#FFFCFA',
          p: 0,
          marginLeft: 20,
        }}
      >
        {/* Decorative shapes */}
        <Box
          sx={{
            marginLeft: '413px',
            marginTop: '432px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '40%',
            backgroundColor: '#334B1C',
            border: '3px solid orange',
            borderRadius: '100% 0 0 0',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            marginRight: '333px',
            marginBottom: '433px',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '60%',
            height: '40%',
            backgroundColor: '#F8E2CF',
            border: '3px solid orange',
            borderRadius: '0 0 100% 0',
            zIndex: 1,
          }}
        />
        <Box sx={{ width: '100%', maxWidth: 450, py: 4, zIndex: 2 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 700, mb: 4, color: '#50554a' }}
          >
            Login
          </Typography>

          <Typography variant="h6" sx={{ color: '#50554a', mb: 4 }}>
            Good to see you back!
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              margin="normal"
              InputProps={{ sx: { fontSize: 16, borderRadius: '25px' } }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              margin="normal"
              InputProps={{ sx: { fontSize: 16, borderRadius: '25px' } }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Typography
              align="end"
              sx={{
                mt: 0,
                fontSize: '16px',
                color: '#50554a',
                cursor: 'pointer',
              }}
            >
              Forgot password?
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                bgcolor: '#2f3e1e',
                color: '#f8e2cf',
                borderRadius: '25px',
                py: 1.5,
                fontSize: 16,
                mt: 3,
                mb: 2,
                '&:hover': { bgcolor: '#273216' },
              }}
            >
              Log in
            </Button>

            <Typography align="center" sx={{ mt: 3, color: '#50554a' }}>
              Don't have an account?{' '}
              <Link href="/signup" underline="hover" sx={{ color: '#FD862C' }}>
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
