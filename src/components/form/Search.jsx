import { AiOutlineSearch } from 'react-icons/ai';
import './Search.css';

const Search = () => {
  return (
    <form className="formSearch">
      <input
        className="inputSearch"
        type="search"
        placeholder="Buscar produtos"
        aria-label="Search"
      />
      <button className="btnSearch" type="submit">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default Search;
