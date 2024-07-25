import { useState, useEffect } from "react";
import { tempMovieData, tempWatchedData } from "./data";
import StarRating from "./components/StarRating";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => Math.round(acc + cur / arr.length), 0);

const KEY = "b07d9c9f";

export default function App() {
    const [query, setQuery] = useState("interstellar");
    const [movie, setMovie] = useState({});
    const [movies, setMovies] = useState(tempMovieData);
    const [watched, setWatched] = useState([]);
    const [selectedMovieID, setSelectedMovieID] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const isWatched = watched
        .map((movie) => movie.imdbID)
        .includes(selectedMovieID);
    const watchedMovieRating = watched.find(
        (film) => film.imdbID === selectedMovieID
    )?.userRating;

    useEffect(() => {
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
                console.log(data.Search);
                setMovies(data.Search);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
        }

        fetchMovies();
    }, [query]);

    const handleSelectMovie = (id) => {
        setSelectedMovieID((selectedId) => (selectedId === id ? null : id));
    };

    const handleRateMovie = (rating) => {
        const newWatchedMovie = {
            imdbID: selectedMovieID,
            imdbRating: movie.imdbRating,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            runtime: Number(movie.Runtime.split(" ")[0]),
            userRating: rating,
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
    console.log(watched);
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
    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
        if(!Title) return;
        document.title = `Movie | ${Title}`;
    }, [Title]);

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
