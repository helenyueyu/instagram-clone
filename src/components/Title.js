import React from 'react'
import { Menu, Button, Search } from 'semantic-ui-react'
const Title = () => {
  return (
    <Menu>
      <Menu.Item>
      <h1 style={{fontFamily: "'Pacifico', cursive"}}>Instagram Clone</h1>
      </Menu.Item>
      <Menu.Item>
        <Search />
      </Menu.Item>
      <Menu.Item>
        <Button primary>Log In</Button>
      </Menu.Item>
      <Menu.Item>
        <Button>Sign Up</Button>
      </Menu.Item>
    </Menu>
  )
}

export default Title
