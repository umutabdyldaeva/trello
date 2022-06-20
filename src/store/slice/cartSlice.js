import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   todo:[]
}

const cartSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
         addtodo(state,actions){
            
            const newTodo = actions.payload
            state.todo.push({
               id: newTodo.id,
               title: newTodo.title,
               toDos: []
            })
         },

         adddata(state, action){
            const { data, id}  = action.payload
            state.todo.find((i) => i.id === id).toDos.push({
               text: data.item, 
               textid: data.id
            })
            
         }
   }
})


export const cartAction = cartSlice.actions;
export default cartSlice;