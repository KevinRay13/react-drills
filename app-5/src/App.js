import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ 'http://via.placeholder.com/640x360' }/>
      </div>
    );
  }
}

export default App;
