import React, {useRef, useState} from 'react'
import { Modals } from '../../Components/ModalsEditAndDelete';
import { IoIosCloseCircle } from 'react-icons/io';
import { falseApi } from '../../../pages/api/hello';
import api from '../../../db';

export const ModalsEditAndDelete = ({
    idProduct,
    deleteProduct,
    delet, 
    edit,
    setEdit, 
    setDelet, 
    contactAdd,
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
    handleSend,
    route,
    tel,
    ifood,
    whats,
    infoContact,
    setIsContact }) => {
    
        const modalRef = useRef();
        const [error, setError] = useState(false);
        const [info, setInfo] = useState();
        const [success, setSuccess] = useState();
        const [upd, setUpd] = useState();
        // const [info, setInfo] = useState();

        console.log(route);
        console.log(infoContact);

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

            // setInfo(infoContact);
            setIsDessert(false); 
            setIsPromo(false);
            setIsHamburguer(true);
            setIsAbout(false);
            setIsContact(false);
        }

        const handleDelete = () => {
            api.delete(`${route+deleteProduct}`)
            .then(res => {
                console.log(res);
                setError(res.data);
                handleSend();
            });
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            
            api.post(`${route}`,{
                info: info,
            }).then(res => {
                console.log(res.data);
                setSuccess(res.data ? 1 : 0);
                handleSend();
            });
        }

        const handleUpdate = (e) => {
            e.preventDefault();

            api.patch(`${route+deleteProduct}`, {
                info: info,
            }).then(res => {
                setUpd(res.data);
                handleSend();
            });
        }


    return (
        <Modals edit={edit} delet={delet} addContact={addContact} ref={modalRef} >
            <Modals.Wrapper>
                <Modals.Content type={error ? 1 : 0} type1={success}>
                <Modals.Close onClick={() => {setError(false); setSuccess(false); setUpd(false)}}><IoIosCloseCircle 
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
                                error ? (
                                    <Modals.Contact type={error}>
                                        <h2 type={error}>Apagado com Sucesso!</h2>
                                    </Modals.Contact>
                                ) : (
                                <Modals.Contact>
                                    <h3>{infoContact === 'telefone' ? idProduct.telfone : infoContact === 'whatsapp' ? idProduct.whatsapp : infoContact === 'ifood' ? idProduct.ifood : ''}</h3>
                                    <h3>Tem certeza que deseja deletar ?</h3>
                                    <button className="delete" onClick={handleDelete}>Sim, tenho!</button>
                                    <button className="nodelete" onClick={handleClick}>Não</button>
                                </Modals.Contact> )
                            ): isHamburguer ? (
                                error ? (
                                    <Modals.Ham type={error}>
                                        <h2 type={error}>Apagado com sucesso!</h2>
                                    </Modals.Ham>
                                ): (
                                <Modals.Ham>
                                    <h3>Deletar Hamburguer</h3>
                                    <img src={idProduct.url} alt={idProduct.name}/>
                                    <h2>{idProduct.name}</h2>
                                    <p>{idProduct.description}</p>
                                    <button className="price">{idProduct.price}</button>
                                    <button className="delete" onClick={handleDelete}>Excluir</button>
                                </Modals.Ham> )
                            ): isPromo ? (
                                error ? (
                                    <Modals.Promo type={error}>
                                        <h2 type={error}>Apagado com sucesso!</h2>
                                    </Modals.Promo>
                                ) :(
                                <Modals.Promo>
                                    <h3>Deletar Sobremesa</h3>
                                    <img src={idProduct.url} alt={idProduct.name}/>
                                    <h2>{idProduct.name}</h2>
                                    <p>{idProduct.description}</p>
                                    <button className="price">{idProduct.price}</button>
                                    <button className="delete" onClick={handleDelete}>Excluir</button>
                                </Modals.Promo> )
                            ): isDessert ? (
                                error ? (
                                    <Modals.Dessert type={error}>
                                        <h2 type={error}>Apagado com sucesso!</h2>
                                    </Modals.Dessert>
                                ) : (
                                <Modals.Dessert>
                                    <h3>Deletar Sobremesa</h3>
                                    <img src={idProduct.url} alt={idProduct.name}/>
                                    <h2>{idProduct.name}</h2>
                                    <p>{idProduct.description}</p>
                                    <button className="price">{idProduct.price}</button>
                                    <button className="delete" onClick={handleDelete}>Excluir</button>
                                </Modals.Dessert>)
                            ): null}
                        </>
                    ): edit ? (
                        <>
                            {isContact ? (
                                upd ? (
                                    <Modals.ContactEdit>
                                        <h3>Atualizado com sucesso!</h3>
                                    </Modals.ContactEdit>
                                )
                                :(
                                <Modals.ContactEdit onSubmit={handleUpdate}>
                                    <h3>Editar contato</h3>
                                    <label>Atualizar número</label>
                                    <h5>Informação a ser editado: {infoContact === 'telefone' ? idProduct.telfone : infoContact === 'whatsapp' ? idProduct.whatsapp : infoContact === 'ifood' ? idProduct.ifood : ''}</h5>
                                    <input type="text" placeholder={infoContact === 'ifood' ? 'Nome do restaurante no ifood' : 'Exemplo: (61)99178-6805'} onChange={(e) => setInfo(e.target.value)} />
                                    <button type="submit">Atualizar</button>
                                </Modals.ContactEdit>)
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
                        success ? (
                            <Modals.ContactAdd type={success}>
                                <h3 type={success}>Adicionado com sucesso!</h3>
                            </Modals.ContactAdd>
                        ): (
                        <Modals.ContactAdd onSubmit={handleSubmit}>
                            <h3>Adicionar Contato</h3>
                            <label>Adicionar novo contato</label>
                            <input type="text" placeholder={infoContact === 'ifood' ? 'Nome do restaurante no ifood' : 'Exemplo: (61)99178-6805'} onChange={(e) => setInfo(e.target.value)} />
                            <button type="submit" >Adicionar</button>
                        </Modals.ContactAdd>)
                    ) : null}
                    </Modals.Wrap>
                </Modals.Content>
            </Modals.Wrapper>
        </Modals>
    )
}
