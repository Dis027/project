import React, { useState } from "react";
import { TextField, Button, Checkbox, Typography, Link, Box, FormControlLabel } from "@mui/material";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box
    width="100vw"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    >
    <Box
      sx={{
        width: 300,
        height: "70vh",
        padding: 4,
        backgroundColor: "#141A2A",
        borderRadius: "10px",
        color: "#fff",
        mx: "auto",
       
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center", color: "#fff" }}>
        Sign Up
      </Typography>

      {/* First Name and Last Name */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <TextField
          variant="outlined"
          label="First Name"
          InputLabelProps={{ style: { color: '#fff' } }}
          InputProps={{
            style: { color: "#fff" },
          }}
          sx={{ mr: 1, width: "48%" }}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          InputLabelProps={{ style: { color: '#fff' } }}
          InputProps={{
            style: { color: "#fff" },
          }}
          sx={{ width: "48%" }}
        />
      </Box>

      {/* Email */}
      <TextField
        fullWidth
        variant="outlined"
        label="Email"
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{
          style: { color: "#fff" },
        }}
        sx={{ mb: 2 }}
      />

      {/* Password */}
      <Box sx={{ display: "flex", mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          type={showPassword ? "text" : "password"}
          label="Password"
          InputLabelProps={{ style: { color: '#fff' } }}
          InputProps={{
            style: { color: "#fff" },
          }}
        />
        <Button onClick={handlePasswordVisibility} sx={{ ml: 2, color: "#fff" }}>
          {showPassword ? "Hide" : "Show"}
        </Button>
      </Box>

      {/* Confirm Password */}
      <Box sx={{ display: "flex", mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          type={showConfirmPassword ? "text" : "password"}
          label="Confirm Password"
          InputLabelProps={{ style: { color: '#fff' } }}
          InputProps={{
            style: { color: "#fff" },
          }}
        />
        <Button onClick={handleConfirmPasswordVisibility} sx={{ ml: 2, color: "#fff" }}>
          {showConfirmPassword ? "Hide" : "Show"}
        </Button>
      </Box>

      {/* Checkbox */}
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleCheckboxChange} sx={{ color: "#fff" }} />}
        label={
          <Typography variant="body2" sx={{ color: "#fff" }}>
            I Agree with <Link href="#" sx={{ color: "#E94560" }}>privacy</Link> and <Link href="#" sx={{ color: "#E94560" }}>policy</Link>
          </Typography>
        }
        sx={{ mb: 2 }}
      />

      {/* Sign Up Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: "#E94560", "&:hover": { backgroundColor: "#E94560" } }}
      >
        Sign Up
      </Button>

      {/* Sign In Link */}
      <Typography variant="body2" sx={{ textAlign: "center", mt: 2, color: "#fff" }}>
        Already have an account? <Link href="#" sx={{ color: "#E94560" }}>Sign in</Link>
      </Typography>
    </Box>
    </Box>
  );
};

export default SignUp;
