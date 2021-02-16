import React, {useRef, useState} from 'react'
import { Modals } from '../../Components/ModalsEditAndDelete';
import { IoIosCloseCircle } from 'react-icons/io';
import { falseApi } from '../../../pages/api/hello';

export const ModalsEditAndDelete = ({
    idProduct,
    delet, 
    edit,
    setEdit, 
    setDelet, 
    contactAdd,
    setContactAdd,
    addContact, 
    setAddContact, 
    isAbout, 
    isContact,
    isHamburguer,
    isPromo,
    isDessert,
    setIsPromo ,
    setIsDessert,
    setIsHamburguer,
    setIsAbout,
    setIsContact }) => {
    
        const modalRef = useRef();

        const CloseModal = (e) => {
            if(modalRef.current === e.target){
            setEdit(false);
            setDelet(false);
            setIsHamburguer(false);
            setIsPromo(false);
            setIsAbout(false);
            setIsContact(false);
            setIsDessert(false);
            }
        }

        const handleClick = () => {
            setDelet(!delet)
            setIsDessert(false); 
            setIsPromo(false);
            setIsHamburguer(true);
            setIsAbout(false);
            setIsContact(false);
        }



    return (
        <Modals edit={edit} delet={delet} addContact={addContact} ref={modalRef} onClick={CloseModal}>
            <Modals.Wrapper>
                <Modals.Content>
                <Modals.Close><IoIosCloseCircle 
                size={30} 
                color="black" 
                cursor="pointer" 
                onClick={() => {
                edit ? setEdit(!edit) : ''
                delet ? setDelet(!delet) : ''
                addContact ? setAddContact(!addContact) : '' 
                isHamburguer ? setIsHamburguer(false) : setIsHamburguer(false)
                isPromo ? setIsPromo(false) : setIsPromo(false)
                isAbout ? setIsAbout(false) : setIsAbout(false)
                isContact ? setIsContact(false) : setIsContact(false) 
                isDessert ? setIsDessert(false) : setIsDessert(false)}} /></Modals.Close>
                    <Modals.Wrap>
                        {delet ? (
                        <>
                            {isContact ? (
                                <Modals.Contact>
                                    <h3>Tem certeza que deseja deletar ?</h3>
                                    <button className="delete">Sim, tenho!</button>
                                    <button className="nodelete" onClick={handleClick}>Não</button>
                                </Modals.Contact>
                            ): isHamburguer ? (
                                <Modals.Ham>
                                    <h3>Deletar Hamburguer</h3>
                                    <img src={idProduct.photo} alt={idProduct.name}/>
                                    <h2>{idProduct.name}</h2>
                                    <p>{idProduct.description}</p>
                                    <button className="price">{idProduct.price}</button>
                                    <button className="delete">Excluir</button>
                                </Modals.Ham>
                            ): isPromo ? (
                                <Modals.Promo>
                                    <h3>Deletar Sobremesa</h3>
                                    <img src={idProduct.photo} alt={idProduct.name}/>
                                    <h2>{idProduct.name}</h2>
                                    <p>{idProduct.description}</p>
                                    <button className="price">{idProduct.price}</button>
                                    <button className="delete">Excluir</button>
                                </Modals.Promo>
                            ): isDessert ? (
                                <Modals.Dessert>
                                    <h3>Deletar Sobremesa</h3>
                                    <img src={idProduct.photo} alt={idProduct.name}/>
                                    <h2>{idProduct.name}</h2>
                                    <p>{idProduct.description}</p>
                                    <button className="price">{idProduct.price}</button>
                                    <button className="delete">Excluir</button>
                                </Modals.Dessert>
                            ): null}
                        </>
                    ): edit ? (
                        <>
                            {isContact ? (
                                <Modals.ContactEdit>
                                    <h3>Editar contato</h3>
                                    <label>Atualizar número</label>
                                    <h5>Número a ser editado: {contactAdd.number}</h5>
                                    <input type="text" placeholder="Exemplo: (61)99178-6805" />
                                    <button>Atualizar</button>
                                </Modals.ContactEdit>
                            ): (
                                <Modals.About>
                                    <h3>Editar</h3>
                                    <label>Título</label>
                                    <input type="text" placeholder="Titulo" />
                                    <label>Descrição</label>
                                    <textarea type="text" placeholder="Conteúdo" />

                                    <div>
                                    <button className="nodelete">Editar</button>
                                    <button className="delete" onClick={() => setDelet(!delet)}>Cancelar</button>
                                    </div>
                                </Modals.About>
                            )}
                        </>
                    ) : addContact ? (
                        <Modals.ContactAdd>
                            <h3>Adicionar Contato</h3>
                            <label>Adicionar novo contato</label>
                            <input type="text" placeholder="Exemplo (61)99178-6805" />
                            <button>Adicionar</button>
                        </Modals.ContactAdd>
                    ) : null}
                    </Modals.Wrap>
                </Modals.Content>
            </Modals.Wrapper>
        </Modals>
    )
}
