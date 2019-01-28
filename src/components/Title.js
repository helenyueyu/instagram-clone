import React from 'react'
import { Menu, Button, Search } from 'semantic-ui-react'
const Title = () => {
  return (
    <Menu style={{padding: '0.3rem', position: 'fixed', zIndex: '5', transform: 'translateY(-5rem)', width: '100%', height: '12vh'}}>

      <h1 style={{fontFamily: "'Pacifico', cursive", paddingLeft: '10vw', transform: 'translateY(0.5rem)'}}>Instagram Clone</h1>

      <p style={{position: 'absolute', transform: 'translate(3rem, 3rem)'}}>This is just a clone! All rights belong to Instagram.</p>

        <Search style={{margin: 'auto', borderRadius: '0px'}}/>


        <span><Button primary style={{marginTop: '1rem', background: '#3c89f2', paddingRight: '0.9rem', paddingLeft: '0.9rem', paddingTop: '0.6rem', paddingBottom: '0.6rem', letterSpacing: '0.4px', transform: 'translateX(-3rem)'}}>Log In</Button></span>

        <span><Button style={{marginTop: '1rem', background: 'white', color: '#3c89f2', letterSpacing: '0.4px', fontSize: '1.1rem', paddingRight: '0.8rem', paddingLeft: '0.7rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', transform: 'translateX(-3rem)'}}>Sign Up</Button></span>
    </Menu>
  )
}

export default Title
