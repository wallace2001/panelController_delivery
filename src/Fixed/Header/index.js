import React, { useState, useRef, useEffect } from 'react'
import { Header } from '../../Components/Header';
import { Open } from '../../Components/Navbar/Open';
import { Close } from '../../Components/Navbar/Close.js';
import { Subnav } from '../Submenu';
import { SidebarData } from '../../../pages/api/info';
import { FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/router';

export const Navbar = ({ color, setNavbar, navbar }) => {
    const Sidebar = SidebarData;
    const [scrollNav, setScrollNav] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

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

    useEffect(() => {
        const get = async() => {
            setName(await localStorage.getItem('name'));
        }

        get();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('oauth_token');
        localStorage.removeItem('name');
        localStorage.setItem('logado', false);
        router.push('/');
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

                <div className="logout">
                    <h5>{name}</h5>
                    <label style={{cursor: 'pointer'}} onClick={() => handleLogout()}><FiLogOut size={25}/></label>
                </div>
            </Header.content>
        </Header>
    )
}

