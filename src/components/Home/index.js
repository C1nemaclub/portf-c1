import React, { useState, useEffect } from "react"
import LogoTitle from "../../assets/images/logo-s.png"
import "./index.scss"
import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters"
import Logo from "./Logo/index"
import Loader from "react-loaders"
import Typewritter from "typewriter-effect"

import GlitchText from "react-glitch-effect/core/GlitchText"

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate")
  const [text, setText] = useState("Hi, I'm Santiago Web Developer")

  const nameArray = ["a", "n", "t", "i", "a", "g", "o"]
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ]

  setTimeout(() => {
    setLetterClass("text-animate-hover")
  }, 4000)
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <GlitchText component="h1" color1={"green"} color2={"red"}>
            <Typewritter
              options={{
                delay: 50,
              }}
              onInit={(typewritter) => {
                typewritter.pauseFor(500).typeString(text).start()
              }}
            />
          </GlitchText>
          <h2>Frontend Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}
