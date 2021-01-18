import './nominations.css';
import {useState} from "react";

function Nominations({handleRemove, nominatedMovies}){
    return (
        <div className="nominations">
            <h2>Nominations</h2>
            {nominatedMovies.map((movie) => (
                <div className="nominatedmovie" key={movie.imdbID}>
                <li>{ `${movie.Title} (${movie.Year})` } <button className="removebutton" onClick={() => handleRemove(movie.imdbID)}>Remove</button> </li>
                </div>
            ))}
            
        </div>
    )
}
export default Nominations;