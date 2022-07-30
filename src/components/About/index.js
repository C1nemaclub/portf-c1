import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import React, { useState, useEffect } from "react"
import {
  FaReact,
  FaHtml5,
  FaJsSquare,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa"
import Loader from "react-loaders"
export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate")
  const jobArray = ["A", "b", "o", "u", "t", " ", "m", "e"]
  setTimeout(() => {
    setLetterClass("text-animate-hover")
  }, 3000)

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vestibulum mi sed metus aliquam tempus. Pellentesque placerat leo et
            urna ullamcorper posuere.
          </p>
          <p>
            Ut feugiat vel nisl eget tempus. Aliquam nec ultrices odio, eu
            faucibus erat. Nam quis viverra metus. Quisque et iaculis justo, nec
            pellentesque enim
          </p>
          <p>
            Ut feugiat vel nisl eget tempus. Aliquam nec ultrices odio, eu
            faucibus erat. Nam quis viverra metus. Quisque et iaculis justo, nec
            pellentesque enim
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaReact color="#5ed4f4" />
            </div>
            <div className="face2">
              <FaHtml5 color="#f06529" />
            </div>
            <div className="face3">
              <FaJsSquare color="#efd81d" />
            </div>
            <div className="face4">
              <FaCss3Alt color="#28a4d9" />
            </div>
            <div className="face5">
              <FaGitAlt color="ec4d28" />
            </div>
            <div className="face6">
              <FaCss3Alt color="#28a4d9" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}
