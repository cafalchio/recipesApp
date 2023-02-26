import { useState } from "react";
import {  Menu } from "semantic-ui-react";
import "./Navbar.css"


export default function Navbar() {
    const [activeItem, setActiveItem] = useState('home')
    const loggedIn = false;
    const handleItemClick = (e:  React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      if (e.target instanceof HTMLAnchorElement)
        setActiveItem(e.target.id)
    }

    return (
        <Menu  
          borderless={true}
          className="navbar"
          >
        <Menu.Item 
          className="navbar-item"
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          link={true}
          href="/home"
          id="home"
        />
        <Menu.Item className="navbar-item"
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
          link={true}
          href="/messages"
          id = "messages"
        />
        <Menu.Item className="navbar-item"
          name='friends'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
          link={true}
          href="/friends"
          id = "friends"
        />
        <Menu.Menu position='right' >
        {loggedIn? 
            <Menu.Item 
            className="navbar-item-button"
            name='logout'
            active={activeItem === 'logout'}
          /> : 
          <>
            <Menu.Item 
            className="navbar-item-button"
            name='login'
            color="blue"
            active={activeItem === 'login'}
            link={true}
            href="/login"
        /> 
        <Menu.Item 
          className="navbar-item-button"
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