import { useEffect, useState } from "react";
import { tempMovieData } from "../data";

const KEY = "b07d9c9f";

export function useMovies(query) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [movies, setMovies] = useState(tempMovieData);

    useEffect(() => {
        
        // callback?.()
        const controller = new AbortController();
        async function fetchMovies() {
            try {
                setIsLoading(true);
                setError("");

                const res = await fetch(
                    `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
                );
                if (!res.ok)
                    throw new Error(
                        "Something went wrong with fetching movies"
                    );

                const data = await res.json();

                if (data.Response === "False")
                    throw new Error("Movie not found");
                setMovies(data.Search);
            } catch (err) {
                console.error(err);
                if (err !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
        }
        // handleCloseMovie();
        fetchMovies();

        return function () {
            controller.abort();
        };
    }, [query]);

    return { movies, error, isLoading };
}
