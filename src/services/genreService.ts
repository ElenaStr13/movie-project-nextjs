import {baseURL, urls} from "@/constants/urls";
import {IRes} from "@/types/responceType";
import {IMovie, ISomeData} from "@/interfaces/movieInterface";

export const apiKey = "api_key=dc6051c5b39828a64a4833d874930142";


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
export const getGenreId = async (genreId:number):IRes<IMovie> => {
    const res = await fetch(`${baseURL}/${urls.genres.byGenreId(genreId)}?${apiKey}`, options);

    return res.json();
};