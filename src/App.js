import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import FormView from './views/form/FormView';
import UiHome from './views/home/home';
import Login from './views/login/login';
import LoginEmail from './views/loginEmail/login';
import Register from './views/registrar/index';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
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
          <Navbar />
          <Routes>
            <Route path='/' element={<UiHome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/loginEmail' element={<LoginEmail />} />
            <Route path='/register' element={<Register />} />
            <Route path='/form' element={<FormView />} />
            <Route path='/carrousel' element={<LayoutWorkProfile />} />
            <Route path='/userProfile' element={<UserProfile />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App;