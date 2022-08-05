import React from "react"
import "./index.scss"

export default function ProjectCard(props) {
  const tagElements = props.tags.map((item) => {
    return <img src={item} alt="" />
  })

  return (
    <div className="projectScene">
      <div className="projectCube" onClick={props.handleClick}>
        <div className="face face-front">
          <img src={props.image} alt="website" />
          <h3>{props.name}</h3>
        </div>
        <div className="face face-right">
          <div className="content">
            <h3>{props.name}</h3>
            <div className="icons">{tagElements}</div>

            <button className="flat-button project-button">View Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}
