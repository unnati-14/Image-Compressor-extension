import React, { Component } from 'react';
import Popup from './components/Popup';
import Dropzone from './components/Dropzone';
import Functionality from './components/Functionality';

class App extends Component {
  render(){
  return (
    <div>
      <Popup />
      <Functionality />
      </div>

  );
  }
}

export default App;