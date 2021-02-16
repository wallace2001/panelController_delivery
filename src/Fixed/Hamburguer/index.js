import React, { useState } from 'react'
import { Div } from '../../Components/Hamburguer';
import { BiPlus } from 'react-icons/bi';
import { falseApi } from '../../../pages/api/hello';

export const Hamburguer = ({ 
    setIdProduct,
    modal, 
    setModal, 
    edit, 
    setEdit, 
    delet, 
    setDelet,
    setIsPromo ,
    setIsDessert,
    setIsHamburguer,
    setIsAbout,
    setIsContact }) => {
    const [hover, setHover] = useState();

    const Api = falseApi;

    const handleClick = (e) => {
        const id = e.target.id;
        setDelet(!delet);
        setIsDessert(false); 
        setIsPromo(false);
        setIsHamburguer(true);
        setIsAbout(false);
        setIsContact(false);

        setIdProduct(Api[id]);
    }

    const showModal = () => setModal(!modal);
    return (
        <Div col={modal}>
            <Div.Content>
                <Div.BoxProduct>
                <Div.BoxAdd
                        onMouseEnter={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)} 
                        scal={hover}
                        modal={modal}
                        edit={edit}
                        delet={delet}
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
                                <button className="delete" id={index} onClick={handleClick}>Excluir</button>
                                <button className="edit" onClick={() => setEdit(!edit)}>Editar</button>
                            </Div.Product>
                        );
                    })}
                    </Div.ContentProduct>
                </Div.BoxProduct>
            </Div.Content>
        </Div>
    )
}
