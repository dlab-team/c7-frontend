import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import UiHome from './views/home/home';
//Redux
import { Provider } from 'react-redux';
import store from './utils/Redux/store';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <UiHome />
        </Provider>
      </BrowserRouter>
    </>
)}


export default App;