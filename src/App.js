import './App.css';
import {useEffect, useState} from "react";
import Results from './Results';
import SearchBar from './SearchBar';
import Nominations from './Nominations';
// let [nominatedMovies, setNominatedMovies] = useState([
  // {title: 'Iron Man', date: 2000, nominated: true, id:1}    
//   {title: 'Spider Man', date: 2017, nominated: true, id:2},
//   {title: 'Avengers', date: 2018, nominated: true, id:3}
// ]);
function App() {
  const [movies, setMovies] = useState(null);
  const [inputTitle, setInputTitle] = useState("");
  const [isPending, setIsPending] = useState(false);
  let [nominatedMovies, setNominatedMovies] = useState([]);

  const handleNomination = (imdb) => {
    console.log('handle nomination')
    let nominatedMovie;
    let duplicate = false;
    if(Array.isArray(movies)){
      nominatedMovie = movies.filter(movie => movie.imdb === movie.imdb);
    } else {
      nominatedMovie = movies;
    }
    for(let i = 0; i < nominatedMovies.length; i++){
      const movie = nominatedMovies[i];
      if(movie.imdbID === nominatedMovie.imdbID){
        duplicate = true;
      }
    }
    if(duplicate === false && nominatedMovies.length < 5){
      setNominatedMovies([...nominatedMovies, nominatedMovie])
    }
  }
  const handleSearch = (event) => {
    setInputTitle(event.target.value);
  }
  const handleSubmit = (event) => {
    // avoid page refresh
    event.preventDefault();
    setIsPending(true)
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=31dfcc07&t=${inputTitle}`)
    .then(res => {
      return res.json();
    }).then(data => {
      setMovies(data);
      setIsPending(false);
    })
  }
  const handleRemove = (imdbID) => {
    const newNominatedMovies = nominatedMovies.filter(movie => movie.imdbID !== imdbID);
    setNominatedMovies(newNominatedMovies);
  }
  useEffect(()=>{
    console.log('ran effect')
    // effect hooks run on each re-render
  })
  return (
    <div className="App">
      <div className="content">
        <h1>The Shoppies</h1>
        <SearchBar handleSearch={handleSearch} handleSubmit={handleSubmit}/>
        { isPending && <div>Loading...</div> }
        {movies && <Results inputTitle={inputTitle} handleNomination = {handleNomination} movies={movies}/>}
        {nominatedMovies.length > 0 ? 
        <Nominations handleRemove={handleRemove} nominatedMovies={nominatedMovies}/> 
        : 
        <div>
          <h3>Nominations</h3>
          <p>You have no nominated movies!</p>
        </div>
        }
      </div>
    </div>
  );
}

export default App;

