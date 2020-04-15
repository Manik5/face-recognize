import React, { Component } from 'react';
import './index.css';

import { Navigation, Logo, ImageLinkForm} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
