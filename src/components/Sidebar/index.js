import "./index.scss"
import Logo from "../../assets/logo.png"
import LogoS from "../../assets/images/logo-s.png"
import { Link, NavLink } from "react-router-dom"
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaClipboard,
} from "react-icons/fa"

import React from "react"

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <h3 className="sub-logo">Santiago</h3>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FaHome />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FaUser />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FaClipboard />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FaEnvelope />
        </NavLink>
      </nav>
      <ul className="this">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/C1nemaclub"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/C1nemaclub"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/santiagovm18/"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  )
}
