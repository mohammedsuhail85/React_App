import React, { Component } from 'react';
import './App.css';

import MainLayer from './components/MainLayer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayer />
      </div>
    );
  }
}