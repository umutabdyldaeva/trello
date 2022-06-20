import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    spinner: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggle(state){
            state.spinner = !state.spinner;
        }
    }
})

export const uiAction = uiSlice.actions;
export default uiSlice;
