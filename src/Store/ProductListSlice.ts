import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define a type for the product
interface Product {
    id: number;
    title: string;
    price: number;
}

// Define a type for the slice state
interface ProductListState {
    isLoading: boolean;
    cartIsVisible: boolean;
    error: string;
    productList: Product[];
    OrgProductList: Product[];
}

const initialState: ProductListState = {
    isLoading: false,
    cartIsVisible: false,
    productList: [],
    OrgProductList: [],
    error: "",
};

export const getProductList = createAsyncThunk<Product[], void, { rejectValue: { error: string } }>(
    "products/getProductList",
    async (_, { rejectWithValue }) => {
        try {
            // const response = await fetch('https://dummyjson.com/c/5fbc-edbd-4ada-87e4');
            const response = await fetch('https://dummyjson.com/c/3f4b-004c-4dbf-a30c');
            // const response = await fetch('https://dummyjson.com/c/5fbc-edbd-4ada-87e');
            if (response.ok) {
                const finalResponse = await response.json();
                return finalResponse as Product[];
            } else {
                return rejectWithValue({ error: 'No Products Found!' })
            }
        } catch (error) {
            return rejectWithValue({ error: 'Something went wrong!' });
        }
    }
)

const productList = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        filterCatergory(state, action) {
            if (action.payload == 'all') {
                state.productList = state.OrgProductList;
            } else {
                state.productList = state.OrgProductList.filter((cate: any) => cate.category == action.payload)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductList.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.isLoading = false;
                state.cartIsVisible = false;
                state.productList = action.payload;
                state.OrgProductList = action.payload;
                state.error = "";
            })
            .addCase(getProductList.rejected, (state, action) => {
                state.isLoading = false;
                state.cartIsVisible = false;
                state.productList = [];
                state.OrgProductList = [];
                if (action.payload) {
                    state.error = action.payload.error;
                } else {
                    state.error = action.error.message || "Something went wrong";
                }
            })
    }
});

export const productBtnAction = productList.actions;

export default productList;