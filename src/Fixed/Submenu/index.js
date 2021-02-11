import React, { useState } from 'react'
import { SidebarLink } from '../../Components/Submenu';


export const Subnav = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
        <SidebarLink onClick={item.subNav && showSubnav} id={item.path}>
            <SidebarLink.first>
                {item.icon}
                <SidebarLink.Label id={item.path}>{item.title}</SidebarLink.Label>
            </SidebarLink.first>
        </SidebarLink>
        {subnav && item.subNav.map((item, index) => {
            return(
                <SidebarLink.DropDownLink  id={item.path} key={index} >
                    <SidebarLink.first>
                        {item.icon}
                        <SidebarLink.Label1 id={item.path}>{item.title}</SidebarLink.Label1>
                    </SidebarLink.first>
                </SidebarLink.DropDownLink>
            );
        })}
        </>
    )
}
