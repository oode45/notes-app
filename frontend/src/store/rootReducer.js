import {combineReducers} from "redux";
import usersSlice from "./slices/userSlice";
import postsSlice from "./slices/postSlice";

const rootReducer = combineReducers({
    users: usersSlice.reducer,
    posts: postsSlice.reducer
});

export default rootReducer;