import React, { Component } from 'react'
import { Grid, Header, Image, Button, Divider } from 'semantic-ui-react'

import './Header.css'

import verified from './verified.png'

class Head extends Component {
  state = {
    username: null,
    realname: null,
    profilepic: null
  }
  componentDidMount() {
    fetch('https://randomuser.me/api')
      .then(res => res.json())
      .then(data => this.setState({
        profilepic: data.results[0].picture.large,
        username: data.results[0].login.username,
        realname: data.results[0].name.first.slice(0,1).toUpperCase() + data.results[0].name.first.slice(1) + ' ' + data.results[0].name.first.slice(0,1).toUpperCase() + data.results[0].name.last.slice(1),
        posts: Math.floor(Math.random()*100)
      }))
  }
  render() {
    return (
      <div>
        <Grid width="100%" style={{marginTop: '5rem', transform: 'translateY(3rem)'}}>
          <Grid.Column width={5}>

          <Image src={this.state.profilepic} alt="profilepic" style={{borderRadius: '50%', transform: 'translateX(10rem)'}}/>

          </Grid.Column>
          <Grid.Column width={7}>
          <span style={{display: 'flex', flexDirection: 'row'}}>
            <Header as="h1" style={{fontFamily: 'Oxygen', fontSize: '1.8rem', transform: 'translateY(1rem)'}}>{this.state.username}</Header>
            <img src={verified} width="25px" height="20px" style={{paddingLeft: '0.5rem', transform: 'translateY(1rem)', opacity: '0.8'}}/>
            <span>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</span>

            <span><Button primary className="important">Follow</Button></span>
          </span>
          <br/>
            <span style={{fontSize: '1.2rem'}}><b>{this.props.posts}</b> posts</span>
            <span>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</span>

            <span style={{fontSize: '1.2rem'}}><b>{this.props.followers}</b> followers</span>
            <span>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</span>

            <span style={{fontSize: '1.2rem'}}><b>{this.props.following}</b> following</span>
            <span>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</span>

          <br/>
          <br/>
          <span style={{fontSize: '1.2rem'}}><b>{this.state.realname}</b></span>
          <div>The verified icon is made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.</div>
          </Grid.Column>
        </Grid>
        <Divider style={{transform: 'translateY(3rem)'}}/>
      </div>
    )
  }
}

export default Head
