import React, { useEffect, useRef, useCallback } from 'react'
import { animated, useSpring } from 'react-spring';
import { IoIosCloseCircle } from 'react-icons/io';
import { Modal } from '../../Components/Modal';

export const Modals = ({ modal, setModal, edit, setEdit }) => {

    const modalRef = useRef();

    const CloseModal = (e) => {
        if(modalRef.current === e.target){
            setModal(false);
            setEdit(false);
        }
    } 

    return (
        <>
        {modal || edit ? (
        <Modal ref={modalRef} onClick={CloseModal}>
                <Modal.Box>
                    <Modal.Close><IoIosCloseCircle size={30} color="black" cursor="pointer" onClick={() => {edit ? setEdit(!edit) : modal ? setModal(!modal) : ''}} /></Modal.Close>
                    <Modal.Form>
                        {edit ? (<h3>Editar prato</h3>) : (<h3>Adicionar novo prato</h3>)}
                        <Modal.Image>
                            <label>Escolha a imagem</label>
                            <input type="file" />
                        </Modal.Image>
                        <Modal.Photo></Modal.Photo>
                        <Modal.Name>
                            <label>Nome do prato</label>
                            <input type="text" />
                        </Modal.Name>
                        <Modal.Description>
                            <label>Descrição do prato</label>
                            <textarea type="text" />
                        </Modal.Description>
                        <Modal.Price>
                            <label>Preço</label>
                            <input type="text" />
                        </Modal.Price>
                        <Modal.Button>
                            <button>Enviar</button>
                        </Modal.Button>
                    </Modal.Form>
                </Modal.Box>
        </Modal>
        )
        : null}
        </>
    )
}