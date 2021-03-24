import React, { useState } from 'react'
import { Div } from '../../Components/Hamburguer';
import { BiPlus } from 'react-icons/bi';
import { falseApi } from '../../../pages/api/hello';

export const Hamburguer = ({ 
    scroll,
    setDeleteProduct,
    deleteProduct,
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
    hamburguer,
    setRoute,
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

        setIdProduct(hamburguer[id]);
        setDeleteProduct(hamburguer[id]._id);
        setRoute(`description/descriptiondelete/`);
    }

    const handleEdit = (e) =>{
        setEdit(!edit);
        const id = e.target.id;
        setIdProduct(hamburguer[id]);
        setDeleteProduct(hamburguer[id]._id);
        setRoute(`description/descriptionpatch/`);
    }


    const showModal = () => {
        setModal(!modal);
        setRoute('/description/descriptionpost');
    };
    return (
        <Div col={modal} id={scroll[0].path}>
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
                    {!hamburguer ? '' : hamburguer.map((item, index) => {
                        return(
                            <Div.Product key={index}>
                                <img src={item.url} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <button className="price">R${item.price}</button>
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
