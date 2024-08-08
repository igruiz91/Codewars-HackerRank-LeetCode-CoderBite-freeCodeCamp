import { useState, useEffect, useRef } from "react";
import StarRating from "./components/StarRating";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { useMovies } from "./hooks/useMovies";

const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => Math.round(acc + cur / arr.length), 0);

const KEY = "b07d9c9f";

export default function App() {
    const [query, setQuery] = useState("interstellar");
    const [movie, setMovie] = useState({});
    const { movies, error, isLoading } = useMovies(query);
    const [watched, setWatched] = useState(() => {
        const storedFilms = localStorage.getItem("watched");
        return JSON.parse(storedFilms);
    });
    const [selectedMovieID, setSelectedMovieID] = useState(null);

    const isWatched = watched
        .map((movie) => movie.imdbID)
        .includes(selectedMovieID);

    const watchedMovieRating = watched.find(
        (film) => film.imdbID === selectedMovieID
    )?.userRating;

    function handleSelectMovie(id) {
        setSelectedMovieID((selectedId) => (selectedId === id ? null : id));
    };

    const handleRateMovie = (rating, countVotingRef) => {
        const newWatchedMovie = {
            imdbID: selectedMovieID,
            imdbRating: movie.imdbRating,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            runtime: Number(movie.Runtime.split(" ")[0]),
            userRating: rating,
            countRatingDecisions: countVotingRef.current,
        };
        setWatched([...watched, newWatchedMovie]);
        setSelectedMovieID(null);
    };
    const handleDeleteMovie = (id) => {
        setWatched((watched) => watched.filter((film) => film.imdbID !== id));
    };
    const handleCloseMovie = () => {
        setSelectedMovieID(null);
    };

    useEffect(() => {
        localStorage.setItem("watched", JSON.stringify([watched]));
    }, [watched]);

    return (
        <>
            <NavBar>
                <Logo />
                <SearchBar query={query} setQuery={setQuery} />
                <Results movies={movies} />
            </NavBar>

            <Main>
                <MoviesBox>
                    {isLoading && <Loader />}

                    {!isLoading && !error && (
                        <MovieList
                            movies={movies}
                            onSelectMovie={handleSelectMovie}
                        />
                    )}

                    {error && <ErrorMessage message={error} />}
                </MoviesBox>
                <MoviesBox>
                    {selectedMovieID ? (
                        <MovieDetails
                            selectedId={selectedMovieID}
                            onCloseMovie={handleCloseMovie}
                            movie={movie}
                            setMovie={setMovie}
                            isLoading={isLoading}
                        >
                            <StarRating
                                isRated={isWatched}
                                yourRating={watchedMovieRating}
                                onRateMovie={handleRateMovie}
                            />
                        </MovieDetails>
                    ) : (
                        <>
                            <WatchedSummary watched={watched} />
                            <WatchedMoviesList
                                watched={watched}
                                onDeleteMovie={handleDeleteMovie}
                            />
                        </>
                    )}
                </MoviesBox>
            </Main>
        </>
    );
}

const NavBar = ({ children }) => {
    return <nav className="nav-bar">{children}</nav>;
};

const Logo = () => {
    return (
        <div className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
    );
};
const SearchBar = ({ query, setQuery }) => {
    const inputEnter = useRef(null);
    useEffect(() => {
        function focusSearch(e) {
            if (document.activeElement === inputEnter.current) return;
            if (e.code === "Enter") {
                inputEnter.current.focus();
                setQuery("");
            }
        }

        document.addEventListener("keydown", focusSearch);

        return () => document.addEventListener("keydown", focusSearch);
    }, [setQuery]);
    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputEnter}
        />
    );
};

const Results = ({ movies }) => {
    return (
        <p className="num-results">
            Found <strong>{movies?.length}</strong> results
        </p>
    );
};

const Main = ({ children }) => {
    return <main className="main">{children}</main>;
};

const MoviesBox = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen((open) => !open)}
            >
                {isOpen ? "–" : "+"}
            </button>
            {isOpen && children}
        </div>
    );
};

const MovieDetails = ({
    children,
    selectedId,
    onCloseMovie,
    movie,
    setMovie,
    isLoading,
}) => {
    const {
        Title,
        Year,
        Poster,
        Plot,
        Actors,
        Director,
        Genre,
        imdbRating,
        Runtime,
    } = movie;

    useEffect(() => {
        async function fetchMovieByID() {
            const res = await fetch(
                `http://www.omdbapi.com/?i=${selectedId}&apikey=${KEY}`
            );
            const data = await res.json();
            setMovie(data);
        }

        fetchMovieByID();
    }, [selectedId, setMovie]);

    useEffect(() => {
        if (!Title) return;
        document.title = `Movie | ${Title}`;

        return function () {
            document.title = "usePopcorn";
        };
    }, [Title]);

    useEffect(() => {
        function callback(e) {
            if (e.code === "Escape") {
                onCloseMovie();
            }
        }
        document.addEventListener("keydown", callback);

        return function () {
            document.removeEventListener("keydown", callback);
        };
    }, [onCloseMovie]);

    return (
        <div className="details">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <header>
                        <button onClick={onCloseMovie} className="btn-back">
                            ←
                        </button>
                        <img src={Poster} alt={`Poster of ${Title}`} />
                        <div className="details-overview">
                            <h2>{Title}</h2>
                            <p>
                                {Year} • {Runtime}
                            </p>
                            <p>Genre {Genre}</p>
                            <p>
                                <span>{imdbRating}⭐️</span>Imdb Rating
                            </p>
                        </div>
                    </header>
                    <section>
                        {children}
                        <p>
                            <em>{Plot}</em>
                        </p>
                        <p>Starring {Actors}</p>
                        <p>Directed by {Director}</p>
                    </section>
                </>
            )}
        </div>
    );
};

const MovieList = ({ movies, onSelectMovie }) => {
    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <Movie
                    key={movie.imdbID}
                    movie={movie}
                    onSelectMovie={onSelectMovie}
                />
            ))}
        </ul>
    );
};

const Movie = ({ movie, onSelectMovie }) => {
    return (
        <li onClick={() => onSelectMovie(movie.imdbID)}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    );
};

const WatchedSummary = ({ watched }) => {
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.userRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));

    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                </p>
            </div>
        </div>
    );
};

const WatchedMoviesList = ({ watched, onDeleteMovie }) => {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie
                    movie={movie}
                    key={movie.imdbID}
                    onDeleteMovie={onDeleteMovie}
                />
            ))}
        </ul>
    );
};

const WatchedMovie = ({ movie, onDeleteMovie }) => {
    return (
        <li key={movie.imdbID}>
            <img src={movie.poster} alt={`${movie.title} poster`} />
            <h3>{movie.title}</h3>
            <div>
                <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{movie.runtime}</span>
                </p>
                <button
                    className="btn-delete"
                    onClick={() => onDeleteMovie(movie.imdbID)}
                >
                    X
                </button>
            </div>
        </li>
    );
};
