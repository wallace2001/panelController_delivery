import React, { useState } from 'react'
import { Div } from '../../Components/Dessert';
import { BiPlus } from 'react-icons/bi';
import { falseApiCandy } from '../../../pages/api/hello';

export const Dessert = ({ modal, setModal }) => {
    const [hover, setHover] = useState();

    const Api = falseApiCandy;

    console.log(modal);

    const showModal = () => setModal(!modal);
    return (
        <Div col={modal} >
            <Div.Content>
                <Div.BoxHam>
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
                <Div.ContentHam>
                    {Api.map((item, index) => {
                        return(
                            <Div.Ham key={index}>
                                <img src={item.photo} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <button className="price">{item.price}</button>
                                <button className="delete">Excluir</button>
                                <button className="edit">Editar</button>
                            </Div.Ham>
                        );
                    })}
                    </Div.ContentHam>
                </Div.BoxHam>
            </Div.Content>
        </Div>
    )
}
