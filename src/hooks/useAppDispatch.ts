'use client'
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/types/reduxTypes";

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch