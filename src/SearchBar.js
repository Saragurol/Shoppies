import "./searchbar.css";                                 

function SearchBar({handleSearch, handleSubmit}){
    return (
        <div className="searchbar">
            <label htmlFor="title">Movie Title</label>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleSearch}/>
            </form>

        </div>
    )
}
export default SearchBar; 