import React, { useState } from 'react'
import { Div } from '../../Components/Hamburguer';
import { BiPlus } from 'react-icons/bi';
import { Modals } from '../Modal';

export const Hamburguer = () => {
    const [hover, setHover] = useState();
    const [modal, setModal] = useState(false);

    console.log(modal);

    const showModal = () => setModal(!modal);
    return (
        <Div col={modal} >
            <Modals modal={modal} setModal={setModal} showModal={showModal} />
            <Div.Content>
                <Div.BoxAdd
                        onMouseEnter={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)} 
                        scal={hover}
                        modal={modal}
                        onClick={showModal}
                        >
                    <BiPlus 
                        size={50} 
                        color="rgba(100,100,100)" 
                        cursor="pointer" 
                        />
                </Div.BoxAdd>
            </Div.Content>
        </Div>
    )
}
