import React from 'react'
import { BiPlus } from 'react-icons/bi';
import { Contain } from '../../Components/Contact';

export const Contact = () => {
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
                    <button className="delete">Excluir</button>
                    <button className="edit">Editar</button>
                    <h4>(61)99178-6805</h4>
                    <button className="delete">Excluir</button>
                    <button className="edit">Editar</button>
                    <Contain.Add><BiPlus size={30} color="black" /></Contain.Add>
                </Contain.Wrap>
                <Contain.Wrap>
                    <h2>WhatsApp</h2>
                    <h4>(61)99178-6805</h4>
                    <button className="delete">Excluir</button>
                    <button className="edit">Editar</button>
                    <h4>(61)99178-6805</h4>
                    <button className="delete">Excluir</button>
                    <button className="edit">Editar</button>
                    <Contain.Add><BiPlus size={30} color="black" /></Contain.Add>
                </Contain.Wrap>
                <Contain.Wrap>
                    <h2>Ifood</h2>
                    <h4>https://ifood/incrivel/inpout</h4>
                    <button className="delete">Excluir</button>
                    <button className="edit">Editar</button>
                    <Contain.Add><BiPlus size={30} color="black" /></Contain.Add>
                </Contain.Wrap>
            </Contain.Content>
        </Contain>
    )
}