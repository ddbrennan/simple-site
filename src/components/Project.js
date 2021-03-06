import React from "react";
import { PROJECTS } from "../projects"
 
class Project extends React.Component { 
 
  render() { 
    let project = PROJECTS[this.props.name]
    return ( 
      <div className={ `project ${this.props.size}` }>
        <div className="proj-img"><img src={ project.img } /></div>
        <div className="proj-info">
          <div className="proj-title">{ project.title }</div>
          <div className="proj-desc">{ project.description }</div>
          <div className="proj-link" onClick={()=> window.open(project.link, "_blank")}>{ project.linkTitle }</div>
        </div>
      </div>
    ) 
  } 
 } 
export default Project