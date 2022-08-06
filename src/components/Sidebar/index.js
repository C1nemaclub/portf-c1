import "./index.scss"
import Logo from "../../assets/logo.png"
import LogoS from "../../assets/images/logo-s.png"
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom"
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaClipboard,
} from "react-icons/fa"
import { FiX, FiMenu } from "react-icons/fi"
import { useLocation } from "react-router-dom"
import React, { useState, useEffect } from "react"

export default function Sidebar() {
  const [menuState, setMenuState] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.screen.width <= 812) {
      setMenuState(true) // Close the navigation panel
    }
  }, [pathname])

  useEffect(() => {
    if (window.screen.width <= 812) {
      setMenuState(true)
    }
  }, [])

  function menuToggle() {
    setMenuState((prev) => !prev)
  }

  return (
    <>
      {menuState ? (
        <FiMenu className="menu-icon menu-close" onClick={menuToggle} />
      ) : (
        <FiX className="menu-icon menu-open" onClick={menuToggle} />
      )}
      <div className="nav-bar" style={{ left: menuState ? "-60%" : "0%" }}>
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
          <h3 className="sub-logo">Santiago</h3>
        </Link>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <div className="link-flex">
              <FaHome />
              Home
            </div>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <div className="link-flex">
              <FaUser />
              About
            </div>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="projects-link"
            to="/projects"
          >
            <div className="link-flex">
              <FaClipboard />
              Projects
            </div>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <div className="link-flex">
              <FaEnvelope />
              Contact
            </div>
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
    </>
  )
}
