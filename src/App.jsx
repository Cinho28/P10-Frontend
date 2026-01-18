import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
