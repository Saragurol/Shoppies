import {useState} from "react";

function Results(props) {
    const [results, setResults] = useState([]);
    const inputTitle = props.inputTitle;
    const handleClick = () => {
        console.log("nominate movie")
    }
    return (
        <div className="results" >
            <h2>Results for "{inputTitle}"</h2>
            {results.map((result) => (
                <div className="resultdetails" key={result.id}>
                    <li>{result.title} ({result.date}) <button className="nominatebutton" onClick={handleClick}>Nominate</button></li>
                </div>
            ))}
        </div>
    )
}

export default Results;