import React, { useEffect, useState } from 'react'
import { Panel } from '../../Components/Panel';
import db from '../../../pages/api/config.json';
import { falseApiEvaluation } from '../../../pages/api/hello';
import { useRouter } from 'next/router';

import { FaHamburger, FaCandyCane } from 'react-icons/fa';
import { BiMoney, BiPhone } from 'react-icons/bi';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { AiOutlineStar, AiOutlineTeam } from 'react-icons/ai';

import { Hamburguer } from '../Hamburguer';
import { About } from '../About';
import { Contact } from '../Contact';
import { Dessert } from '../Dessert';
import { Evaluation } from '../Evaluation';
import { Promo } from '../Promo';

import { Modals } from '../Modal';
import { ModalsEditAndDelete } from '../ModalsEditAndDelete';




export const PanelConfig = ({ navbar, setNavbar }) => {
    const [actived, setActived] = useState();
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [edit2, setEdit2] = useState(false);
    const [delet, setDelet] = useState(false);
    const [addContact, setAddContact] = useState(false);
    const [isContact, setIsContact] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isPromo, setIsPromo] = useState(false);
    const [isHamburguer, setIsHamburguer] = useState(false);
    const [isDessert, setIsDessert] = useState(false);
    const [idProduct, setIdProduct] = useState(undefined);
    const [contactAdd, setContactAdd] = useState(undefined);
    const [scroll, setScroll] = useState(undefined);
    const tamEval = falseApiEvaluation.length;

    // edit === modal ? setModal(!modal) : '';

    console.log(addContact);

    const SidebarData = [
        {
            title: 'Hamburguer',
            path: '/hamburguer',
            bottom: true,
            icon: <FaHamburger />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <Hamburguer scroll={scroll} idProduct={idProduct} setIdProduct={setIdProduct} setIsDessert={setIsDessert} setIsPromo={setIsPromo} setIsAbout={setIsAbout} setIsContact={setIsContact} setIsHamburguer={setIsHamburguer} delet={delet} setDelet={setDelet} modal={modal} setModal={setModal} edit={edit} setEdit={setEdit} delet={delet} setDelet={setDelet} />,
            current: false,
        },
        
        {
            title: 'Sobremesa',
            path: '/sobremesa',
            bottom: true,
            icon: <FaCandyCane />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <Dessert scroll={scroll} setIdProduct={setIdProduct} setIsDessert={setIsDessert} setIsPromo={setIsPromo} setIsAbout={setIsAbout} setIsContact={setIsContact} setIsHamburguer={setIsHamburguer} delet={delet} setDelet={setDelet} modal={modal} setModal={setModal} edit={edit} setEdit={setEdit} delet={delet} setDelet={setDelet} />,
            current: false,
        },
    
        {
            title: 'Promoção',
            path: '/promocao',
            bottom: true,
            icon: <BiMoney />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <Promo scroll={scroll} setIdProduct={setIdProduct} setIsDessert={setIsDessert} setIsPromo={setIsPromo} setIsAbout={setIsAbout} setIsContact={setIsContact} setIsHamburguer={setIsHamburguer}  delet={delet} setDelet={setDelet} modal={modal} setModal={setModal} edit={edit} setEdit={setEdit} delet={delet} setDelet={setDelet} />,
            current: false,
        },
    
        {
            title: 'Avaliação',
            path: '/avaliacao',
            bottom: true,
            icon: <AiOutlineStar />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <Evaluation scroll={scroll} />,
            current: true,
        },
    
        {
            title: "Contato",
            path: '/contato',
            bottom: true,
            icon: <BiPhone />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <Contact scroll={scroll} contactAdd={contactAdd} setContactAdd={setContactAdd} setIsDessert={setIsDessert} setIsPromo={setIsPromo} setIsAbout={setIsAbout} setIsContact={setIsContact} setIsHamburguer={setIsHamburguer} addContact={addContact} setAddContact={setAddContact} delet={delet} setDelet={setDelet} edit={edit2} setEdit={setEdit2} />,
            current: false,
        },
    
        {
            title: 'Sobre',
            path: '/sobre',
            bottom: false,
            icon: <AiOutlineTeam />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <About scroll={scroll} setIsDessert={setIsDessert} setIsPromo={setIsPromo} setIsAbout={setIsAbout} setIsContact={setIsContact} setIsHamburguer={setIsHamburguer} edit={edit2} setEdit={setEdit2} />,
            current: false,
        },
    
    ];

    const info = SidebarData;
    useEffect(() => {
        setScroll(info);
    }, []);
    const img = db.bgMenu;

    return (
        <Panel onClick={() => setNavbar(false)}>
            <Panel.Bg backgroundImg={img}>
                <Panel.Black 
                    edit={edit ? 1 : 0}
                    about={isAbout ? 1 : 0}
                    hamb={isHamburguer ? 1 : 0}
                    contact={isContact ? 1 : 0}
                    dessert={isDessert ? 1 : 0}
                    promo={isPromo ? 1 : 0}
                    modal={modal ? 1 : 0}
                    addContact={addContact ? 1 : 0}
                >
                    <ModalsEditAndDelete contactAdd={contactAdd} idProduct={idProduct} setIdProduct={setIdProduct} setIsDessert={setIsDessert} setIsPromo={setIsPromo} setIsAbout={setIsAbout} setIsContact={setIsContact} setIsHamburguer={setIsHamburguer} isHamburguer={isHamburguer} isPromo={isPromo} isDessert={isDessert} isContact={isContact} isAbout={isAbout} addContact={addContact} setAddContact={setAddContact} delet={delet} edit={edit2} setDelet={setDelet} setEdit={setEdit2} />
                    <Modals idProduct={idProduct} modal={modal} setModal={setModal} edit={edit} setEdit={setEdit} />
                    <Panel.Content>
                        <Panel.Box info={true}>
                        <Panel.Control info={true}>
                            <Panel.Form>
                            {info.map((item,index) => {

                                const isSelect = actived === index;  
                                        
                                return(
                                        <label key={index}>
                                            <input 
                                                type="radio" 
                                                name="name"
                                                onChange={() => setActived(index)}
                                                data_selected={isSelect ? 1 : 0}
                                                />
                                            {/* <Panel.Div data_selected={isSelect}>{item.title}</Panel.Div> */}
                                            <Panel.Title 
                                                // key={index}
                                                data_selected={isSelect ? 1 : 0}
                                                p={true} 
                                                info={true} 
                                                edit={edit ? 1 : 0}
                                                about={isAbout ? 1 : 0}
                                                hamb={isHamburguer ? 1 : 0}
                                                contact={isContact ? 1 : 0}
                                                dessert={isDessert ? 1 : 0}
                                                promo={isPromo ? 1 : 0}
                                                modal={modal ? 1 : 0}
                                                edit2={edit2}
                                                addContact={addContact ? 1 : 0}
                                                bottom={item.bottom}
                                                >
                                            <Panel.LinkScroll
                                                        to={item.path}
                                                        activeClass="active"
                                                        smooth={true}
                                                        duration={500} 
                                                        spy={true} 
                                                        exact='true' 
                                                        offset={-80}>{item.title}</Panel.LinkScroll>
                                                    {item.current ? (<div active={isSelect ? 1 : 0}><h3>{tamEval}</h3></div>) : ''}
                                            </Panel.Title>
                                        </label>
                                );
                            })}
                            </Panel.Form>
                            </Panel.Control>
                        </Panel.Box>

                        <Panel.Box info={false}>
                            {info.map((item,index) => {
                                const current = index + 1;
                                const [active, setActive] = useState(false);
                                const [icon, setIcon] = useState(false);
                                return(
                                    <Panel.Control 
                                    key={index} 
                                    id={item.path} 
                                    info={false} 
                                    model={active}
                                    modal={modal ? 1 : 0}
                                    edit={edit ? 1 : 0}
                                    about={isAbout ? 1 : 0}
                                    hamb={isHamburguer ? 1 : 0}
                                    contact={isContact ? 1 : 0}
                                    dessert={isDessert ? 1 : 0}
                                    edit2={edit2}
                                    addContact={addContact ? 1 : 0}
                                    promo={isPromo ? 1 : 0} >
                                        <Panel.Title
                                            onClick={() => {current && setActive(active) ? setActive(!active) : setActive(!active); setIcon(!icon); }}
                                            active={true}
                                            p={true}
                                            icon={true}
                                            edit={edit ? 1 : 0}
                                            model={active}
                                            modal={modal ? 1 : 0}
                                            about={isAbout ? 1 : 0}
                                            hamb={isHamburguer ? 1 : 0}
                                            contact={isContact ? 1 : 0}
                                            edit2={edit2}
                                            addContact={addContact ? 1 : 0}
                                            dessert={isDessert ? 1 : 0}
                                            promo={isPromo ? 1 : 0}
                                            
                                            >
                                            
                                            <h4>{item.title}</h4>
                                                <icon>{item.iconAdd}{icon ? item.iconU : item.iconD}</icon>
                                            </Panel.Title>
                                            {active ? item.component: ''}
                                    </Panel.Control>
                                );
                            })}
                        </Panel.Box>
                    </Panel.Content>
                </Panel.Black>
            </Panel.Bg>
        </Panel>
    )
}