import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
//Vistas
import FormView from "./views/form/FormView";
import UiHome from "./views/home/home";
import Login from "./views/login/login";
import LoginEmail from "./views/loginEmail/login";
import Register from "./views/registrar/index";
import PageNotFound from "./views/notFound/PageNotFound";
import UserProfile from "./views/userProfile/UserProfile";
//Componentes
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LayoutWorkProfile from "./components/Form/WorkProfile_Layout/LayoutWorkProfile";
//Redux
import { useSelector } from "react-redux";

const initialState = {
  isLoggedIn: false,
  user: {
    userName: "",
    mail: "",
  },
  rol: "user" || "admin",
  accesToken: "",
};

const App = () => {
  const [user, setUser] = useState(initialState);
  const authDev = useSelector((store) => store.authDev);

  useEffect(() => {
    setUser(authDev);
  }, [authDev]);

  const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
  };

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" index element={<UiHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginEmail" element={<LoginEmail />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/form"
            element={
              <ProtectedRoute user={user.isLoggedIn}>
                <FormView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/carrousel"
            element={
              <ProtectedRoute user={user.isLoggedIn}>
                <LayoutWorkProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userProfile"
            element={
              <ProtectedRoute user={user.isLoggedIn}>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
