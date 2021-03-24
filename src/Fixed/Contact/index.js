import React from 'react'
import { BiPlus } from 'react-icons/bi';
import { Contain } from '../../Components/Contact';
import { contactApiTelefone, contactApiWhats, contactApiIfood } from '../../../pages/api/hello';
import api from '../../../db';
import { route } from 'next/dist/next-server/server/router';

export const Contact = ({ 
    scroll,
    edit, 
    delet,
    contactAdd,
    setContactAdd,
    setEdit, 
    setDelet, 
    addContact, 
    setAddContact, 
    setIsPromo ,
    setIsDessert,
    setIsHamburguer,
    setIsAbout,
    tel,
    ifood,
    whats,
    setRoute,
    setDeleteProduct,
    setIdProduct,
    route,
    setInfoContact,
    setIsContact  }) => {



        const handleClick = (e) => {
            const value = e.target.value;
            const id = e.target.id;
            setDelet(!delet)
            setIsDessert(false); 
            setIsPromo(false);
            setIsHamburguer(false);
            setIsAbout(false);
            setIsContact(true);

            setIdProduct(value === 'telefone' ? tel[id] : value === 'whatsapp' ? whats[id] : value === 'ifood' ? ifood[id] : '');
            setDeleteProduct(value === 'telefone' ? tel[id]._id : value === 'whatsapp' ? whats[id]._id : value === 'ifood' ? ifood[id]._id : '');
            setRoute(value === 'telefone' ? '/contact/contactdeletetel/' : value === 'whatsapp' ? '/contact/contactdeletewhats/' : value === 'ifood' ? '/contact/contactdeleteifood/' : '');
        }

        const handleEdit = (e) => {
            const id = e.target.id;
            const value = e.target.value;
            setEdit(!edit)
            setIsDessert(false); 
            setIsPromo(false);
            setIsHamburguer(false);
            setIsAbout(false);
            setIsContact(true);

            setInfoContact(value);

            setIdProduct(value === 'telefone' ? tel[id] : value === 'whatsapp' ? whats[id] : value === 'ifood' ? ifood[id] : '');
            setDeleteProduct(value === 'telefone' ? tel[id]._id : value === 'whatsapp' ? whats[id]._id : value === 'ifood' ? ifood[id]._id : '');
            setRoute(value === 'telefone' ? '/contact/contactpatchtel/' : value === 'whatsapp' ? '/contact/contactpatchwhats/' : value === 'ifood' ? '/contact/contactpatchifood/' : '');

        }

        const handleAdd = (e) => {
            const value = e.target.id;
            setInfoContact(value);
            setAddContact(!addContact);
            setRoute(value === 'telefone' ? '/contact/contactposttelfone' : value === 'whatsapp' ? '/contact/contactpostwhats' : value === 'ifood' ? "/contact/contactpostifood" : '');
        }
    return (
        <Contain id={scroll[4].path}>
            <Contain.Fixed>
                <h2>Telefone</h2>
                <h2>WhatsApp</h2>
                <h2>Ifood</h2>
            </Contain.Fixed>
            <Contain.Content>
                <Contain.Wrap>
                    <h2>Telefone</h2>
                    {!tel ? '' : tel.map((item, index) => {
                        return(
                        <div key={index}>
                        <h4 >{item.telfone}</h4>
                        <button className="delete" value="telefone" id={index} onClick={handleClick}>Excluir</button>
                        <button className="edit" value="telefone" id={index} onClick={handleEdit}>Editar</button>
                    </div>
                        );
                    })}

                    <Contain.Add id="telefone" onClick={handleAdd}><BiPlus id="telefone" onClick={handleAdd} size={30} color="black"/></Contain.Add>
                </Contain.Wrap>
                <Contain.Wrap>
                    <h2 >WhatsApp</h2>
                    {!whats ? '': whats.map((item, index) => (
                        !item.info ? '' :
                        (
                            <div key={index}>
                                <h4>{item.info}</h4>
                                <button className="delete" value="whatsapp" id={index}  onClick={handleClick} >Excluir</button>
                                <button className="edit" value="whatsapp" id={index} onClick={handleEdit}>Editar</button>
                            </div>
                        )
                        
                    ))}
                    <Contain.Add id="whatsapp" onClick={handleAdd}><BiPlus id="whatsapp" onClick={handleAdd} size={30} color="black" /></Contain.Add>
                </Contain.Wrap>
                <Contain.Wrap>
                    <h2 >Ifood</h2>
                    {!ifood ? '' : ifood.map((item, index) => {
                        return(
                            <div key={index}>
                                <h4>{item.info}</h4>
                                <button className="delete" value="ifood" id={index} onClick={handleClick}>Excluir</button>
                                <button className="edit" value="ifood" id={index} onClick={handleEdit}>Editar</button>
                            </div>
                        );
                    })}
                    <Contain.Add id="ifood" onClick={handleAdd}><BiPlus id="ifood" onClick={handleAdd} size={30} color="black" /></Contain.Add>
                </Contain.Wrap>
            </Contain.Content>
        </Contain>
    )
}