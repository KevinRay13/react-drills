import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      str : "",
      rappers : 
      ["Dr. Dre",
       "Ice Cube",
       "Snoop",
       "Eazy E",
       "Chance the Rapper"]
    }
    this.stringWrite = this.stringWrite.bind(this)
  }
  stringWrite(e){
    this.setState({str: e.target.value})

  }
  
  render() {
    let goats = this.state.rappers.filter((e) =>{
      return e.includes(this.state.str)}).map((element, index) => {
        return (
          <h2 key = { index }>{ element }</h2>
        )
      })
    return (
      <div className="App">
        <input type="text" 
        placeholder="type here"
        onChange={(e) => this.stringWrite(e)}/>
        { goats }
      </div>
    );
  }
}

export default App;
