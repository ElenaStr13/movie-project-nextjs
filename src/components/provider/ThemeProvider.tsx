'use client'
import { ReactNode } from 'react';
import {createContext, FC, useContext, useEffect, useState} from "react";
import {themeContextTypes} from "@/types/ThemeTypes";

export const MyContext = createContext<{ theme: string; setTheme: any }>({
    theme: "Light",
    setTheme: null,
});

const Parent = ({ children }:{ children: React.ReactNode })=> {
    const [theme, setTheme] = useState<string>("light");

    return (
        <>
            <MyContext.Provider value={{ theme, setTheme }}>
                {children}
            </MyContext.Provider>
        </>
    );
};

export default Parent;