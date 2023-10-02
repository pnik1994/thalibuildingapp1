import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productSlice";

const store=configureStore({
    reducer:{
        productList:ProductReducer
    }
})
export default store