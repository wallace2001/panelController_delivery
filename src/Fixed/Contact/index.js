import React from 'react'
import { BiPlus } from 'react-icons/bi';
import { Contain } from '../../Components/Contact';
import { contactApiTelefone, contactApiWhats, contactApiIfood } from '../../../pages/api/hello';

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
    setIsContact  }) => {
        const ApiTel = contactApiTelefone;
        const ApiWhat = contactApiWhats;
        const ApiIfood = contactApiIfood;


        const handleClick = (e) => {
            const id = e.target.id;
            setDelet(!delet)
            setIsDessert(false); 
            setIsPromo(false);
            setIsHamburguer(false);
            setIsAbout(false);
            setIsContact(true);

            setContactAdd(id);
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

            console.log(value, id);

            if(value === 'telefone'){
                setContactAdd(ApiTel[id]);
            }else if(value === 'whatsapp'){
                setContactAdd(ApiWhat[id]);
            }else if(value === 'ifood'){
                setContactAdd(ApiIfood[id]);
            }

        }

        const handleAdd = () => {
            setAddContact(!addContact);
        }
    return (
        <Contain id={scroll[4].path}>
            <Contain.Fixed>
                <h2>Telefone</h2>
                <h2>WhatsApp</h2>
                <h2>Ifood</h2>
            </Contain.Fixed>
            <Contain.Content onClick={(e) => console.log(e.target)}>
                <Contain.Wrap>
                    <h2>Telefone</h2>
                    {ApiTel.map((item, index) => {
                        return(
                        <div key={index}>
                        <h4 >{item.number}</h4>
                        <button className="delete" value="telefone" id={index} onClick={handleClick}>Excluir</button>
                        <button className="edit" value="telefone" id={index} onClick={handleEdit}>Editar</button>
                    </div>
                        );
                    })}

                    <Contain.Add onClick={() => setAddContact(!addContact)}><BiPlus size={30} color="black"/></Contain.Add>
                </Contain.Wrap>
                <Contain.Wrap >
                    <h2 >WhatsApp</h2>
                    {ApiWhat.map((item, index) => {
                        return(
                            <div key={index}>
                                <h4>{item.number}</h4>
                                <button className="delete" value="whatsapp" id={index}  onClick={handleClick} >Excluir</button>
                                <button className="edit" value="whatsapp" id={index} onClick={handleEdit}>Editar</button>
                            </div>
                        );
                    })}
                    <Contain.Add onClick={() => setAddContact(!addContact)}><BiPlus size={30} color="black" /></Contain.Add>
                </Contain.Wrap>
                <Contain.Wrap  >
                    <h2 >Ifood</h2>
                    {ApiIfood.map((item, index) => {
                        return(
                            <div key={index}>
                                <h4>{item.number}</h4>
                                <button className="delete" value="ifood" id={index} onClick={handleClick}>Excluir</button>
                                <button className="edit" value="ifood" id={index} onClick={handleEdit}>Editar</button>
                            </div>
                        );
                    })}
                    <Contain.Add onClick={handleAdd}><BiPlus size={30} color="black" /></Contain.Add>
                </Contain.Wrap>
            </Contain.Content>
        </Contain>
    )
}