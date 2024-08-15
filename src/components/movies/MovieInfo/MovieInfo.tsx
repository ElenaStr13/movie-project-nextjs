import {FC, PropsWithChildren} from "react";
import {Badge} from "react-bootstrap";

import css from './MovieInfo.module.css';
import {IGenre} from "@/interfaces/genreInterface";
import {IMovie} from "@/interfaces/movieInterface";
import {baseUrlImage} from "@/constants/urls";


// import {Genre} from "../GenresContainer/Genre";
// import {StarsRating} from "../StarsRaring";

interface IProps extends PropsWithChildren {
    movie:IMovie
    //onGenreClick: (genre: IGenre) => void
}

const MovieInfo: FC<IProps> = ({movie}) => {

    const {poster_path, genres, original_title, vote_count, original_language, release_date, overview, vote_average} = movie;
    //const activeGenreId = useAppSelector(state => state.genres.activeGenreId);
console.log(movie)
    return (
        <div className={css.movieDetails}>
            <p>{original_title}</p>
            <p className={css.originalTitle}>({original_title})
                <sup><Badge className={css.badge}>{vote_count}</Badge></sup>
            </p>
            <div className={css.imgInfo}>
                {poster_path?
                    <img src={baseUrlImage + poster_path} alt={original_title}></img>
                    :
                    <img src='./logo.png' alt={original_title}></img>}
                <div>
                    <div className={css.rating}>
                        <div>Rating</div>
                    {/*    <StarsRating voteAverage={vote_average}/>*/}
                    {/*</div>*/}
                    {/*<div>Genres:</div>*/}
                    {/*<div className={css.genres}>*/}
                    {/*    {genres.map((genre, index) => (*/}
                    {/*        <Genre*/}
                    {/*            key={index}*/}
                    {/*            genre={genre}*/}
                    {/*            onGenreClick={onGenreClick}*/}
                    {/*            isActive={genre.id === activeGenreId}*/}
                    {/*        />*/}
                    {/*    ))}*/}
                    </div>
                    <div >Original language</div>
                    <p className={css.originalLanguage}>{original_language}</p>
                    <div>Release Date</div>
                    <p>{release_date}</p>
                </div>
            </div>
            <div className={css.overView}>
                <h4 className={css.tittle}>Overview</h4>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export {MovieInfo};