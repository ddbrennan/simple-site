import React from "react"; 
import Project from "./Project.js"
 
class Illustration extends React.Component { 
 
  render() { 
    return ( 
      <div className="project-box panel blue" id="illustration">
        <div className="title">DESIGN / ILLUSTRATION</div>
        <div className="side-panel-left">
          <Project name="critterbury" size="big"/>
        </div>
        <div className="side-panel-right">
          <Project name="artcrank" size="small top"/>
          <Project name="pestilence" size="small bot"/>
        </div>
      </div>
    ) 
  } 
 } 
export default Illustration