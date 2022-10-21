import React from "react"
import "./index.scss"
import CV from "../../assets/Santiago_Velasquez_CV.pdf"
import { FaFileDownload } from "react-icons/fa"

export default function index() {
  return (
    <>
      <a
        className="btn cv-btn"
        href={CV}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFileDownload />
        Download CV
      </a>
    </>
  )
}
