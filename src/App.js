import React, { Component } from 'react';
import Particles from "react-particles-js";
import './App.css';
import './index.css';

import { Navigation, Logo, ImageLinkForm, Rank } from './components';

const particleOptions  = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles"
         params={ particleOptions }
         />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
