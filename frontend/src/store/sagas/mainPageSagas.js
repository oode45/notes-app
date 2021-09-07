import {cardItemLoadSuccess, fetchCardItems} from '../actions/mainPageActions'
import {put, takeEvery} from "redux-saga/effects"
import axiosApi from "../../axiosApi"

export function* loadCardItemsSaga() {
    try {
        const response = yield axiosApi.get('/card_items')
        console.log(response.data, 'CARDS')
        if (response.data) {
            yield put(cardItemLoadSuccess(response.data))
        } else {
            console.log('Error fetch cards items')
        }
    } catch (error) {
        console.log('some error')
    }
}

const mainPageSagas = [
    takeEvery(fetchCardItems, loadCardItemsSaga),
]

export default mainPageSagas