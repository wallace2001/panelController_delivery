import React, { useState } from 'react'
import { Header } from '../../Components/Header';
import { Open } from '../../Components/Navbar/Open';
import { Close } from '../../Components/Navbar/Close.js';
import { Subnav } from '../Submenu';

import { SidebarData } from '../../../pages/api/info';

export const Navbar = ({ color }) => {
    const Sidebar = SidebarData;
    const [navbar, setNavbar] = useState(false);

    const showNavbar = () => setNavbar(!navbar);
    return (
        <Header color={color}>
            <Header.content>
                <Header.Menu>
                        <Open to="#" onClick={showNavbar} navbar={navbar}  />
                    <Header.Nav navbar={navbar}>
                        <Close to="#" onClick={showNavbar} navbar={navbar}  />
                        <Header.Wrap>
                            {Sidebar.map((item,index) =>{
                                return(
                                    <Header.Space key={index}>
                                        <Subnav item={item} />
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

