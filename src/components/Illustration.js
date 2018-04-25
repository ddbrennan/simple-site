import React from "react"; 
import Project from "./Project.js"
 
class Illustration extends React.Component { 
 
  render() { 
    return ( 
      <div className="project-box panel blue" id="illustration">
        <div className="title">DESIGN / ILLUSTRATION</div>
        <Project name="critterbury" size="big"/>
        <Project name="artcrank" size="small top"/>
        <Project name="pestilence" size="small bot"/>
      </div>
    ) 
  } 
 } 
export default Illustration