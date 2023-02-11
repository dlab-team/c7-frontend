import logo from './logo.svg';
import './App.css';
import Section_whoWork from './component/Sections_whoWok';

function App() {
  return <div className="App">
    <header className="App-header">
      < img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
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

    <Section_whoWork />
  </div>
}

export default App;
