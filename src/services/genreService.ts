import {baseURL, urls} from "@/constants/urls";
import {IRes} from "@/types/responceType";
import {IMovie, ISomeData} from "@/interfaces/movieInterface";
import {apiKey} from "@/services/apiService";




export const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmUyZDhhNjZhMjE3NjQ5MmZmYWZkOGJlMmFiNDI0ZSIsIm5iZiI6MTcyMjA3MDM1Ni4wMzk5NjQsInN1YiI6IjYzNDJhZDA3NzFmZmRmMDA3ZmFmZTllNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g3LSRa-F9_2d2GLk-V7B1BHeDBeBpFjnuJjnptoiZkM",
    },
};

export const getAllGenres = async (query?: string):IRes<ISomeData> => {
    const res = await fetch(`${baseURL}/${urls.genres.base}?${apiKey}${query}`, options);

    return res.json();

};
export const getByGenreId = async (genreId?: number):IRes<IMovie[]> => {
    const res = await fetch(`${baseURL}${urls.movies.base}?${apiKey}&with_genres=${genreId}`, options);
    console.log(res)
    return res.json();

};
