import React, { useState } from 'react'
import styled from 'styled-components';
import { Navbar } from '../src/Fixed/Header';
import { PanelConfig } from '../src/Fixed/Panel';
import db from '../pages/api/config.json';
import { Modals } from '../src/Fixed/Modal';

const Div = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Panel(){


    return (
        <>
            <Navbar color={db.theme.colors.panelColor} />
            {/* <Div><Modals modal={modal} setModal={setModal} /></Div> */}
            <PanelConfig></PanelConfig>        
        </>
    )
}
