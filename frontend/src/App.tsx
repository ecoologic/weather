import { FC } from 'react';
import './index.css';
import Themed from './App/Themed';
import Content from './Content';

const Header: FC = () => {
  return (
    <header className="App__header">
      <h2>An App</h2>
    </header>
  );
};

const Footer: FC = () => {
  return (
    <footer className="App__footer">
      Designed by ecoologic &copy; {new Date().getFullYear()}
    </footer>
  );
};

const App: FC = () => {
  return (
    <article className="App">
      <Themed>
        <Header />
        <Content />
        <Footer />
      </Themed>
    </article>
  );
};

export default App;
