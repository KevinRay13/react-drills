import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      list: []
    }
    this.tasker = this.tasker.bind(this);
  }

  taskerChange( value ){
    this.setState({input: value});
  }
  tasker(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''

    });
  }
  
  render() {
    let list = this.state.list.map( (element, index) => {
      return(
        <Todo key={index} task={element}/>
      )
    })

    return (
      <div className="App">
        <h1>My to-do List</h1>
          <div>
          <input 
          value= {this.state.input}
          onChange={(e) => this.taskerChange(e.target.value) }
          placeholder="write tasks here"
          />
          <button onClick={this.tasker}
          >add</button>
          </div>
          < br/>
          {list}
      </div>
    );
  }
}

export default App;
