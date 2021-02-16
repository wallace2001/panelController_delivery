import React, { useState } from 'react'
import { Div } from '../../Components/Hamburguer';
import { BiPlus } from 'react-icons/bi';
import { falseApiPromo } from '../../../pages/api/hello';

export const Promo = ({ 
    scroll,
    setIdProduct,
    modal, 
    setModal, 
    edit, 
    setEdit, 
    setDelet, 
    delet,
    setIsPromo ,
    setIsDessert,
    setIsHamburguer,
    setIsAbout,
    setIsContact }) => {
    const [hover, setHover] = useState();

    const Api = falseApiPromo;

        const handleClick = (e) => {
            setDelet(!delet)
            setIsDessert(false); 
            setIsPromo(true);
            setIsHamburguer(false);
            setIsAbout(false);
            setIsContact(false);

            setIdProduct(Api[e.target.id])
        }

        const handleEdit = (e) =>{
            setEdit(!edit);
            const id = e.target.id;
    
            setIdProduct(Api[id]);
        }
    

    const showModal = () => setModal(!modal);
    return (
        <Div col={modal} id={scroll[2].path} >
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
                                <button className="edit" id={index} onClick={handleEdit}>Editar</button>
                            </Div.Product>
                        );
                    })}
                    </Div.ContentProduct>
                </Div.BoxProduct>
            </Div.Content>
        </Div>
    )
}