import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../images/logo.png"
import Nav from './Nav';


const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img className='logo' src={logo} alt="" />
        </NavLink>
        <Nav />
    </MainHeader>
  )
}

const MainHeader = styled.header` 
 height: 10rem;
 padding: 0 4.8rem ;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
.logo{
 height: 13rem;
}
@media (max-width:${({theme})=>theme.media.mobile}) { 
} 
`;

export default Header