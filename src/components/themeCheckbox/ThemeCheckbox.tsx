'use client'
import {Link} from "react-router-dom";
import useAppSelector from "@/hooks/useAppSelector";
import css from "./Theme.module.css";
import { useTheme } from "next-themes";
//import { useEffect, useState } from "react";
import {useEffect} from "react";
import useAppDispatch from "@/hooks/useAppDispatch";
import {RootState} from "@/types/reduxTypes";
import {toggleTheme} from "@/redux/themeSlice";

const ThemeCheckbox = () => {

    const theme = useAppSelector((state:RootState) => state.theme.mode);//theme.mode
    console.log(theme)
    const dispatch = useAppDispatch();

    const changeTheme = () => {
               dispatch(toggleTheme())
    }

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('light', theme === 'light');
    }, [theme]);


    return (
        <div className={css.forCheckbox} >
            <Link to={'/movie'}>Theme</Link>
            <input className={css.input} type="checkbox" id="switch"  onClick={changeTheme} />
            <label className={css.label} htmlFor="switch">Toggle</label>
        </div>
    );
};

export {ThemeCheckbox};