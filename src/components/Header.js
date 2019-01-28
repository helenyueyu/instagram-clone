import React, { Component } from 'react'

class Header extends Component {
  state = {
    username: null,
    realname: null,
    posts: null,
    followers: null,
    following: null,
    profilepic: null
  }
  componentDidMount() {
    fetch('https://randomuser.me/api')
      .then(res => res.json())
      .then(data => this.setState({
        profilepic: data.results[0].picture.large,
        username: data.results[0].login.username,
        realname: data.results[0].name.first + data.results[0].name.last,
        posts: Math.floor(Math.random()*100),
        followers: Math.floor(Math.random()*1000),
        following: Math.floor(Math.random()*200)
      }))
  }
  render() {
    return (
      <div>
        <img src={this.state.profilepic} alt="profilepic"/>
        {this.state.username} <br/>
        {this.state.realname} <br/>
        {this.state.posts} <br/>
        {this.state.followers} <br/>
        {this.state.following} <br/>
      </div>
    )
  }
}

export default Header
