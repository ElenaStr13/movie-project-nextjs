import React, {FC} from 'react';
//import Link from "next/link";
import {MovieInfo} from "@/components/movies/MovieInfo/MovieInfo";
import {IMovie} from "@/interfaces/movieInterface";
//import {IMovie} from "@/interfaces/movieInterface";


interface IProps {
    searchParams?: {
        data?: string,

    };
    movie: IMovie
}

const UserPage: FC<IProps> = ({searchParams}) => {


    console.log(searchParams?.data)
    let movie;
    if (searchParams && searchParams.data) {
        movie = JSON.parse(searchParams.data);

    }


    return (
        <div>
            movie
            {/*{movie.original_title}*/}
            {/*{movie && <MovieInfo movie={movie}/>}*/}

        </div>
    );
};

export default UserPage;