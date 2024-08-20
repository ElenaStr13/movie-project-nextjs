'use client'
import React, {FC, PropsWithChildren, useState} from "react";
import css from "@/components/search/search.module.css";
import {useNavigate} from "react-router";
import {useRouter} from "next/navigation";

interface IProps extends PropsWithChildren {

}

const Searchcomponent: FC<IProps> = () => {
    const [query, setQuery] = useState<string>('');
   // const navigate = useNavigate();
    const router = useRouter();
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault();
        setQuery(ev.target.value);
    };
    const searchTitle = (e ) => {
        e.preventDefault();
        //console.log(search)
        router.push('/3/search/movie')
        //dispatch(searchActions.getAll(query))
       // navigate('/3/search/movie')
    }
    return (
        <div>
            <input
                type='text'
                placeholder='Search...'
                value={query}
                onChange={handleChange}
                className={css.search}
            />
            <button  className={css.btnSearch} onClick={searchTitle}>Search</button>
        </div>
    );
};

export {Searchcomponent};