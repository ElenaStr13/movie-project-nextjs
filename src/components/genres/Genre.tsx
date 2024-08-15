import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import css from './Genre.module.css';
import {IGenre} from "@/interfaces/genreInterface";

interface IProps extends PropsWithChildren {
    genre: IGenre,
    onGenreClick: (genre: IGenre) => void;
    isActive: boolean
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    // const navigate = useNavigate();
    // onClick={() => navigate(`/genres/${id}`)}

    return (
        <div >
            <button className={css.genre}
                    >
                {name}</button>
        </div>
    );
};

export {Genre};