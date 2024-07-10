
// src/components/MoviesList.jsx

import React, { useState } from 'react';

const MoviesList = () => {
    const initialMovies = [
        {title: 'The Devils Rejects', genre: 'Horror', description:'ITS SHOW TIME YAYAYAYAYAYAYAYAYAYAYAHAHAHA'},
        { title: 'The Godfather', genre: 'Crime', description: 'The aging patriarch of an organized crime dynasty transfers control.' },
        { title: 'The Dark Knight', genre: 'Action', description: 'When the menace known as the Joker emerges.' },
        { title: 'Pulp Fiction', genre: 'Crime', description: 'The lives of two mob hitmen, a boxer, a gangster, and his wife.' },
        { title: 'Fight Club', genre: 'Drama', description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club.' }
    ];

    const [movies, setMovies] = useState(initialMovies);
    const [showGenre, setShowGenre] = useState(false);
    const [details, setDetails] = useState({});

    const toggleDetails = (title) => {
        setDetails((prevState) => ({
            ...prevState,
            [title]: !prevState[title],
        }));
    };

    const removeMovie = (title) => {
        setMovies(movies.filter(movie => movie.title !== title));
    };

    const resetMovies = () => {
        setMovies(initialMovies);
    };

    const filteredMovies = showGenre ? movies.filter(movie => movie.genre === 'Action') : movies;

    return (
        <div>
            <button onClick={() => setShowGenre(!showGenre)}>
                {showGenre ? 'Show All Movies' : 'Show Action Movies'}
            </button>
            <button onClick={resetMovies}>
                Reset Movies
            </button>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(movie.title)} style={{ cursor: 'pointer' }}>
                            {movie.title}
                        </span>
                        {details[movie.title] && (
                            <p>{movie.description}</p>
                        )}
                        <button onClick={() => removeMovie(movie.title)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
