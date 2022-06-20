import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: true
};

const Slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

     toggle2(state){
        state.todos = !state.todos;
     }

    }

})

export const todosAction = Slice.actions;
export default Slice;