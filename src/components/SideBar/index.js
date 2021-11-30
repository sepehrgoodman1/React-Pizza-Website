import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SideBarElements'
const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Desserts</SidebarLink>
                <SidebarLink to='/'>Full menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default SideBar
