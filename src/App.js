
import './styles/App.scss';
import UiHome from './views/home/home';
import { BrowserRouter } from 'react-router-dom';
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