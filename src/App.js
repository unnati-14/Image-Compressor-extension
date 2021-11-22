import React, { Component } from 'react';
import Popup from './components/Popup';
import Dropzone from './components/Dropzone';

class App extends Component {
  render(){
  return (
    <div>
      <Popup />
      <Dropzone />
            <button type="button" class="btn btn-outline-secondary" style={{marginLeft:"15rem",marginTop:"2rem",fontSize:"1.5rem",fontFamily:"Lucida",}}>Download Compressed File</button>
      </div>
  );
  }
}

export default App;