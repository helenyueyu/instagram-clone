import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class Picture extends Component {
  state = {
    shaded: false
  }
  handleEnter = () => {
    this.setState({
      shaded: true
    })
  }
  handleLeave = () => {
    this.setState({
      shaded: false
    })
  }
  render() {
    const defaultStyle = {
      margin: '1rem'
    }
    const shadedStyle = {
      margin: '1rem',
      opacity: 0.5,
      cursor: 'pointer'
    }
    return (
      <React.Fragment>
        <img key={this.props.key} src={this.props.src} alt={this.props.idx} width="250px" style={(this.state.shaded) ? shadedStyle : defaultStyle}
        onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} />
        <span style={{position: 'absolute', transform: 'translate(-12rem, 5rem)'}}><i class="fas fa-heart"></i>{Math.floor(Math.random()*100)}<i class="fas fa-comment"></i>{Math.floor(Math.random()*100)}</span>
      </React.Fragment>
    )
  }
}

export default Picture
