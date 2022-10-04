import React from "react"
import "./index.scss"
import { FaEye } from "react-icons/fa"

export default function ProjectCard(props) {
  const tagElements = props.tags.map((item) => {
    return <img src={item} alt="" />
  })

  console.log(props)

  return (
    <div class="card-container" onClick={props.handleClick}>
      <div class="img-container">
        <img src={props.image} alt="" />
        <div class="layer">
          <div className="icon">
            <FaEye />
          </div>
        </div>
      </div>
      <div class="bottom">
        <h4>{props.name}</h4>
        <p>{props.type}</p>
      </div>
    </div>
  )

  // <div className="projectScene">
  //   <div className="projectCube" onClick={props.handleClick}>
  //     <div className="face face-front">
  //       <img src={props.image} alt="website" />
  //       <h3 className="front-face-name">{props.name}</h3>
  //     </div>
  //     <div className="face face-right">
  //       <div className="content">
  //         <h3>{props.name}</h3>
  //         <div className="icons">{tagElements}</div>

  //         <button className="flat-button project-button">View Details</button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}
