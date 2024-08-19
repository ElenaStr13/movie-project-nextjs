'use client'
import React, {FC, PropsWithChildren, useState} from "react";
import css from "@/components/search/search.module.css";
import {useNavigate} from "react-router";

interface IProps extends PropsWithChildren {

}

const Searchcomponent: FC<IProps> = () => {
    const [search, setSearch] = useState<string>('');
   // const navigate = useNavigate();
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(ev.target.value)
    };
    const searchTitle = ( ) => {
        console.log("search")
        console.log(search)
        //dispatch(searchActions.getAll(query))
       // navigate('/3/search/movie')
    }
    return (
        <div>
            <input
                type='text'
                placeholder='Search...'
                value={search}
                onChange={handleChange}
                className={css.search}
            />
            <button  className={css.btnSearch} onClick={searchTitle}>Search</button>
        </div>
    );
};

export {Searchcomponent};