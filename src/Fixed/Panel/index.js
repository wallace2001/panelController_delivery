import React, { useState } from 'react'
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



export const PanelConfig = ({ modal, setModal }) => {
    const [actived, setActived] = useState();
    const tamEval = falseApiEvaluation.length;

    const SidebarData = [
        {
            title: 'Hamburguer',
            path: '/hamburguer',
            bottom: true,
            icon: <FaHamburger />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <Hamburguer modal={modal} setModal={setModal} />,
            current: false,
        },
        
        {
            title: 'Sobremesa',
            path: '/sobremesa',
            bottom: true,
            icon: <FaCandyCane />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <Dessert modal={modal} setModal={setModal} />,
            current: false,
        },
    
        {
            title: 'Promoção',
            path: '/promocao',
            bottom: true,
            icon: <BiMoney />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <Promo modal={modal} setModal={setModal} />,
            current: false,
        },
    
        {
            title: 'Avaliação',
            path: '/avaliacao',
            bottom: true,
            icon: <AiOutlineStar />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <Evaluation />,
            current: true,
        },
    
        {
            title: "Contato",
            path: '/contato',
            bottom: true,
            icon: <BiPhone />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <Contact />,
            current: false,
        },
    
        {
            title: 'Sobre',
            path: '/sobre',
            bottom: false,
            icon: <AiOutlineTeam />,
            iconU: <RiArrowUpSLine size={30} />,
            iconD: <RiArrowDownSLine size={30}/>,
            component: <About />,
            current: false,
        },
    
    ];

    const info = SidebarData;
    const img = db.bgMenu;

    return (
        <Panel>
            <Panel.Bg backgroundImg={img}>
                <Panel.Black modal={modal}>
                    <Panel.Content>
                        <Panel.Box info={true}>
                        <Panel.Control info={true}>
                            <Panel.Form>
                            {info.map((item,index) => {

                                const isSelect = actived === index;  
                                        
                                return(
                                        <label
                                            key={index}
                                            >
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
                                                bottom={item.bottom}
                                                modal={modal}
                                                >
                                                    <h4>{item.title}</h4>
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
                                    <Panel.Control modal={modal} key={index} id={item.path} info={false} model={active} >
                                        <Panel.Title
                                            onClick={() => {current && setActive(active) ? setActive(!active) : setActive(!active); setIcon(!icon); }}
                                            active={true}
                                            p={true}
                                            icon={true}
                                            
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