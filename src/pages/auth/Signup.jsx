import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/back1.jpg';
import EGImage from '../../assets/EG.png';
import USImage from '../../assets/US.png';
import FRImage from '../../assets/FR.png';
import PLImage from '../../assets/PL.png';
import TRImage from '../../assets/TR.png';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';

const countries = [
  { code: 'EG', label: 'Egypt', phone: '20', flag: '🇪🇬', image: EGImage },
  { code: 'US', label: 'United States', phone: '1', flag: '🇺🇸', image: USImage },
  { code: 'FR', label: 'France', phone: '33', flag: '🇫🇷', image: FRImage },
  { code: 'PL', label: 'Poland', phone: '48', flag: '🇵🇱', image: PLImage },
  { code: 'TR', label: 'Turkey', phone: '90', flag: '🇹🇷', image: TRImage },
];

function Signup() {
  const [selectedCountry, setSelectedCountry] = useState('EG');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', phone: '' });
  const navigate = useNavigate();

  // Validation functions
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const validatePassword = (password) => password.trim() !== ''; // Simplified: any non-empty password is valid
  const validatePhone = (phone) => /^\+?\d{10,15}$/.test(phone.trim());

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    const currentTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Athens', hour12: false });
    console.log(`handleSubmit triggered at ${currentTime} EEST`);

    const fields = [
      {
        name: 'email',
        value: email,
        required: true,
        validate: validateEmail,
        errorMsg: {
          required: 'Email is required',
          invalid: 'Please enter a valid email address',
        },
      },
      {
        name: 'password',
        value: password,
        required: true,
        validate: validatePassword,
        errorMsg: {
          required: 'Password is required',
          invalid: 'Password cannot be empty',
        },
      },
      {
        name: 'phone',
        value: phone,
        required: true,
        validate: validatePhone,
        errorMsg: {
          required: 'Phone number is required',
          invalid: 'Phone number must be between 10 and 15 digits',
        },
      },
    ];

    const newErrors = {};
    let isValid = true;

    fields.forEach((field) => {
      if (!field.value.trim()) {
        newErrors[field.name] = field.errorMsg.required;
        isValid = false;
      } else if (!field.validate(field.value)) {
        newErrors[field.name] = field.errorMsg.invalid;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      console.log('Signup submitted:', { email, password, phone, selectedCountry });
      navigate('/profile');
    }
  };

  return (
    <Grid container sx={{ height: '100vh', fontFamily: 'Source Serif Pro, serif', overflow: 'hidden' }}>
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          width: '50%',
          height: '100vh',
        }}
      />

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        square
        sx={{
          position: 'relative',
          px: 20.2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#FFFCFA',
          overflow: 'hidden',
          height: '100vh',
        }}
      >
        {/* Decorative Shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: 2,
            left: 0,
            width: '50%',
            height: '40%',
            backgroundColor: '#f8e2cf',
            border: '0px solid orange',
            clipPath: 'path("M0,0 C100,5 200,70 300,50 C400,0 350,200 250,250 C150,300 50,200 0,100 Z")',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 2,
            right: -50,
            width: '40%',
            height: '40%',
            backgroundColor: '#2f3e1e',
            border: '3px solid orange',
            borderRadius: '90% 5% 55% 50%',
            zIndex: 1,
          }}
        />

        {/* Form Container */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 450,
            position: 'relative',
            zIndex: 2,
            py: 5,
            minHeight: 600,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 700, mb: 3, color: '#50554A', lineHeight: 1.2 }}
          >
            Create<br />Account
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'left', mb: 3 }}>
            <Button
              variant="outlined"
              component="label"
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                border: '2px dashed #aaa',
                minWidth: 0,
                p: 0,
                fontSize: 24,
              }}
            >
              📷
              <input hidden accept="image/*" type="file" />
            </Button>
          </Box>

          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              required
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{ sx: { fontSize: 16, borderRadius: '25px' } }}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              label="Password"
              type="password"
              required
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{ sx: { fontSize: 16, borderRadius: '25px' } }}
              error={!!errors.password}
              helperText={errors.password}
            />

            {/* Country & Phone */}
            <Box sx={{ display: 'flex', gap: 2, mt: 2, mb: 3 }}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="country-select-label">Country</InputLabel>
                <Select
                  labelId="country-select-label"
                  value={selectedCountry}
                  label="Country"
                  onChange={handleCountryChange}
                  renderValue={(value) => {
                    const country = countries.find((c) => c.code === value);
                    return (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                        <img
                          src={country?.image}
                          alt={`${country?.label} flag`}
                          style={{ width: 24, height: 24, borderRadius: '50%' }}
                        />
                        <span>{country?.flag}</span>
                        <span>+{country?.phone}</span>
                      </Box>
                    );
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <img
                          src={country.image}
                          alt={`${country.label} flag`}
                          style={{ width: 24, height: 24, borderRadius: '50%' }}
                        />
                        <span>{country.flag}</span>
                        <span>{country.label} (+{country.phone})</span>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Your number"
                type="tel"
                required
                fullWidth
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                InputProps={{ sx: { fontSize: 16, borderRadius: '25px' } }}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Box>

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
                mb: 2,
                '&:hover': { bgcolor: '#273216' },
              }}
            >
              Done
            </Button>

            <Button
              type="button"
              fullWidth
              variant="text"
              sx={{
                color: '#50554A',
                py: 1.5,
                fontSize: 14,
                borderRadius: '25px',
                '&:hover': { bgcolor: '#FFF8F2' },
              }}
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Signup;