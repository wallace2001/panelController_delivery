import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Navbar } from '../src/Fixed/Header';
import { PanelConfig } from '../src/Fixed/Panel';
import db from '../pages/api/config.json';
import axios from 'axios';
import socketIo, { Socket } from 'socket.io-client';
import api from '../db';



export default function Panel(){
    const [hamburguer, setHamburguer] = useState();
    const [promo, setPromo] = useState();
    const [dessert, setDessert] = useState();
    const [evaluation, setEvaluaton] = useState();
    const [updateEval, setUpdateEval] = useState();
    const [tel, setTel] = useState();
    const [whats, setWhats] = useState();
    const [ifood, setIfood] = useState();
    const [closeNav, setCloseNav] = useState();
    const [navbar, setNavbar] = useState(false);

        const handleSend = () => {
            api.get(`description/descriptionget`)
            .then(res => setHamburguer(res.data));

            api.get(`promo/promoget`)
            .then(res => setPromo(res.data));

            api.get(`dessert/dessertget`)
            .then(res => setDessert(res.data));

            api.get('contact/contactgettel')
            .then(res => setTel(res.data));

            api.get('contact/contactgetwhats')
            .then(res => setWhats(res.data));

            api.get('contact/contactgetifood')
            .then(res => setIfood(res.data));
        }

        useEffect(() => {
            api.get(`description/descriptionget`)
            .then(res => setHamburguer(res.data));
        }, [setHamburguer])

        useEffect(() => {
            api.get(`dessert/dessertget`)
            .then(res => setDessert(res.data));
        }, [setDessert]);

        useEffect(() => {
            api.get(`promo/promoget`)
            .then(res => setPromo(res.data));
        }, [setPromo])

        useEffect(() => {
            api.get('evaluation/getevaluation')
            .then(res => setEvaluaton(res.data));
        }, [setEvaluaton])

        useEffect(() => {
            api.get('contact/contactgettel')
            .then(res => setTel(res.data));
        }, [setTel]);

        useEffect(() => {
            api.get('contact/contactgetwhats')
            .then(res => setWhats(res.data));
        }, [setWhats]);

        useEffect(() => {
            api.get('contact/contactgetifood')
            .then(res => setIfood(res.data));
        }, [setIfood]);

    return (
        <>
            <Navbar color={db.theme.colors.panelColor} navbar={navbar} setNavbar={setNavbar} />
            {/* <Div><Modals modal={modal} setModal={setModal} /></Div> */}
            <PanelConfig tel={tel} whats={whats} ifood={ifood} evaluation={evaluation} dessert={dessert} promo={promo} handleSend={handleSend} navbar={navbar} hamburguer={hamburguer} setNavbar={setNavbar}></PanelConfig>        
        </>
    )
}
