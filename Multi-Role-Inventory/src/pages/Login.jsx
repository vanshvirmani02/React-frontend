import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, MenuItem } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });

      // Extract JWT token & user role from response
      const { token } = response.data;
      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT Token
      const userRole = decodedToken.role;

      // Save token to localStorage
      localStorage.setItem("token", token);

      // Dispatch action to store user & token in Redux
      dispatch(loginSuccess({ user: { email }, token, role: userRole }));

      // Redirect based on role
      if (userRole === "admin") {
        navigate("/admin/analytics");
      } else if (userRole === "vendor") {
        navigate("/vendor/products");
      } else if (userRole === "customer") {
        navigate("/orders");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Invalid credentials");
    }
  };

  return (
    <Container maxWidth="xs" sx={{  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleLogin}>
        <TextField fullWidth label="Email" variant="outlined" margin="normal" onChange={(e) => setEmail(e.target.value)} required />
        <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" onChange={(e) => setPassword(e.target.value)} required />
        {error && <Typography color="error">{error}</Typography>}
        <Button fullWidth variant="contained" color="primary" type="submit">Login</Button>
        <Typography variant="body2" sx={{ mt: 2 }} align="center">
        Don't have an account? <a href="/register">Register</a>
        </Typography>
      </form>
    </Container>
  );
};

export default Login;
