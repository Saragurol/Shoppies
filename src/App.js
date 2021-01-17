import './App.css';
import {useState} from "react";
import Results from './Results';
import SearchBar from './SearchBar';
import Nominations from './Nominations';

function App() {
  let [movies, setMovie] = useState([
    {title: 'Iron Man', date: 2008, nominated: true, id:1},
    {title: 'Spider Man', date: 2017, nominated: true, id:2},
    {title: 'Avengers', date: 2018, nominated: true, id:3}
  ]);
  const [inputTitle, setInputTitle] = useState("Man");
  return (
    <div className="App">
      <div className="content">
        <h1>The Shoppies</h1>
        <SearchBar/>
        <Results inputTitle={inputTitle}/>
        <Nominations/>
        
      </div>
    </div>
  );
}

export default App;

// api key http://www.omdbapi.com/?i=tt3896198&apikey=31dfcc07