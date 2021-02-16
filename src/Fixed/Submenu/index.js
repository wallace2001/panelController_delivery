import React, { useEffect, useState } from 'react'
import { SidebarLink } from '../../Components/Submenu';
import { animateScroll as scroll } from 'react-scroll';


export const Subnav = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
        <SidebarLink onClick={item.subNav && showSubnav}>
            <SidebarLink.first>
                {item.icon}
                <SidebarLink.Label 
                to={item.path}
                smooth={true}
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >{item.title}</SidebarLink.Label>
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
