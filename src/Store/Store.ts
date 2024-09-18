import { configureStore } from "@reduxjs/toolkit";
import productList from "./ProductListSlice";
import cartSlice from "./CartSlice";

export const store = configureStore({
    reducer: {
        productList: productList.reducer,
        CartSlice: cartSlice.reducer
    }
})

//
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;