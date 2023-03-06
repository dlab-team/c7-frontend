import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import FormView from './views/form/FormView';
import UiHome from './views/home/home';

function App() {
  return <>
    <UiHome />
    <FormView />
  </>
}


export default App;