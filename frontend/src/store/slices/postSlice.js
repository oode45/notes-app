import {createSlice} from "@reduxjs/toolkit";
import * as Sentry from "@sentry/react"

export const initialState = {
    isLoading: false,
    user: null,
    postsList: [],
    usersList: [],
    allUsersList: [],
};

const name = 'posts';

const postsSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchPosts: (state) => {
            state.isLoading = true
        },
        loadSuccess: (state, {payload: postsList}) => {
            state.postsList = postsList;
            state.isLoading = false
        },
        postSuccess: (state, {payload: post}) => {
            try {
                state.postsList.push(post)
            }catch (e) {
                Sentry.captureException(e)
            }
        },
        sendPost: (state => {
        }),
        removePost: (state => {
        }),

        loadUsers: (state, {payload: users}) => {
            state.usersList = users
        },
        loadAllUsers: (state, {payload: users}) => {
            state.allUsersList = users
        },
    }
});

export default postsSlice;