import { useState } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [activeItem, setActiveItem] = useState('home')
    const loggedIn = false;
    const handleItemClick = (e: any, { name }: any) => {
        setActiveItem(name)
    }

    return (
        <Menu  borderless={true} attached={"top"} fluid={true} className="ui blue buttons"
        >
        <Menu.Item className="navbar-item"
        icon="home"
        Link={true}
        href="/home"
        /> 
        <Menu.Item className="navbar-item"
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          Link={true}
          href="/home"
        />
        <Menu.Item className="navbar-item"
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
          Link={true}
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