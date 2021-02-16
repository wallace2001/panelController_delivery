import React, { useState, useRef, useEffect } from 'react'
import { Header } from '../../Components/Header';
import { Open } from '../../Components/Navbar/Open';
import { Close } from '../../Components/Navbar/Close.js';
import { Subnav } from '../Submenu';
import { SidebarData } from '../../../pages/api/info';

export const Navbar = ({ color, setNavbar, navbar }) => {
    const Sidebar = SidebarData;
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

    const modalRef = useRef();

    const showNavbar = () => {
            
        setNavbar(!navbar)
    }


    const handleClick = () => {
        console.log('To');
    }

console.log(navbar);
    return (
        <Header color={color} scrollNav={scrollNav}>
            <Header.content >
                <Header.Menu>
                        <Open to="#" onClick={showNavbar} navbar={navbar}  />
                    <Header.Nav navbar={navbar}>
                        <Close to="#" onClick={showNavbar} navbar={navbar}  />
                        <Header.Wrap>
                            {Sidebar.map((item,index) =>{
                                return(
                                    <Header.Space key={index}>
                                            <Subnav item={item}></Subnav>
                                    </Header.Space>
                                );
                            })}
                        </Header.Wrap>
                    </Header.Nav>
                </Header.Menu>

                <Header.Logo>
                    <h2>RESTAURANTE</h2>
                </Header.Logo>

                <div></div>
            </Header.content>
        </Header>
    )
}

