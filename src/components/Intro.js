import React from "react"; 
 
class Intro extends React.Component { 
 
  render() { 
    return ( 
      <div className="panel green">
        <div id="body-content">
          <div id="top-nav">
            <div class="navlink">
              <a href="https://github.com/ddbrennan" target="_blank">GITHUB</a>
              <span> / </span> 
              <a href="mailto:ddbren@gmail.com?subject=Hello David!">EMAIL</a>
              <span> / </span> 
              <a href="https://www.linkedin.com/in/david-d-brennan/">LINKEDIN</a>
              <span> / </span> 
              <a href="#">RESUME</a>
              <span> / </span> 
              <a href="https://medium.com/@ddbren">BLOG</a>
            </div>
          </div>
          <div id="name">DAVID BRENNAN</div>
          <div id="bottom-nav">
            <div class="navlink"><a href="#webdev">WEB DEVELOPMENT</a> / <a href="#illustration">DESIGN / ILLUSTRATION</a></div>
          </div>
        </div>
      </div>
    ) 
  } 
 } 
export default Intro