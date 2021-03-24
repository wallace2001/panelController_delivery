import React, { useState, useEffect } from 'react'
import { Navbar } from '../src/Fixed/Header';
import { PanelConfig } from '../src/Fixed/Panel';
import db from '../pages/api/config.json';
import api from '../db';



export default function Panel(){
    const [hamburguer, setHamburguer] = useState();
    const [promo, setPromo] = useState();
    const [dessert, setDessert] = useState();
    const [evaluation, setEvaluaton] = useState();
    const [about, setAbout] = useState();
    const [tel, setTel] = useState();
    const [whats, setWhats] = useState();
    const [ifood, setIfood] = useState();
    const [tamEval, setTamEval] = useState();
    const [navbar, setNavbar] = useState(false);

        const handleSend = () => {
            console.log('tste');
        }

        useEffect(() => {
            api.get(`description/descriptionget`)
            .then(res => setHamburguer(res.data));
        }, [hamburguer])

        useEffect(() => {
            api.get(`dessert/dessertget`)
            .then(res => setDessert(res.data));
        }, [dessert]);

        useEffect(() => {
            api.get(`promo/promoget`)
            .then(res => setPromo(res.data));
        }, [promo])

        useEffect(() => {
            api.get('evaluation/getevaluation')
            .then(res => {
                setEvaluaton(res.data);
                setTamEval(res.data.length);
                setTamEval(evaluation ? evaluation.length : '');
        });
        }, [evaluation])

        useEffect(() => {
            api.get('contact/contactgettel')
            .then(res => setTel(res.data));
        }, [tel]);

        useEffect(() => {
            api.get('contact/contactgetwhats')
            .then(res => setWhats(res.data));
        }, [whats]);

        useEffect(() => {
            api.get('contact/contactgetifood')
            .then(res => setIfood(res.data));
        }, [ifood]);

        useEffect(() => {
            api.get('about/getabout')
            .then(res => setAbout(res.data));
        }, [about]);

        console.log(promo);
        console.log(dessert);

    return (
        <>
            <Navbar color={db.theme.colors.panelColor} navbar={navbar} setNavbar={setNavbar} />
            {/* <Div><Modals modal={modal} setModal={setModal} /></Div> */}
            <PanelConfig tamEval={tamEval} about={about} tel={tel} whats={whats} ifood={ifood} evaluation={evaluation} dessert={dessert} promo={promo} handleSend={handleSend} navbar={navbar} hamburguer={hamburguer} setNavbar={setNavbar}></PanelConfig>        
        </>
    )
}
