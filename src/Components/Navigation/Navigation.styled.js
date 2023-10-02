import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const Logo = styled(NavLink)`
  display: flex;
 justify-content: center;
 align-items: center;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #696969;
  font-size: 20px;

  span {
    color: #5F9EA0;
  }
`

export const Nav = styled.nav`
    ul {
        display: flex;
    justify-content: center;
    align-items: center;
    }
    
`

export const MainLink = styled(NavLink)`
    display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #696969;

  /* &.active {
    color: #5F9EA0;
  } */
`

export const PhoneLink = styled(NavLink)`
 display: flex;
 justify-content: center;
 align-items: center;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #5F9EA0;
  
`