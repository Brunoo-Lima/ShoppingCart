import { AiOutlineSearch } from 'react-icons/ai';
import './Search.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import Api from '../../Api';

const Search = () => {
  const [search, setSearch] = useState('');
  const { setProducts } = useContext(UserContext);

  async function handleSearch(e) {
    e.preventDefault();
    const products = await Api(search);
    setProducts(products);
    setSearch('');
  }

  return (
    <form className="formSearch" onSubmit={handleSearch}>
      <input
        className="inputSearch"
        type="search"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        placeholder="Buscar produtos"
        aria-label="Search"
        required
      />
      <button className="btnSearch" type="submit">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default Search;
