import Search from '../components/form/Search';
import CartBtn from './Cart/CartBtn';

import './Header.css';

const Header = () => {
  return (
    <header className="header-bg">
      <div className="container header">
        <h1 className="">myShoppingCart</h1>
        <div>
          <Search />
        </div>

        <nav>
          <CartBtn />
        </nav>
      </div>
    </header>
  );
};

export default Header;
