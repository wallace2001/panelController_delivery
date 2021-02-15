import React from 'react'
import { BiPlus } from 'react-icons/bi';
import { Contain } from '../../Components/Contact';

export const Contact = ({ 
    edit, 
    delet, 
    setEdit, 
    setDelet, 
    addContact, 
    setAddContact, 
    setIsPromo ,
    setIsDessert,
    setIsHamburguer,
    setIsAbout,
    setIsContact  }) => {

        const handleClick = () => {
            setDelet(!delet)
            setIsDessert(false); 
            setIsPromo(false);
            setIsHamburguer(false);
            setIsAbout(false);
            setIsContact(true);
        }
    return (
        <Contain>
            <Contain.Fixed>
                <h2>Telefone</h2>
                <h2>WhatsApp</h2>
                <h2>Ifood</h2>
            </Contain.Fixed>
            <Contain.Content>
                <Contain.Wrap>
                    <h2>Telefone</h2>
                    <h4>(61)99178-6805</h4>
                    <button className="delete" onClick={handleClick}>Excluir</button>
                    <button className="edit" onClick={() => setEdit(!edit)}>Editar</button>
                    <h4>(61)99178-6805</h4>
                    <button className="delete" onClick={handleClick}>Excluir</button>
                    <button className="edit" onClick={() => setEdit(!edit)}>Editar</button>
                    <Contain.Add onClick={() => setAddContact(!addContact)}><BiPlus size={30} color="black"/></Contain.Add>
                </Contain.Wrap>
                <Contain.Wrap>
                    <h2>WhatsApp</h2>
                    <h4>(61)99178-6805</h4>
                    <button className="delete" onClick={handleClick} >Excluir</button>
                    <button className="edit" onClick={() => setEdit(!edit)}>Editar</button>
                    <h4>(61)99178-6805</h4>
                    <button className="delete" onClick={handleClick}>Excluir</button>
                    <button className="edit" onClick={() => setEdit(!edit)}>Editar</button>
                    <Contain.Add onClick={() => setAddContact(!addContact)}><BiPlus size={30} color="black" /></Contain.Add>
                </Contain.Wrap>
                <Contain.Wrap>
                    <h2>Ifood</h2>
                    <h4>https://ifood/incrivel/inpout</h4>
                    <button className="delete" onClick={handleClick}>Excluir</button>
                    <button className="edit" onClick={() => setEdit(!edit)}>Editar</button>
                    <Contain.Add onClick={() => setAddContact(!addContact)}><BiPlus size={30} color="black" /></Contain.Add>
                </Contain.Wrap>
            </Contain.Content>
        </Contain>
    )
}