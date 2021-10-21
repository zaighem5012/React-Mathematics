import React from 'react';
import styled from 'styled-components';
import Burger from '../Nav/Burger';
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex ;
  justify-content: space-between ;
align-items: center;
  .logo {
    padding: 15px 0;
  }
  .path{
    text-decoration:none;
    font-size: 25px;
  }
`

const Header = () => {
  return (
    <div>
    <Nav>
      <div className="logo">
      <Link className='path text-light' to='/'>Math Online</Link>
      </div>
      <Burger />
    </Nav>
    </div>
  )
}

export default Header
