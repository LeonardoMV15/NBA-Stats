import "../styles/searchBar.css";
import { IoSearch } from "react-icons/io5";


function SearchBar({ searchValue, setSearchValue }) {
  return (
    <div className="search-bar">

      <span className="search-icon" aria-hidden="true">      <IoSearch />
</span>
      <input
        type="text"
        aria-label="Search teams"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search your favorite team..."
      />
    </div>
  );
}

export default SearchBar;