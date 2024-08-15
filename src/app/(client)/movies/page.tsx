"use client"; // This is a client component
import React, {useState} from 'react';

import MoviesList from "@/components/movies/moviesList/MoviesList";
import {useSearchParams} from "next/navigation"


import useSWR from "swr";
import {baseURL} from "@/constants/urls";
import {fetcher} from "@/constants/fetcher";
import {apiKey} from "@/services/movieService";




const MoviesPage = () => {
    // const [query, setQuery] = useSearchParams({page: '1'});
    // const [previous, setPrevious] = useState( 0);
    // const page = +query.get('page') || 1;

    // `${baseURL}/discover/movie?${apiKey}&include_adult=false&language=en-US&page=1`,

    const { data: allMovies, error,isLoading } = useSWR(
        `${baseURL}/discover/movie?${apiKey}&include_adult=false&language=en-US&page=1`,
        fetcher
    );
    if (isLoading) {
        return "Loading";
    }


    // const prev = () => {
    //     setQuery(prev => {
    //         prev.set('page', (+prev.get('page') - 1).toString());
    //         console.log("prev" + page)
    //         setPrevious(page);
    //         return prev
    //     })
    // }
    //
    // const next = () => {
    //     setQuery(next => {
    //         next.set('page', (+next.get('page') + 1).toString());
    //         return next
    //     })
    // }


    return (
        <div>
            < MoviesList movies={allMovies.results} />
                           {/*<div >*/}
            {/*    <button onClick={prev} >Prev page</button>*/}
            {/*    <div>{page}</div>*/}
            {/*    <button onClick={next} >Next page</button>*/}
            {/*</div>*/}

        </div>
    );
};

export default MoviesPage;