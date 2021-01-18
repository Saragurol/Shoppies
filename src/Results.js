import {useState} from "react";

function Results({movies, handleNomination, inputTitle}) {

    return (
        <div className="results" >
            <h2>Results for "{inputTitle}"</h2>
            { Array.isArray(movies) ? 
            movies.map((movie) => (
                <div className="movieDetails" key={movie.imdbID}>
                    <li>{movie.Title} ({movie.Year})</li>
                    <button onClick={() => handleNomination(movie.id)}>Nominate</button>
                </div> 
            )) 
            :
            <div>
                <li>{movies.Title} ({movies.Year}) <button onClick={() => handleNomination(movies.id)}>Nominate</button></li>
            </div>
            }
        </div>
    )
}

export default Results;