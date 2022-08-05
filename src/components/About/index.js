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
import GlitchText from "react-glitch-effect/core/GlitchText"

import Typewritter from "typewriter-effect"

export default function About() {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <GlitchText component="h1" color1={"green"} color2={"red"}>
            <Typewritter
              onInit={(typewritter) => {
                typewritter.pauseFor(500).typeString("About").start()
              }}
            />
          </GlitchText>
          <p>
            Im Santiago Velasquez -- a Frontend web developer based in
            Medellin-Colombia with a big passion for programming and learning
            new exciting things.
          </p>

          <p>
            I have worked in customer service for a few months where i was able
            to improve my english and communicate, I also worked as a boiler
            techinician at Zenu for half a year which is where i first made my
            first phone application and decided to go further and learn web
            development
          </p>
        </div>
        <div className="stage-cube-cont">
          <div class="scene">
            <div class="cube">
              <div class="cube__face cube__face--front"></div>
              <div class="cube__face cube__face--back"></div>
              <div class="cube__face cube__face--right"></div>
              <div class="cube__face cube__face--left"></div>
              <div class="cube__face cube__face--top"></div>
              <div class="cube__face cube__face--bottom"></div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}
