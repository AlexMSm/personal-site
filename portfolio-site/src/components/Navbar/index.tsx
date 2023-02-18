import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/A-logo-white.png";
import LogoSubtitle from "../../assets/images/name-logo-white.png";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  let activeStyle = {
    textDecoration: "underline",
    backgroundColor: "#003049",
  };
  let activeClassName = "underline";
  let isActive: boolean;

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="sublogo" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          className="home-link"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#fdf0d5" />
        </NavLink>
        <NavLink
          className="details-link"
          to="/details"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#fdf0d5" />
        </NavLink>

        <NavLink
          className="contact-link"
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#fdf0d5" />
        </NavLink>
        <NavLink
          className="portfolio-link"
          to="/portfolio"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#fdf0d5" />
        </NavLink>
      </nav>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Navbar;
