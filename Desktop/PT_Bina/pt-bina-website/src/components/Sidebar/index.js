import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,
SidebarMenu, SideBtnWrap, SidebarRoute, SidebarLink} from './SidebarElements';
/** Use rafce to autogenerate initial part of the file */


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={ toggle }>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about"  onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="products"  onClick={toggle}>
                    Products
                </SidebarLink>
                <SidebarLink to="discover"  onClick={toggle}> 
                    Discover
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                    <SidebarRoute to="/contact">Get In Touch</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;