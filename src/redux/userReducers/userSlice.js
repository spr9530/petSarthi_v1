import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changePassword, forgetEmail, userLogin, userRegister } from "./actions";

const initialState = {
    user: localStorage.getItem("token") || null,
    isAuthenticated: false,
    loading: false,
    error: null,
    userInfo: null,
    message: null
};

// Auth Slice
const userSlice = createSlice({
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
            .addCase(userRegister.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.token;
                state.message = action.payload.message;
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.token;
                state.userInfo = action.payload.token;

            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // FORGET EMAIL
            .addCase(forgetEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = null;
            })
            .addCase(forgetEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
            })
            .addCase(forgetEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // CHANGE PASSWORD
            .addCase(changePassword.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = null;
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    },
});

export default userSlice.reducer;