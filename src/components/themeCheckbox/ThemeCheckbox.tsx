'use client'
import css from "./Theme.module.css";
import Link from "next/link";
import {createContext, useContext, useEffect, useState} from "react";
import {MyContext} from "@/components/provider/ThemeProvider";

const ThemeCheckbox = () => {
    const { theme, setTheme } = useContext(MyContext);
    const onThemeChange = (value: boolean) => {
        if (value === true) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };
    // const ThemeContext = createContext("light");
    // const [theme, setTheme] = useState(null);
    // //let theme = useContext(ThemeContext);
    //
    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('light', theme === 'light');
    }, [theme]);
    // // const theme = useAppSelector((state:RootState) => state.theme.mode);//theme.mode
    // // console.log(theme)
    // // const dispatch = useAppDispatch();
    // //
    const toggleTheme = () => {
              // dispatch(toggleTheme())
         setTheme(theme === 'dark' ? 'light' : 'dark')
        console.log(theme)
    }
    //
    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('light', theme === 'light');
    }, [theme]);
    //onClick={changeTheme}


    return (
        <div className={css.forCheckbox} >
            <Link href={'/movies'}>Theme</Link>
            <input className={css.input} type="checkbox" id="switch"  onClick={toggleTheme} />
            <label className={css.label} htmlFor="switch">Toggle</label>
        </div>
    );
};

export {ThemeCheckbox};