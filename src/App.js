import React, { Component } from 'react';
import Intro from './components/Intro.js'
import Development from './components/Development.js'
import Illustration from './components/Illustration.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Development />
        <Illustration />
      </div>
    );
  }
}

export default App;
