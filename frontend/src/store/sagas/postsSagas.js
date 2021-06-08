import {NotificationManager} from 'react-notifications';
import {historyPush} from "../actions/historyActions"
import {put, takeEvery} from 'redux-saga/effects';
import axiosApi from "../../axiosApi";
import {
    loadSuccess,
    postSuccess,
    fetchPosts,
    sendPost,
    removePost, loadAllUsers, loadUsers,
} from "../actions/postActions";


export function* sendPostsSaga({payload: textData}) {
    try {
        const response = yield axiosApi.post('/posts', textData)

        if (response.data) {
            yield put(postSuccess(response.data))
        } else {
            NotificationManager.error('Posting failed')

        }
        yield put(historyPush('/'));
    } catch (error) {
        console.log(error)
    }
}

export function* loadPostsSaga() {
    try {
        const response = yield axiosApi.get('/posts')
        if (response.data) {
            console.log(response.data)
            yield put(loadAllUsers(response.data.allUserList))
            yield put(loadUsers(response.data.userList))
            yield put(loadSuccess(response.data.posts))
        } else {
            NotificationManager.error('Load posts failed')
        }
        yield put(historyPush('/'));
    } catch (error) {
        console.log('some error')
    }
}

export function* removePostSaga({payload: id}) {
    try {
        const response = yield axiosApi.delete(`/posts/${id}`)
        if (response.data) {
            yield put(loadSuccess(response.data))
        } else {
            NotificationManager.error('Remove post failed')
        }
    } catch (e) {
        console.log('remove post error')
    }
}


const postsSagas = [
    takeEvery(fetchPosts, loadPostsSaga),
    takeEvery(sendPost, sendPostsSaga),
    takeEvery(removePost, removePostSaga),
];

export default postsSagas;