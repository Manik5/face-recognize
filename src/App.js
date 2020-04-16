import React, { Component } from 'react';
import Particles from "react-particles-js";
import Clarifai from 'clarifai';
import './App.css';
import './index.css';

import { Navigation, Logo, ImageLinkForm, Rank, FaceRecognition } from './components';


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
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then(
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;


// app.models
// .predict(
// Clarifai.COLOR_MODEL,
//     // URL
//     "https://samples.clarifai.com/metro-north.jpg"
// )
// .then(function(response) {
//     // do something with responseconsole.log(response);
//     },
//     function(err) {// there was an error}
// );
