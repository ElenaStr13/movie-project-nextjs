'use client'
import React, {FC, PropsWithChildren, useState} from "react";
import css from "@/components/search/search.module.css";
import {useRouter} from "next/navigation";

const Searchcomponent = () => {
    const [query, setQuery] = useState<string>('');
    const router = useRouter();
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault();
        setQuery(ev.target.value);
    };
    const searchTitle = (e ) => {
        e.preventDefault();
        router.push(`/3/search/movie?query=${query}`)
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