import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null, // Persist token
  role: localStorage.getItem("role") || null, // Persist role
  isAuthenticated: !!localStorage.getItem("token"), // Check if token exists
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      const { user, token, role } = action.payload;
      state.user = user;
      state.token = token;
      state.role = role;
      state.isAuthenticated = true;

      // Store in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
    },

    loginSuccess: (state, action) => {
      const { user, token } = action.payload;

      // ✅ Decode JWT to get role
      const decodedToken = JSON.parse(atob(token.split(".")[1])); 
      const role = decodedToken.role || "customer"; // Default to customer

      state.user = user;
      state.token = token;
      state.role = role;
      state.isAuthenticated = true;

      // Store in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;

      // Remove from local storage
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
  },
});

export const { registerSuccess, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
