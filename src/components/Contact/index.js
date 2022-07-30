import "./index.scss"
import React, { useState } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"

export default function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate")
  const contactArray = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]
  setTimeout(() => {
    setLetterClass("text-animate-hover")
  }, 3000)
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={contactArray}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            dolorem animi veniam inventore quisquam eveniet.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    id=""
                    cols="30"
                    rows="6"
                    required
                  ></textarea>
                </li>
                <li>
                  <button className="flat-button">SEND</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}
