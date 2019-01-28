import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';

import Title from './components/Title'
import Header from './components/Header'
import PictureGrid from './components/PictureGrid'

class App extends Component {
  render() {
    return (
      <Container>
        <Title />
        <Header />
        <PictureGrid />
      </Container>
    )
  }
}

export default App;
