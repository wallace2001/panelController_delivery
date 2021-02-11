import React, { useState } from 'react'
import { Panel } from '../../Components/Panel';
import db from '../../../pages/api/config.json';
import { SidebarData } from '../../../pages/api/info';
import { useRouter } from 'next/router';

export const PanelConfig = () => {
    const [actived, setActived] = useState();
    const info = SidebarData;
    const img = db.bgMenu;

    return (
        <Panel>
            <Panel.Bg backgroundImg={img}>
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
                                            >
                                                <h4>{item.title}</h4>
                                                {item.current ? (<div active={isSelect ? 1 : 0}><h3>5</h3></div>) : ''}
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
                                <Panel.Control key={index} id={item.path} info={false} model={active} >
                                    <Panel.Title
                                        onClick={() => {current && setActive(active) ? setActive(!active) : setActive(!active); setIcon(!icon); }}
                                        active={true}
                                        p={true}
                                        icon={true}
                                        
                                        >
                                        
                                        <h4>{item.title}</h4>
                                        <icon>{icon ? item.iconU : item.iconD}</icon>
                                        </Panel.Title>
                                        {active ? item.component : ''}
                                </Panel.Control>
                            );
                        })}
                    </Panel.Box>
                </Panel.Content>
            </Panel.Bg>
        </Panel>
    )
}