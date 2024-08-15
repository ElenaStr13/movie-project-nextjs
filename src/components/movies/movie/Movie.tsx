
import {FC, PropsWithChildren} from "react";

import {IMovie} from "@/interfaces/movieInterface";
import {baseUrlImage} from "@/constants/urls";
import css from "./Movie.module.css";
import Link from "next/link";
import {apiKey} from "@/services/apiService";
//import {fetchAPI} from "@/services/movieService";
//import {StarsRating} from "../StarsRaring";

interface IProps extends PropsWithChildren {
    movie: IMovie
}
const Movie: FC<IProps> = ({movie}) => {


    const {
        poster_path,
        id,
        original_title,
        vote_average
    } = movie;
   let  movieId=id;
    //<Link href={{pathname: '/movie/' + movie.id, query: {data: JSON.stringify(movie)}}}>

    // const click = () => {
    //   console.log(movie)
    // }


    return (
        <div className={css.moviesCard}>
            <Link href={{pathname:`/movie/${+id.toString()}?${apiKey}`}}>
            {poster_path?
                <img className={css.image} src={baseUrlImage + poster_path} alt={original_title}></img>
                :
                <img className={css.image} src='./logo.png' alt='null'/>}
            {/*<StarsRating voteAverage={vote_average} />*/}
            <p>{original_title}</p>

            </Link>
        </div>
    );
};

export {Movie};