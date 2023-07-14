import { AppContext } from './UserContext';
import Cart from './components/Cart/Cart';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <AppContext>
        <Header />
        <main className="main">
          <Home />
          <Cart />
        </main>
      </AppContext>
    </>
  );
};

export default App;
