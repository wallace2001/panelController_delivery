import React, { useState } from 'react'
import { Div } from '../../Components/Hamburguer';
import { BiPlus } from 'react-icons/bi';
import { falseApiPromo } from '../../../pages/api/hello';

export const Promo = ({ 
    scroll,
    setIdProduct,
    setDeleteProduct,
    modal, 
    setModal, 
    edit,
    promo,
    setEdit, 
    setDelet, 
    delet,
    setIsPromo ,
    setIsDessert,
    setIsHamburguer,
    setIsAbout,
    setRoute,
    setIsContact }) => {
    const [hover, setHover] = useState();

        const handleClick = (e) => {
            const id = e.target.id;
            setDelet(!delet)
            setIsDessert(false); 
            setIsPromo(true);
            setIsHamburguer(false);
            setIsAbout(false);
            setIsContact(false);

            setIdProduct(promo[id]);
            setDeleteProduct(promo[id]._id);
            setRoute(`promo/promodelete/`);
        }

        const handleEdit = (e) =>{
            setEdit(!edit);
            const id = e.target.id;
            setIdProduct(promo[id]);
            setDeleteProduct(promo[id]._id);
            setRoute(`promo/promopatch/`);
        }
    

    const showModal = () => {
        setModal(!modal);
        setRoute('/promo/promopost');
    };
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
                    {!promo ? '' : promo.map((item, index) => {
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