import MoviesPage from "@/app/(client)/movies/page";
import {getAllMovies} from "@/services/apiService";
import {apiKey, getAllGenres, options} from "@/services/genreService";
import Genres from "@/components/genres/Genres";
import {IRes} from "@/types/responceType";
import {ISomeData} from "@/interfaces/movieInterface";
import {baseURL, urls} from "@/constants/urls";

const GenresPage = async () => {
    console.log("ok")
    const getAllGenres = async (query?: string):IRes<ISomeData> => {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en-US`, options);

        return res.json();

    };

    let allGenres = await  getAllGenres();
    console.log(allGenres)
    console.log("ok")
    return (
        <div>
            {/*<Genres genres={allGenres.data}/>*/}
        </div>
    );
};

export default GenresPage;