import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';

import Title from './components/Title'
import Head from './components/Header'
import PictureGrid from './components/PictureGrid'

class App extends Component {
  state = {
    posts: Math.floor(Math.random()*100),
    followers: Math.floor(Math.random() * 300),
    following: Math.floor(Math.random() * 400)
  }
  render() {
    return (
      <Container style={{backgroundColor: '#f8f8f8', width: '100%', height: '100%'}}>
        <Title />
        <Container style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
          <Head
            followers={this.state.followers} following={this.state.following} posts={this.state.posts}/>
          <PictureGrid
            followers={this.state.followers} following={this.state.following}
            posts={this.state.posts}/>
        </Container>
      </Container>
    )
  }
}

export default App;
