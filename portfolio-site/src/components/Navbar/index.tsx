import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/A-logo-white.png'
import LogoSubtitle from '../../assets/images/name-logo-white.png'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  let activeStyle = {
    textDecoration: 'underline',
    backgroundColor: '#003049',
  }
  let activeClassName = 'underline'
  let isActive: boolean

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="sublogo" />
      </Link>
      <nav>
        <NavLink
          className="home-link"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <FontAwesomeIcon icon={faHome} color="#fdf0d5" />
        </NavLink>

        <NavLink
          className="details-link"
          to="/details"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <FontAwesomeIcon icon={faUser} color="#fdf0d5" />
        </NavLink>

        <NavLink
          className="contact-link"
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#fdf0d5" />
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar
