'use client'
import React from "react";
import {Movie} from "@/components/movies/movie/Movie";

export default function Results({ results }) {
    console.log(results)
    return (
        <div>{results.map((result) => (<Movie key={result.id} movie={result} />
            ))}
        </div>
    );
}