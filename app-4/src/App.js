import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.login = this.login.bind(this)
    
  }

  handleChange(e) {
    this.setState({username: e.target.value})
  }
  handleChange2(e){
    this.setState({password: e.target.value})
  }
  login(){
    alert(`Welcome back ${ this.state.username }!`);

  }

  render() {
    return (
      <div className="App">
      <input
      type='text'
      placeholder='username'
      onChange={(e) => this.handleChange(e)}
      />
      <input
      type='password'
      placeholder='password'
      onChange={(e) => this.handleChange2(e)}
      />
      <button onClick={this.login}>Login</button>


      </div>
    );
  }
}

export default App;
