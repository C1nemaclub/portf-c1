import "./index.scss"
import React, { useState, useRef } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import emailjs from "@emailjs/browser"
import Typewritter from "typewriter-effect"
import GlitchText from "react-glitch-effect/core/GlitchText"

export default function Contact() {
  const refForm = useRef()

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
      <section className="container contact-page">
        <div className="text-zone">
          <GlitchText component="h1" color1={"green"} color2={"red"}>
            <Typewritter
              onInit={(typewritter) => {
                typewritter.pauseFor(500).typeString("Contact Me").start()
              }}
            />
          </GlitchText>
          <p className="text">
            Email me any questions or inquiries right below! If you preffer you
            can send me a direct message throught{" "}
            <a
              href="mailto:santiagov801@gmail.com"
              className="contact-me-email"
            >
              santiagov801@gmail.com
            </a>
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
        <div class="mapouter map">
          <div class="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=medellin&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://www.whatismyip-address.com/divi-discount/"></a>
          </div>
        </div>
      </section>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}
