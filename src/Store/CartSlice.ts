import { createSlice } from "@reduxjs/toolkit";

// Define a type for the product
interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
    totalPrice: number;
}

// Define a type for the slice state
interface CartState {
    itemList: Product[];
    totalQuantity: number;
    overallPrice: number;
}

const initialState: CartState = {
    itemList: [],
    totalQuantity: 0,
    overallPrice: 0
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart(state, action) {
            const currentItem = action.payload;
            const existingItem = state.itemList.find((exItem) => exItem.id === currentItem.id)
            state.totalQuantity++;
            if (!existingItem) {
                state.itemList.push({ id: currentItem.id, title: currentItem.name, price: currentItem.price, image: currentItem.image, quantity: 1, totalPrice: currentItem.price })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + currentItem.price;
            }
            state.overallPrice = state.itemList.reduce((total, item) => total + item.totalPrice, 0);
        },
        removeItemFromCart(state, action) {
            const itemId = action.payload;
            const existingItem = state.itemList.find((exItem) => exItem.id === itemId);
            state.totalQuantity--;
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.itemList = state.itemList.filter((item: any) => item.id !== itemId)
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                }
            }
            state.overallPrice = state.itemList.reduce((total, item) => total + item.totalPrice, 0);
        }
    }
})

export const cartAction = cartSlice.actions;

export default cartSlice;