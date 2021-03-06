import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    registerLoading: false,
    registerError: null,
    loginLoading: false,
    loginError: null,
    user: null,
};

const name = 'users';

const usersSlice = createSlice({
    name,
    initialState,
    reducers: {
        registerRequest: state => {
            state.registerLoading = true;
        },
        registerSuccess: (state, {payload: user}) => {
            state.registerLoading = false;
            state.user = user;
        },
        loginRequest: state => {
            state.loginLoading = true;
        },
        loginSuccess: (state, {payload: user}) => {
            state.loginLoading = false;
            state.user = user;
        },
        logoutRequest: () => {
        },
        logoutSuccess: state => {
            state.user = null;
        },
        loginFacebookRequest: state => {
            state.loginLoading = true

        },
        subscribeRequest: () => {},
        unSubscribeRequest: () => {},

    }
});

export default usersSlice;