import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import Itemlistcontainer from './components/CartWidget/Itemlistcontainer';
import Itemlist from './components/itemlistcontainer/itemlistcontainer';

function App() {
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

  return (
    <div className="App">
    <Navbar />
      <header className="App-header">
        <Itemlist />
        <Itemlistcontainer greetings='hola' />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Alvaro clase1</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
