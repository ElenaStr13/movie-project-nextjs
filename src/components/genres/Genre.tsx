import {FC, PropsWithChildren} from "react";

import css from './Genre.module.css';
import {IGenre} from "@/interfaces/genreInterface";
import Link from "next/link";

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
        <div>
            <button className={css.genre}>
                <Link className={css.genreIns} href={{pathname: `/genres/${id}`, query: {data: id}}}>
                {name} </Link>
            </button>
        </div>
    );
};

export {Genre};