import {IRes} from "@/types/responceType";
import {ISomeData} from "@/interfaces/movieInterface";
import {apiKey, options} from "@/services/apiService";
import {baseURL} from "@/constants/urls";


export const getSearch = async (query?: string):IRes<ISomeData> => {
    const res = await fetch(`${baseURL}/search/movie?query=${query}`, options);
    return res.json();
};
// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'