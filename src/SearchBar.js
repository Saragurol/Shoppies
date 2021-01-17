import "./searchbar.css";
import {useState} from "react";                                    

function SearchBar(){

    const handleClick = () => {
        console.log("search movie")
    }
    return (
        <div className="searchbar">
            <h2>Movie Title</h2>
            <input>

            </input>
        </div>
    )
}
export default SearchBar; 