import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action for doctor login
export const loginDoctor = createAsyncThunk(
  "doctorAuth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("localhost:5000/doctor/login", credentials);

      // Store token in local storage
      localStorage.setItem("token", response.data.token);
      console.log('loggedin')

      return response.data; // Returns the doctor info
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);
