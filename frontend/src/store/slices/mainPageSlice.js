import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    isHoverFunctionsButton: false
};

const name = 'mainPage';

const mainPageSlice = createSlice({
    name,
    initialState,
    reducers: {
        hoverFunctionsButton: (state, {payload: isShow}) => {
            state.isHoverFunctionsButton = isShow;
        },

    }
});

export default mainPageSlice;