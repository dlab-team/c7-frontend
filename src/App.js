import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import FormView from './views/form/FormView';
import UiHome from './views/home/home';
import Login from './views/login/login';
import Register from './views/registrar/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './utils/Redux/store';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<UiHome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/form' element={<FormView />} />
          </Routes>
        </Provider>
      </BrowserRouter>
      <FormView />
  </>
)}


export default App;