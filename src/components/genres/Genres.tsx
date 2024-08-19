import {FC, PropsWithChildren} from "react";
import {IGenre} from "@/interfaces/genreInterface";
import css from "./Genres.module.css";
import {Genre} from "@/components/genres/Genre";

interface IProps extends PropsWithChildren {
    genres: IGenre []
    genre: IGenre
}

const Genres: FC<IProps> =  ({genres}) => {

    return (
        <div >

            <div  className={css.genres}>
                {genres && genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
            </div>

        </div>
    );
};
export default Genres;