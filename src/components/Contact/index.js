import "./index.scss"
import React, { useState, useRef } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import emailjs from "@emailjs/browser"
import Typewritter from "typewriter-effect"
import GlitchText from "react-glitch-effect/core/GlitchText"

export default function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate")
  const refForm = useRef()

  const contactArray = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]
  setTimeout(() => {
    setLetterClass("text-animate-hover")
  }, 3000)
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_ed3o6uu",
        "template_nullk2g",
        refForm.current,
        "KAx75SdQmsIvbc2Dc"
      )
      .then(
        () => {
          alert("Message Succesfully sent")
          window.location.reload(false)
        },
        (e) => {
          console.log(e)

          alert("Failed to send the message, please try again")
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          {/* <h1>
            <AnimatedLetters
              strArray={contactArray}
              idx={15}
              letterClass={letterClass}
            />
          </h1> */}
          <GlitchText component="h1" color1={"green"} color2={"red"}>
            <Typewritter
              onInit={(typewritter) => {
                typewritter.pauseFor(500).typeString("Contact Me").start()
              }}
            />
          </GlitchText>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            dolorem animi veniam inventore quisquam eveniet.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <div className="input-group top-group">
                <input type="text" name="name" placeholder="Name" required />
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </div>
              <div className="input-group">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input-group"></div>
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  id=""
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button className="flat-button ctn-button">SEND</button>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}
