import usersSlice from "../slices/userSlice"

export const {
    registerRequest,
    registerSuccess,
    loginRequest,
    loginSuccess,
    logoutSuccess,
    logoutRequest,
    loginFacebookRequest,
    subscribeRequest,
    unSubscribeRequest,
} = usersSlice.actions;