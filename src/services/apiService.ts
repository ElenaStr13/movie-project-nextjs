import {baseURL, urls} from "@/constants/urls";
import {IRes} from "@/types/responceType";
import {IMovie, ISomeData} from "@/interfaces/movieInterface";

export const apiKey = "api_key=5567f4a7a5d339c00abd68cab60816d7";


export const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmUyZDhhNjZhMjE3NjQ5MmZmYWZkOGJlMmFiNDI0ZSIsIm5iZiI6MTcyMjA3MDM1Ni4wMzk5NjQsInN1YiI6IjYzNDJhZDA3NzFmZmRmMDA3ZmFmZTllNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g3LSRa-F9_2d2GLk-V7B1BHeDBeBpFjnuJjnptoiZkM",
    },
};

export const getAllMovies = async (page:number,query?: string):IRes<ISomeData> => {
      const res = await fetch(`${baseURL}/${urls.movies.base}?${apiKey}${query}&page=${page}`, options);

    return res.json();
};
export const getMovieId = async (movieId:number):IRes<IMovie> => {
    const res = await fetch(`${baseURL}/${urls.movies.byId(movieId)}?${apiKey}`, options);

    return res.json();
};
