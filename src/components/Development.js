import React from "react";
import Project from "./Project.js" 
 
class Development extends React.Component { 
 
  render() { 
    return ( 
      <div className="project-box panel red" id="webdev">
        <div className="title">WEB DEVELOPMENT</div>
        <div className="side-panel-left">
          <Project name="kinship" size="big"/>
        </div>
        <div className="side-panel-right">
          <Project name="oinkedIn" size="small top"/>
          <Project name="rothko" size="small bot"/>
        </div>
      </div>
    ) 
  } 
 } 
export default Development