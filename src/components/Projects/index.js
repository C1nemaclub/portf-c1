import "./index.scss"
import "../../projects"
import React, { useState } from "react"
import Typewritter from "typewriter-effect"
import Loader from "react-loaders"
import GlitchText from "react-glitch-effect/core/GlitchText"
import projectsArray from "../../projects"
import ProjectCard from "./ProjectCard/index"

export default function Projects() {
  const [projects, setProjects] = useState(projectsArray)

  function handleClick(link) {
    window.open(link)
  }

  const projectElements = projects.map((item) => {
    return (
      <ProjectCard
        id={item.id}
        name={item.name}
        link={item.link}
        image={item.image}
        tags={item.tech}
        handleClick={(e) => handleClick(item.link)}
      />
    )
  })

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <GlitchText component="h1" color1={"green"} color2={"red"}>
            <Typewritter
              onInit={(typewritter) => {
                typewritter.pauseFor(500).typeString("Projects").start()
              }}
            />
          </GlitchText>
        </div>
        <div className="grid-container">{projectElements}</div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}
