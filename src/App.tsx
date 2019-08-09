import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import bwipjs from 'bwip-js';

class App extends Component {
  componentDidMount() {
    bwipjs('mycanvas', {
      bcid:        'code128',       // Barcode type
      text:        '0123456789',    // Text to encode
      scale:       3,               // 3x scaling factor
      height:      10,              // Bar height, in millimeters
      includetext: true,            // Show human-readable text
      textxalign:  'center',        // Always good to set this
    }, function (err: any) {
      if (err) {
        // Decide how to handle the error
        // `err` may be a string or Error object
      } else {
        // Nothing else to do in this example...
      }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <canvas id="mycanvas"></canvas>
      </div>
    );
  }
}

export default App;





