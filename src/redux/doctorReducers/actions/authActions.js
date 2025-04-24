import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action for doctor login
export const loginDoctor = createAsyncThunk(
  "doctorAuth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/doctor/login", credentials);

      const { token, doctor } = response.data;

      // Store token in local storage
      localStorage.setItem("token", token);

      return { token, doctor }; // Returns the doctor info
    } catch (error) {
      console.log("Login Error:", error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

// Async action to get doctor info
export const getDoctorInfo = createAsyncThunk(
  "doctor/info",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return thunkAPI.rejectWithValue("No token found, please login");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Proper Bearer token format
        },
      };

      const response = await axios.get("http://localhost:5000/doctor/profile", config);
      
      return {data:response.data}; // Returns doctor profile data
    } catch (error) {
      console.log("Error in getDoctorInfo:", error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to fetch doctor info");
    }
  }
);
