import {combineReducers} from "redux";
import usersSlice from "./slices/userSlice";
import postsSlice from "./slices/postSlice";
import mainPageSlice from "./slices/mainPageSlice";

const rootReducer = combineReducers({
    users: usersSlice.reducer,
    posts: postsSlice.reducer,
    mainPage: mainPageSlice.reducer,
});

export default rootReducer
