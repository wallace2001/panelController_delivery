import React, { useEffect, useState } from 'react'
import { SidebarLink } from '../../Components/Submenu';
import { animateScroll as scroll } from 'react-scroll';


export const Subnav = ({ item }) => {
    const [subnav, setSubnav] = useState(false);


    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
        <SidebarLink 
                        to={item.path}
                        smooth={true}
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        onClick={item.subNav && showSubnav}>
            <SidebarLink.first>
                {item.icon}
                <SidebarLink.Label>{item.title}</SidebarLink.Label>
            </SidebarLink.first>
        </SidebarLink>
        {subnav && item.subNav.map((item, index) => {
            return(
                <SidebarLink.DropDownLink  key={index} >
                    <SidebarLink.first>
                        {item.icon}
                        <SidebarLink.Label1>{item.title}</SidebarLink.Label1>
                    </SidebarLink.first>
                </SidebarLink.DropDownLink>
            );
        })}
        </>
    )
}
