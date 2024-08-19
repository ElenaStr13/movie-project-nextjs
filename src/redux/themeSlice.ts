'use client'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    mode: string;
}

const initialState: IState = {
    mode: 'light'
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === 'light'? 'dark':'light';
        }
    }
});

export const { toggleTheme } = themeSlice.actions;

const {reducer: themeReducer} = themeSlice;

export default themeReducer;