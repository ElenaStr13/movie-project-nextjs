'use client'
import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "@/redux/themeSlice";
//import {TypedUseSelectorHook, useSelector} from "react-redux";
//import {searchReducer} from "./slices/searchSlice";


const store = configureStore({
    reducer: {
        // search: searchReducer,
        theme: themeReducer
    }
});
export default store