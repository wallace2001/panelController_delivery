import React, { useState } from 'react'
import styled from 'styled-components';
import { Navbar } from '../src/Fixed/Header';
import { PanelConfig } from '../src/Fixed/Panel';
import db from '../pages/api/config.json';


export default function Panel(){
    const [closeNav, setCloseNav] = useState();
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <Navbar color={db.theme.colors.panelColor} navbar={navbar} setNavbar={setNavbar} />
            {/* <Div><Modals modal={modal} setModal={setModal} /></Div> */}
            <PanelConfig navbar={navbar} setNavbar={setNavbar}></PanelConfig>        
        </>
    )
}
