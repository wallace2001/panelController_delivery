import React, { useState } from 'react'
import { Div } from '../../Components/Hamburguer';
import { BiPlus } from 'react-icons/bi';
import { falseApiPromo } from '../../../pages/api/hello';

export const Promo = ({ modal, setModal }) => {
    const [hover, setHover] = useState();

    const Api = falseApiPromo;

    const showModal = () => setModal(!modal);
    return (
        <Div col={modal} >
            <Div.Content>
                <Div.BoxProduct>
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
                <Div.ContentProduct>
                    {Api.map((item, index) => {
                        return(
                            <Div.Product key={index}>
                                <img src={item.photo} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <button className="price">{item.price}</button>
                                <button className="delete">Excluir</button>
                                <button className="edit">Editar</button>
                            </Div.Product>
                        );
                    })}
                    </Div.ContentProduct>
                </Div.BoxProduct>
            </Div.Content>
        </Div>
    )
}