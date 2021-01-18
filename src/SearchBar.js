import "./searchbar.css";                                 

function SearchBar({handleSearch, handleSubmit}){
    return (
        <div className="searchbar">
            <label htmlFor="title">Movie title</label>
            <form onSubmit={handleSubmit}>
                <input placeholder= "Search Movie" type="text" onChange={handleSearch}/>
            </form>

        </div>
    )
}
export default SearchBar; 