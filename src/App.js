import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';

import Title from './components/Title'
import Head from './components/Header'
import PictureGrid from './components/PictureGrid'

class App extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#f8f8f8', width: '100%'}}>
        <Title />
        <Container style={{paddingLeft: '5rem', paddingRight: '5rem'}}>
          <Head />
          <PictureGrid />
        </Container>
      </Container>
    )
  }
}

export default App;
