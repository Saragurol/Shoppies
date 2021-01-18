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
  let [nominatedMovies, setNominatedMovies] = useState(null);

  const handleNomination = (id) => {
    console.log('handle nomination')
  }
  const handleSearch = (event) => {
    setInputTitle(event.target.value);
  }
  const handleSubmit = (event) => {
    // avoid page refresh
    event.preventDefault();
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=31dfcc07&t=${inputTitle}`).then(res => {
      return res.json();
    }).then(data => {
      setMovies(data)

    })
  }
  const handleRemove = (id) => {
    const newNominatedMovies = nominatedMovies.filter(movie => movie.id !== id);
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
        {movies && <Results inputTitle={inputTitle} handleNomination = {handleNomination} movies={movies}/>}
        {nominatedMovies ? 
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

// api key http://www.omdbapi.com/?i=tt3896198&apikey=31dfcc07