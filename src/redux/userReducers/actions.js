import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk(
  'user/register',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/user/register", details);

      const message = response.data;


      // Store token in local storage
      // localStorage.setItem("token", token);

      return message;
    } catch (error) {
      console.log("Registration Error:", error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  }
)

export const userLogin = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/user/login", credentials);

      const { token, user } = response.data;

      // Store token in local storage
      localStorage.setItem("token", token);

      return { token, doctor: user }; // Returns the doctor info
    } catch (error) {
      console.log("Login Error:", error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const forgetEmail = createAsyncThunk(
  'user/findEmail',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/user/forget-email",  email );
      return response.data;
    } catch (error) {
      console.log("Forget Email Error:", error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);

export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch("http://localhost:5000/user/change-password", credentials);
      return response.data;
    } catch (error) {
      console.log("Change Password Error:", error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);