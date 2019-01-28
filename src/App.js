import React, { Component } from 'react';
import './App.css';

import Title from './components/Title'
import Header from './components/Header'
import PictureGrid from './components/PictureGrid'

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Header />
        <PictureGrid />
      </div>
    )
  }
}

export default App;
