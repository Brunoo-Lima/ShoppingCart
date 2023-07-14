import { AppContext } from './UserContext';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <AppContext>
        <Header />
        <main className="main">
          <Home />
        </main>
      </AppContext>
    </>
  );
};

export default App;
