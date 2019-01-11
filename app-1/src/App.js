import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {
      str: ''
    }
    this.stringWrite = this.stringWrite.bind(this)
  }
  stringWrite(e) {
    this.setState({str: e.target.value})
  }
  
  render() {
    return (
      <div className="App">
        <input type="text" 
        placeholder="type here"
        onChange={(e) => this.stringWrite(e)}/>
        <h2>{this.state.str}</h2>
      </div>
    );
  }
}

export default App;
