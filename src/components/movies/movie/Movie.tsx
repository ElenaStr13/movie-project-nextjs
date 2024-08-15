import {useNavigate} from "react-router-dom";
import {FC, PropsWithChildren} from "react";

import {IMovie} from "@/interfaces/movieInterface";
import {baseURL, baseUrlImage} from "@/constants/urls";
import css from "./Movie.module.css";
import Link from "next/link";
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
    // const navigate = useNavigate();
    // onClick={() => navigate(`/3/movie/${id.toString()}`, {state: {movie}})}
    //<Link href={{pathname: '/movie/' + movie.id, query: {data: JSON.stringify(movie)}}}>

    // const click = () => {
    //   console.log(movie)
    // }


    return (
        <div className={css.moviesCard}>
            <Link href={{pathname: 'movie/'+ movie.id, query: {data: JSON.stringify(movie.id)}}}>
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