import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice.js";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const firstname = useSelector((state) => state.auth.user?.firstName);
  const lastname = useSelector((state) => state.auth.user?.lastName);
  const username = useSelector((state) => state.auth.user?.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <div className="nav-link">
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {username || `${firstname} ${lastname}`}
            </Link>
            <button className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </div>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
