import React, { Component } from 'react'

class Header extends Component {
  state = {
    username: null,
    realname: null,
    posts: null,
    followers: null,
    following: null
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({
        username: data[0].username,
        realname: data[0].name,
        posts: Math.floor(Math.random()*100),
        followers: Math.floor(Math.random()*1000),
        following: Math.floor(Math.random()*200)
      }))
  }
  render() {
    return (
      <div>
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
