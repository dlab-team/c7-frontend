import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import FormView from './views/form/FormView';
import UiHome from './views/home/home';
import Login from './views/login/login';
import Register from './views/registrar/index';
import LayoutWorkProfile from './components/WorkProfile_Layout/LayoutWorkProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './utils/Redux/store';
import UserProfile from './views/userProfile/UserProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<UserProfile />} />
            {/* <Route path='/' element={<UiHome />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/form' element={<FormView />} />
            <Route path='/carrou' element={<LayoutWorkProfile />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App;