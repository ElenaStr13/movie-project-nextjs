import {baseURL, urls} from "@/constants/urls";

export const apiKey = "api_key=d5cf3947af7f36032bd3a0f772b71f9f";


const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmUyZDhhNjZhMjE3NjQ5MmZmYWZkOGJlMmFiNDI0ZSIsIm5iZiI6MTcyMjA3MDM1Ni4wMzk5NjQsInN1YiI6IjYzNDJhZDA3NzFmZmRmMDA3ZmFmZTllNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g3LSRa-F9_2d2GLk-V7B1BHeDBeBpFjnuJjnptoiZkM",
    },
};

export const fetchAPI = async (query: string) => {
    const res = await fetch(`${baseURL}/${urls.movies}${query}`, options);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};