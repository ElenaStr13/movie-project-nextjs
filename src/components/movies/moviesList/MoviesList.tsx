import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "@/interfaces/movieInterface";
import {Movie} from "@/components/movies/movie/Movie";
import css from './MoviesList.module.css';

interface IProps extends PropsWithChildren {
    movies: IMovie []
}

const MoviesList: FC<IProps> =  ({movies}) => {

    return (
        <div className={css.allMoviesList}>
        <div className={css.moviesList} >
            {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>

        </div>
    );
};
export default MoviesList;