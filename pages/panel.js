import React from 'react'
import { Navbar } from '../src/Fixed/Header';
import { PanelConfig } from '../src/Fixed/Panel';
import db from '../pages/api/config.json';

export default function Panel(){
    return (
        <>
            <Navbar color={db.theme.colors.panelColor} />
            <PanelConfig />        
        </>
    )
}
