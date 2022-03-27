import React from 'react'
import {FaBars} from 'react-icons/fa' /* this is to get the bars */
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
NavItem, NavLinks, NavBtn, NavBtnLink, Image} from './NavbarElements';
import logo from '../../images/logo.png'



/**
 *  <> </> there are called fragments
 *  you have to name them Navbar or not its not going to work
 *  you can use  rfce to make the return pop up
 */

const Navbar = ({ toggle }) => {
  return (
    <> 
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                <Image src={logo}/>
                    PT Bina Investama Aguna 
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
            <NavMenu>
                <NavItem> 
                    <NavLinks to="about">About Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="products">Products</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover">Discover</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="contact">Get In Touch</NavBtnLink>
            </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar