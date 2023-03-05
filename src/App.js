
import './styles/App.scss';
import UiHome from './views/home/home';
//Redux
import { Provider } from 'react-redux';
import store from './utils/Redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <UiHome />
      </Provider>
    </>
)}


export default App;