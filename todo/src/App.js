import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const buttonDispatcher =

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ (e) => {
          this.props.dispatch({type: 'INCREMENT'});
          console.log('Pushed Button');
        }}>Button</button>
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default App;
