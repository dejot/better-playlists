import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = {color: 'black'}
let defaultStyle = {

    color: defaultTextColor,
    listStyleType: 'none'


}

class Aggregate extends Component {
  render() {
    let headerTwoStyle = { color: 'green' }
    return (
      <div style={{ width: '50%', float: 'left' }}>
        <h2 style={headerTwoStyle}>Number Text</h2>
      </div>
    );
  }
}


class Filter extends Component {
  render() {
    return(
      <div>
        <img src="" alt=""/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, width: '30%', float: 'left' }}>
        <h3>Title</h3>
        <img src="" alt=""/>
        <ul style={{...defaultStyle}}>
          <li>Song 01</li>
          <li>Song 02</li>
          <li>Song 03</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>

    );
  }
}

export default App;
