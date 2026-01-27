import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfile } from "./store/slices/authSlice.js";
import "./styles/App.css";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUserProfile(token));
    }
  }, [dispatch, token, user]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
