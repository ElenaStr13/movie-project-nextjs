'use client'
import css from "./Theme.module.css";
import Link from "next/link";
import {useContext, useEffect} from "react";
import {MyContext} from "@/components/provider/ThemeProvider";

const ThemeCheckbox = () => {
    const { theme, setTheme } = useContext(MyContext);

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('light', theme === 'light');
    }, [theme]);

    const toggleTheme = () => {
         setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('light', theme === 'light');
    }, [theme]);

    return (
        <div className={css.forCheckbox} >
            <Link href={'/movies'}>Theme</Link>
            <input className={css.input} type="checkbox" id="switch"  onClick={toggleTheme} />
            <label className={css.label} htmlFor="switch">Toggle</label>
        </div>
    );
};

export {ThemeCheckbox};