import React, {FC} from 'react';
//import Link from "next/link";
import {MovieInfo} from "@/components/movies/MovieInfo/MovieInfo";
import {IMovie} from "@/interfaces/movieInterface";
import {apiKey, getAllMovies, getMovieId} from "@/services/apiService";
//import {IMovie} from "@/interfaces/movieInterface";


interface IProps {
    movieId: number;
    params:any;
    movie:IMovie
}

const UserPage: FC<IProps> =  async ({params}) => {
     const movieId = params.movieId;
     console.log(movieId)
     let movie =  await getMovieId(movieId);
    // console.log(movie)

    return (
        <div>
            page fot movie
            {movie && <MovieInfo movie={movie}/>}
        </div>
    );
};

export default UserPage;