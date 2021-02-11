import React, { useState } from 'react'
import { Panel } from '../../Components/Panel';
import db from '../../../pages/api/config.json';
import { SidebarData } from '../../../pages/api/info';

export const PanelConfig = () => {
    const [actived, setActived] = useState(false); 
    const info = SidebarData;
    const img = db.bgMenu;
    return (
        <Panel>
            <Panel.Bg backgroundImg={img}>
                <Panel.Content>
                    <Panel.Box info={true}>
                    <Panel.Control info={true}>
                        {info.map((item,index) => {    

                            const current = index + 1;                   
                            return(
                                <>
                                    <Panel.Title 
                                        key={index}
                                        active={true} 
                                        onClick={() => current && setActived(!actived) ? setActived(actived) : setActived(!actived)}
                                        p={true} 
                                        info={true} 
                                        bottom={item.bottom}
                                        active={actived}
                                        >
                                            <h4>{item.title}</h4>
                                            {item.current ? (<div><h3>5</h3></div>) : ''}
                                    </Panel.Title>
                                </>
                            );
                        })}
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