import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage"
import {initialState} from "./slices/userSlice"
import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer"
import axiosApi from "../axiosApi"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: true,
    preloadedState: loadFromLocalStorage(),
});

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    saveToLocalStorage({
        users: {
            ...initialState,
            user: store.getState().users.user,
        }
    });
});

axiosApi.interceptors.request.use(config => {
    try {
        config.headers['Authorization'] = store.getState().users.user.token;
    } catch (e) {
        // do nothing, no token exists
    }
    return config;
});

axiosApi.interceptors.response.use(res => res, e => {
    if (!e.response) {
        e.response = {data: {global: 'No internet'}};
    }

    throw e;
})

export default store
