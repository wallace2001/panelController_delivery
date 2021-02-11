import React from 'react'
import { Navbar } from '../src/Fixed/Header';
import { PanelConfig } from '../src/Fixed/Panel';

export default function Panel(){
    return (
        <>
            <Navbar color={"#0057FF"} />
            <PanelConfig />        
        </>
    )
}
