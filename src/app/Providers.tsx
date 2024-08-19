'use client';
import store from "@/redux/store";
import { ReactNode } from 'react';
import {Provider} from "react-redux";
//import theme from "tailwindcss/defaultTheme";


export default function Providers ({ children }:{ children: React.ReactNode }) {
    //console.log(store.getState(theme))
    return (
             <Provider store={store}>
                 {children}
             </Provider>
    )
}

