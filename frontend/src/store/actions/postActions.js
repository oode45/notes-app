import postSlice from "../slices/postSlice"

export const {
    loadSuccess,
    postSuccess,
    fetchPosts,
    sendPost,
    removePost,
    loadUsers,
    loadAllUsers,
} = postSlice.actions