import {apiKey} from "@/services/apiService";
import {PropsWithChildren} from "react";
import Results from "@/components/results/Results";
import {baseURL} from "@/constants/urls";

interface IProps extends PropsWithChildren {
    params: {
        page?: number;
        query?: string
    };
}
const SearchPage: ({searchParams}: { searchParams: any }) => Promise<JSX.Element>  = async ({searchParams}) => {

    //const search = params.query;
   const search = searchParams.query;
   // const page = searchParams?.page || 1;
    let res = await fetch(
        `${baseURL}/search/movie?api_key=${apiKey}&query=${search}&language=en-US&page=1&include_adult=true`
    );
    const data = await res.json();
    const results = data.results;
    // '/search/movie?query=';
    //`${urls.search}${text}`

    return (
        <div>
            {results &&
                results.length === 0 &&
                (<h1 className="text-center pt-6">No results found</h1>)}
            {results && <Results results={results} />}
        </div>
    );
};

export default SearchPage;