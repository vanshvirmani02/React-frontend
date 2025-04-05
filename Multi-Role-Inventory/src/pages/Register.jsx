import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, MenuItem, Container, Typography, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { registerSuccess } from "../redux/authSlice"; // Adjust the path based on your project
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
    const nav = useNavigate();
  const { handleSubmit, control, watch } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    try {
        const response = await axios.post("http://localhost:5000/api/auth/register", {
          name: data.name,
          email: data.email,
          password: data.password,
          role: data.role,
        });
  
        console.log("Response Data:", response.data);
  
        // Extract JWT token
        const { token, user } = response.data;
  
        // Save token to localStorage (for persistence)
        localStorage.setItem("token", token);
  
        // Dispatch action to store user in Redux
        dispatch(registerSuccess({ user, token }));
  
        alert("Registration Successful!");
        nav("/login"); // Redirect to login page after successful registration
      } catch (err) {
        setError(err.response?.data?.message || "Registration failed. Try again.");
      }
    };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 5, p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" textAlign="center" mb={3}>
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Name" fullWidth margin="normal" required />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Email" fullWidth margin="normal" required type="email" />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Password" fullWidth margin="normal" required type="password" />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Re-enter Password" fullWidth margin="normal" required type="password" />
            )}
          />
          <Controller
            name="role"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} select label="Role" fullWidth margin="normal" required>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="vendor">Vendor</MenuItem>
                <MenuItem value="customer">Customer</MenuItem>
              </TextField>
            )}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }} align="center">
        Already have an account ! <a href="/login">Login In</a>
        </Typography>
        </form>
      </Box>
    </Container>
  );
}
