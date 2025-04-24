import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginDoctor, getDoctorInfo } from "../actions/authActions";

const initialState = {
    user: localStorage.getItem("token")||null,
    isAuthenticated: false,
    loading: false,
    error: null,
    userInfo: null,
};

// Auth Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginDoctor.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginDoctor.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.token;

            })
            .addCase(loginDoctor.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getDoctorInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDoctorInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.userInfo = action.payload.data;
            })
            .addCase(getDoctorInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;