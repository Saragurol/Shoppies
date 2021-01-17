import './nominations.css';
import {useState} from "react";

function Nominations(){
    let [nominations, setNomination] = useState([
        {title: 'Iron Man', date: 2008, nominated: true, id:1},
        {title: 'Spider Man', date: 2017, nominated: true, id:2},
        {title: 'Avengers', date: 2018, nominated: true, id:3}
    ]);
    const handleClick = () => {
        console.log("movie removed")
    }

    return (
        <div className="nominations">
            <h2>Nominations</h2>
            {nominations.map((movie) => (
                <div className="nominatedmovie" key={movie.id}>
                <li>{ `${movie.title} (${movie.date})` } <button className="removebutton" onClick={handleClick}>Remove</button> </li>
                </div>
            ))}
            
        </div>
    )
}
export default Nominations;