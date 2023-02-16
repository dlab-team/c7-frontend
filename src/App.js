import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

        <div
          style={{ width: '400px', height: '500px', background: '#4545' }}
        >
          <a className="btn-dev btn-blue"> PRUEBA 1</a>
          <a className="btn-dev btn-blue btn-body-section"> PRUEBA 2</a>
          <a className="btn-dev btn-blue btn-body-section"> PRUEBA 3</a>
          <a className="btn-dev btn-white btn-body-section"> PRUEBA 3</a>
          <a className="btn-dev btn-blue btn-body-section"> PRUEBA 3</a>
          {/* <span className='big--text--title'> hola mundo probando 123 </span> <br/> */}
          {/* <span className='medium--text--title'> hola mundo probando 456 </span> <br/> */}
          <span className='subject--text--title'> hola mundo probando 789 </span> <br/>
          <span className='info--text--normal'> hola mundo probando 554 </span> <br/>
        </div>
      </header>
    </div>
  );
}

export default App;
