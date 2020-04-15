import React, { Component } from 'react';
import './index.css';

import { Navigation, Logo, ImageLinkForm, Rank } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
