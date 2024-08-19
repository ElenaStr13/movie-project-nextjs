'use client'
import {createContext, Dispatch, SetStateAction} from "react";

type TContext = {
    theme: "dark" | "light" ;
    setTheme: Dispatch<SetStateAction<"dark" | "light">>;
}

const ThemeContext: TContext = createContext(null);


export default ThemeContext;