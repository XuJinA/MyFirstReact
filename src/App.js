import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

class Clock1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Clock1 Hello, world!</h1>
        <h2>现在是 {this.props.date1.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function Clock(props) {
  return (
    <div>
      <h1>Clock Hello, world!</h1>
      <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function Tick1() {
  return(
    <div>
    <Clock date={new Date()} />
    <Clock1 date1={new Date()} />
    </div>
  );
}

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsaa3333</code> and save to reload.
          
        </p>
        <Tick1></Tick1>
        
        <Clock1 date1={new Date()} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App2;
