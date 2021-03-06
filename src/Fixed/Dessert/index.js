import React, { useState } from 'react'
import { Div } from '../../Components/Hamburguer';
import { BiPlus } from 'react-icons/bi';
import { falseApiCandy } from '../../../pages/api/hello';

export const Dessert = ({ 
    scroll,
    idProduct,
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
    dessert,
    setRoute,
    setDeleteProduct,
    setIsContact
}) => {
    const [hover, setHover] = useState();

    const Api = falseApiCandy;

    const showModal = () => {
        setModal(!modal);
        setRoute('/dessert/dessertpost');
    };

    const handleEdit = (e) =>{
        setEdit(!edit);
        const id = e.target.id;

        setIdProduct(dessert[id]);
        setDeleteProduct(dessert[id]._id);
        setRoute('/dessert/dessertpatch/');
    }

    const handleClick = (e) => {
        const id = e.target.id;
        setDelet(!delet);
        setIsDessert(true); 
        setIsPromo(false);
        setIsHamburguer(false);
        setIsAbout(false);
        setIsContact(false);

        setIdProduct(dessert[id]);
        setDeleteProduct(dessert[id]._id);
        setRoute('/dessert/dessertdelete/');
    }
    return (
        <Div col={modal} id={scroll[0].path}>
            <Div.Content>
                <Div.BoxProduct>
                <Div.BoxAdd
                        onMouseEnter={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)} 
                        scal={hover}
                        edit={edit}
                        modal={modal}
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
                    {!dessert ? '' : dessert.map((item, index) => {
                        return(
                            <Div.Product key={index}>
                                <img src={item.url} alt={item.name} />
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
