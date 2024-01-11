import { Link, NavLink } from "react-router-dom";

import "./header.scss";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__box">
        <Link to="/" className="header__logo">
          <img src="/images/logo.svg" width="142" height="40" alt="Logo" />
        </Link>
        <nav className="header__nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/discover">Discover</NavLink>
          <NavLink to="/special">Special Deals</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="header__btns">
          <button className="logIn">Log In</button>
          <button className="signUp">Sign Up</button>
        </div>

        <div className="header__menu-logo">
          <img
            src="/images/menu-btn.svg"
            alt="menu logo"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        <div
          className={`header__menu-box ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        ></div>
        <div className={`header__menu-list ${menuOpen ? "menu-open" : ""}`}>
          <div className="header__menu-close">
            <div className="box" onClick={() => setMenuOpen(false)}>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                color="#fff"
                width="24"
                height="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowBackIcon"
              >
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
              </svg>
            </div>
          </div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/a">Discover</NavLink>
          <NavLink to="/b">Special Deals</NavLink>
          <NavLink to="/c">Contact</NavLink>
          <NavLink to="/d">Login In</NavLink>
          <NavLink to="/e " className="signUp">
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
