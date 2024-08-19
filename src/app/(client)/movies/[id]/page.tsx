import React, {FC} from 'react';

import {MovieInfo} from "@/components/movies/MovieInfo/MovieInfo";
import {IMovie} from "@/interfaces/movieInterface";
import {getMovieId} from "@/services/apiService";


interface IProps {
    searchParams?: {
        data: string | undefined
    };
    movie:IMovie
}

const MoviePage: FC<IProps> =  async ({searchParams}) => {

    let movieId:string = searchParams?.data;
    let movie =  await getMovieId(Number(movieId));

    return (
        <div>
            {movie && <MovieInfo movie={movie} key={movie.id}/>}
        </div>
    );
};
export default MoviePage;