import './nominations.css';

function Nominations({handleRemove, nominatedMovies}){
    return (
        <div className="nominations">
            <h3>Nominations</h3>
            {nominatedMovies.length === 5 ? <h3>Congrats, you have 5 movie nominations!</h3> : console.log("less than 5 nominations")}
            {nominatedMovies.map((movie) => (
                <div className="nominatedmovie" key={movie.imdbID}>
                <li>{ `${movie.Title} (${movie.Year})` } <button className="removebutton" onClick={() => handleRemove(movie.imdbID)}>Remove</button> </li>
                </div>
            ))}
            
        </div>
    )
}
export default Nominations;