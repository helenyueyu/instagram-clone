import React from 'react'
import { Menu, Button, Search } from 'semantic-ui-react'
const Title = () => {
  return (
    <Menu style={{padding: '0.3rem'}}>

      <h1 style={{fontFamily: "'Pacifico', cursive", paddingLeft: '10vw', transform: 'translateY(0.5rem)'}}>Instagram Clone</h1>

        <Search style={{margin: 'auto', transform: 'translateX(-9rem)', borderRadius: '0px'}}/>

        <Button primary style={{position: 'absolute', right: '9rem', marginTop: '1rem', background: '#3c89f2', paddingRight: '0.9rem', paddingLeft: '0.9rem', paddingTop: '0.6rem', paddingBottom: '0.6rem', letterSpacing: '0.4px'}}>Log In</Button>

        <Button style={{position: 'absolute', right: '3rem', marginTop: '1rem', background: 'white', color: '#3c89f2', letterSpacing: '0.4px', fontSize: '1.1rem', paddingRight: '0.8rem', paddingLeft: '0.7rem', paddingTop: '0.5rem', paddingBottom: '0.5rem'}}>Sign Up</Button>
    </Menu>
  )
}

export default Title
