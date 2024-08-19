import {IGenre} from "@/interfaces/genreInterface";
import {FC} from "react";
import {getByGenreId} from "@/services/genreService";
import MoviesList from "@/components/movies/moviesList/MoviesList";

interface IProps {
    searchParams?: {
        data: string | undefined
    };
    genreId: number;
    params:any;
    genre:IGenre
}

const UserPage: FC<IProps> =  async ({searchParams}) => {

   let genreId:string = searchParams?.data;
   let moviesByGenre =  await getByGenreId(Number(genreId));

    return (
        <div>
            <MoviesList movies={moviesByGenre.results} page={moviesByGenre.page}/>
        </div>
    );
};

export default UserPage;





