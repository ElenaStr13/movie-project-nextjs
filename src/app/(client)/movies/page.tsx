import {getAllMovies} from "@/services/apiService";
import MoviesList from "@/components/movies/moviesList/MoviesList";
//import Paginate from "@/components/Paginate";
import Link from "next/link";
import css from "@/app/(client)/movies/page.module.css"
import {FC, PropsWithChildren} from "react";


interface IProps extends PropsWithChildren {
    searchParams?: {
        page?: number;
    };
}
const MoviesPage: ({searchParams}: { searchParams: any }) => Promise<JSX.Element>  = async ({searchParams}) => {

    const page = searchParams?.page || 1;
    let allMovies = await  getAllMovies(page);

    return (
        <div>
            <MoviesList movies={allMovies.results}/>
            <div className={css.pagination} >
                <Link className={css.pagntn} href={`/movies/?&page=${Number(page)-1}`}>Prev page</Link>
                <div>{page}</div>
                <Link className={css.pagntn} href={`/movies/?&page=${Number(page)+1}`}>Next page</Link>
            </div>
        </div>
    );
};

export default MoviesPage;