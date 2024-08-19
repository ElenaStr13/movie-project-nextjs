
import {options} from "@/services/genreService";
import Genres from "@/components/genres/Genres";
import {IRes} from "@/types/responceType";
import {IGenre} from "@/interfaces/genreInterface";

const GenresPage = async () => {

    const getAllGenres = async ():IRes<IGenre[]> => {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en-US`, options);
        return res.json();
    };

    let allGenres = await  getAllGenres();

    return (
        <div>
            <Genres genres={allGenres.genres}/>
        </div>
    );
};

export default GenresPage;