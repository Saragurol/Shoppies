import {useState} from "react";

function Results({movies, handleNomination, inputTitle}) {
    if(movies.Response === "False"){
        return (
            <div>
                <h2>Results for "{inputTitle}"</h2>
                <p>Movie not found!</p>
            </div>
        )
    } else
    return (
        <div className="results" >
            <h2>Results for "{inputTitle}"</h2>
            { Array.isArray(movies) ? 
            movies.map((movie) => (
                <div className="movieDetails" key={movie.imdbID}>
                    <li>{movie.Title} ({movie.Year})</li>
                    <button onClick={() => handleNomination(movie.imdbID)}>Nominate</button>
                </div> 
            )) 
            :
            <div>
                <li>{movies.Title} ({movies.Year}) <button onClick={() => handleNomination(movies.imdbID)}>Nominate</button></li>
            </div>
            }
        </div>
    )
}

export default Results;