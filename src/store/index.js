import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import Slice from "./slice/Slice";
import uiSlice from "./slice/uiSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: Slice.reducer,
        todo: cartSlice.reducer
    }
})

export default store;

