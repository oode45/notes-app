import {NotificationManager} from 'react-notifications';
import {historyPush} from "../actions/historyActions"
import {put, takeEvery} from 'redux-saga/effects';
import axiosApi from "../../axiosApi";
import {
    loginRequest,
    loginSuccess,
    logoutRequest,
    logoutSuccess,
    registerRequest,
    registerSuccess,
    loginFacebookRequest,
    subscribeRequest, unSubscribeRequest
} from "../actions/userActions";
import * as Sentry from "@sentry/react";
import {loadSuccess} from "../actions/postActions";


export function* registerUser({payload: userData}) {
    try {
        const response = yield axiosApi.post('/user/signup', userData)
        if (response.data.user) {
            yield put(registerSuccess(response.data.user))
            NotificationManager.success('Registration successful')
        } else {
            NotificationManager.error('Registration failed')

        }
        yield put(historyPush('/'));
    } catch (error) {
        console.log('register error')
    }
}

export function* loginUser({payload: userData}) {
    try {
        const response = yield axiosApi.post('/user/sessions', userData)
        yield put(loginSuccess(response.data.user))
        yield put(historyPush("/"))
        NotificationManager.success('Login successful')
    } catch (error) {
        Sentry.captureException(error)
        NotificationManager.error('Could not login')
    }
}


export function* logout() {
    try {
        yield axiosApi.delete('/user/sessions')
        yield put(logoutSuccess())
        yield put(historyPush('/'))
        NotificationManager.success('Logged out!')
    } catch (e) {
        NotificationManager.error('Could not logout')
    }
}

export function* facebookLogin({payload: data}) {
    try {
        const response = yield axiosApi.post('/user/facebookLogin', data)
        yield put(loginSuccess(response.data.user))
        yield put(historyPush('/'))
        NotificationManager.success('Login successful')
    } catch (error) {
        NotificationManager.error('Could not logout')

    }
}

export function* subscribeUser({payload: id}) {
    try {
        const response = yield axiosApi.post('/user/add', {id})
        yield put(loginSuccess(response.data.user))
    } catch (error) {
        NotificationManager.error('Could not add user to friends')
    }
}

export function* unSubscribeUser({payload: id}) {
    try {
        const response = yield axiosApi.post('/user/remove', {id})
        yield put(loginSuccess(response.data.user))
    } catch (error) {
        NotificationManager.error('Could not add user to friends')
    }
}

const usersSagas = [
    takeEvery(registerRequest, registerUser),
    takeEvery(loginRequest, loginUser),
    takeEvery(loginFacebookRequest, facebookLogin),
    takeEvery(logoutRequest, logout),
    takeEvery(subscribeRequest, subscribeUser),
    takeEvery(unSubscribeRequest, unSubscribeUser),
];

export default usersSagas;