import React, { Component } from 'react';
import Particles from "react-particles-js";
import Clarifai from 'clarifai';
import './App.css';
import './index.css';

import { Navigation, Logo, ImageLinkForm, Rank, FaceRecognition, SignIn } from './components';


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
      box: {},
      route: 'signIn'
    }
  }

  // calculateFaceLocation method

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  onRouteChange = () => {
    this.setState({route: 'home'});
  }


  // displayFaceBox method
  displayFaceBox = (box) => {
    console.log(box)
    this.setState({ box: box})
  }


  // triggering the event of the form box
  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  // triggering the event of the button
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
    }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
         params={ particleOptions }
         />
        <Navigation />
        {/* Sign In form with ternary operator to check if the user has already sign up   */}
        { this.state.route === 'signIn'
          ? <SignIn onRouteChange={this.onRouteChange} />
            : <div>
                <Logo />
                <Rank />
                <ImageLinkForm
                  onInputChange={this.onInputChange} // calling "this" because it calls the App and onInputChange is a property of the App so "this" = App
                  onButtonSubmit={this.onButtonSubmit}
                />
                {/* Calling "this.state" because it calls the App and the state and then the property defined, check line 28 */}
                <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
              </div>
            }
      </div>
    );
  }
}

export default App;

