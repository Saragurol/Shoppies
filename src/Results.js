import './results.css'

function Results({movies, handleNomination, inputTitle}) {
    console.log(movies)
    if(movies.Response === "False"){
        return (
            <div>
                <h3>Results for "{inputTitle}"</h3>
                <p>Movie not found!</p>
            </div>
        )
    } else
    return (
        <div className="results" >
            <h3>Results for "{inputTitle}"</h3>
            { Array.isArray(movies) ? 
            movies.map((movie) => (
                <div className="movieDetails" key={movie.imdbID}>
                    <li>{movie.Title} ({movie.Year})</li>
                    <button className="nominatebutton" onClick={() => handleNomination(movie.imdbID)}>Nominate</button>
                </div> 
            )) 
            :
            <div>
                <li>{movies.Title} ({movies.Year}) <button className="nominatebutton" onClick={() => handleNomination(movies.imdbID)}>Nominate</button></li>
            </div>
            }
        </div>
    )
}

export default Results;