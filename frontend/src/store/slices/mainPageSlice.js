import {createSlice} from "@reduxjs/toolkit"

export const initialState = {
    isHoverFunctionsButton: false,
    cardsArrayFunctions: []
};

const name = 'mainPage'

const mainPageSlice = createSlice({
    name,
    initialState,
    reducers: {
        hoverFunctionsButton: (state, {payload: isShow}) => {
            state.isHoverFunctionsButton = isShow;
        },
        fetchCardItems: (state => {
        }),

        cardItemLoadSuccess: (state, {payload: cardItemsArray}) => {
            state.cardsArrayFunctions = cardItemsArray
        },

    }
});

export default mainPageSlice;