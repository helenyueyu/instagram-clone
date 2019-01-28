import React, { Component } from 'react'

import Picture from './Picture'


class PictureGrid extends Component {
  state = {
    images: [],
    err: [],
    hearts: Array.from({length: this.props.posts}, () => Math.floor(Math.random() * (this.props.followers + this.props.following)/2 * .3)),
    comments: Array.from({length: this.props.posts}, () => Math.floor(Math.random() * (this.props.followers + this.props.following)/2 * 0.1))
  }
  componentDidMount() {
    for (let i = 15; i < 115; i++) {
      fetch(`https://picsum.photos/500/500/?image=${i}`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          return response
        })
        .then(res => this.setState({
          images: this.state.images.concat(res.url)
        }))
        .catch(err => console.log(err))
    }
  }
  render() {
    console.log(this.state.hearts)
    console.log(typeof this.state.hearts)
    return (
      <div className="App" style={{transform: 'translateY(3rem)'}}>
        {this.state.images.map((x, idx) =>
          <Picture key={idx} src={x} index={idx} hearts={this.state.hearts[idx]}
          comments={this.state.comments[idx]}/>)}
      </div>
    );
  }
}

export default PictureGrid
