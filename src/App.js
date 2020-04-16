import React, { Component } from 'react';
import Particles from "react-particles-js";
import Clarifai from 'clarifai';
import './App.css';
import './index.css';

import { Navigation, Logo, ImageLinkForm, Rank } from './components';


const app = new Clarifai.App({
  apiKey: "466bfdf6cf984671b3eb1c475c3cf957",
});


const particleOptions  = {
  particles: {
    number: {
      value: 2500,
      density: {
        enable: true,
        value_area: 5000,
      }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function (response) {
          console.log(response)
          // do something with response
        },
        function (err) {
          // there was an error
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
         params={ particleOptions }
         />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    );
  }
}

export default App;
