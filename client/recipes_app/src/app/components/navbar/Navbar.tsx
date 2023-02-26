import { useState } from "react";
import {  Menu } from "semantic-ui-react";
import "./Navbar.css"
import { Navigate } from 'react-router-dom';


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
          onClick={() => handleItemClick}
          link={true}
          href="/home"
          id="home"
        />
        <Menu.Item className="navbar-item"
          name='recipes'
          active={activeItem === 'recipes'}
          onClick={() => handleItemClick}
          link={true}
          href="/recipes"
          id = "recipes"
        />
        <Menu.Item className="navbar-item"
          name='about'
          active={activeItem === 'about'}
          onClick={() => handleItemClick}
          link={true}
          href="/about"
          id = "about"
        />
        <Menu.Menu position='right' >
        {loggedIn? 
            <Menu.Item 
            className="navbar-item-button"
            name='logout'
          /> : 
          <>
            <Menu.Item 
            className="navbar-item-button"
            name='login'
            onClick={() => handleItemClick}
            link={true}
            href="/login"
            id = "login"
        /> 
        <Menu.Item 
          className="navbar-item-button"
            name='register'
            onClick={() => handleItemClick}
            link={true}
            href="/register"
            id = "register"
        />
        </>}
        </Menu.Menu>
      </Menu>
    )
}