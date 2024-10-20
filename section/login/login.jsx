import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  TextField,
  Typography,
  Link,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google'; // Google Icon for login
import axios from 'axios';
import Cookies from 'js-cookie';
import { Navigate,useNavigate  } from 'react-router-dom';


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = async (e) =>{
    e.preventDefault()
    console.log(email)
    console.log(password)
    try {
      const response = await axios.post('http://localhost:4000/login', {
          username:email,
          password
      });

  console.log(response.data.user.FirstName);
  
    if (response.data && response.data.user) {      
      Cookies.set('user', response.data.user.FirstName, { expires: 1 });     
      navigate("/")
    }
      
      
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <Box
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        sx={{
          width: '400px',
          padding: '40px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          // Added a flex column layout to make sure elements stack correctly
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Login Title */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Login
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Hi, Welcome back
        </Typography>

        {/* Google Login Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Login with Google
        </Button>

        {/* Divider */}
        <Divider sx={{ margin: '20px 0' }}>or Login with Email</Divider>

        {/* Email Input */}
        <TextField
          fullWidth
          label="Email"
          type="email"
          placeholder="E.g. johndoe@email.com"
          margin="normal"
          variant="outlined"
          onChange={(e)=>setEmail(e.target.value)}
        />

        {/* Password Input */}
        <TextField
          fullWidth
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          margin="normal"
          variant="outlined"
          onChange={(e)=>setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Remember Me & Forgot Password */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember Me"
          />
          <Link href="#" underline="none" color="primary">
            Forgot Password?
          </Link>
        </Box>

        {/* Login Button */}
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{
            backgroundColor: '#3f51b5',
            color: '#fff',
            fontWeight: 'bold',
            textTransform: 'none',
            marginTop: '20px',
            '&:hover': {
              backgroundColor: '#303f9f',
            },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        {/* Create Account Link */}
        <Typography mt={2} textAlign="center">
          Not registered yet?{' '}
          <Link href="/register" underline="none" color="primary">
            Create an account
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
