import './App.css';
import Results from './Results';
import SearchBar from './SearchBar';
import Nominations from './Nominations';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>The Shoppies</h1>
        <SearchBar/>
        <Results/>
        <Nominations/>
        
      </div>
    </div>
  );
}

export default App;
