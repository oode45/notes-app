import {all} from 'redux-saga/effects';
import history from "./history";
import usersSagas from "./sagas/usersSagas";
import historySagas from "./sagas/historySagas";
import postsSagas from "./sagas/postsSagas";

export default function* rootSaga() {
    yield all([
        ...historySagas(history),
        ...usersSagas,
        ...postsSagas,
    ])
}