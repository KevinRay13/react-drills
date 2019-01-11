import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      arrOfArtists : 
      ["Andre 3000",
       "Kanye West",
       "Donald Glover",
       "J. Cole",
       "Kendric Lamar"]

    }
  }

  
  
  render() {
    let myArrOfArtists  = this.state.arrOfArtists.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })
    return (
      <div className="App">
        <h1>Greatest Artists</h1>
        { myArrOfArtists }
      </div>
    );
  }
}

export default App;
