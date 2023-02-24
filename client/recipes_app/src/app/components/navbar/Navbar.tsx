import { useState } from "react";
import {  Menu } from "semantic-ui-react";


export default function Navbar() {
    const [activeItem, setActiveItem] = useState('home')
    const loggedIn = false;
    const handleItemClick = (e: any) => {
        // setActiveItem(e.target.name)
        console.log(e.target.name)
    }

    return (
        <Menu  
          borderless={true}
          >
        <Menu.Item className="navbar-item"
        icon="home"
        link={true}
        href="/home"
        /> 
        <Menu.Item className="navbar-item"
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          link={true}
          href="/home"
        />
        <Menu.Item className="navbar-item"
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
          link={true}
          href="/home"
        />
        <Menu.Item className="navbar-item"
          name='friends'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right' >
        {loggedIn? 
            <Menu.Item 
            color="red"
            name='logout'
            active={activeItem === 'logout'}
          /> : 
          <>
            <Menu.Item 
            name='login'
            active={activeItem === 'login'}
            link={true}
            href="/login"
        /> 
        <Menu.Item 
            name='register'
            active={activeItem === 'register'}
            link={true}
            href="/register"
        />
        </>}
        </Menu.Menu>
      </Menu>
    )
}