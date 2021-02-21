import React, { useState, useRef } from 'react'
import { animated, useSpring } from 'react-spring';
import { IoIosCloseCircle } from 'react-icons/io';
import { Modal } from '../../Components/Modal';
import {CircularProgressbar} from 'react-circular-progressbar';

import api from '../../../db';
import fileSize from 'filesize';
import { uniqueId, update } from 'lodash';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

export const Modals = ({ modal, handleSend, route, setModal, deleteProduct, edit, setEdit, idProduct }) => {

    const modalRef = useRef();
    const [idEdit, setIdEdit] = useState();
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [fileImage, setFileImage] = useState({});
    const [error, setError] = useState(false);
    const [upload, setUpload] = useState([]);

    const CloseModal = (e) => {
        if(modalRef.current === e.target){
            setModal(false);
            setEdit(false);
        }
    }
    
    console.log(deleteProduct);
    console.log(idProduct);
    console.log(route+deleteProduct);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!edit){
            const params = new FormData();
            params.append('name', name);
            params.append('description', description);
            params.append('price', price),
            params.append('file', image);
    
            const config = {
                'Content-Type' : 'multipart/form-data'
            }
        
        api.post(route,params, config).then(res => {
            console.log(res);
            res.data.error ? setError(true) : setError(false);
            res.data.error ? alert('Erro ao Criar Produto!') : alert('Produto criado com sucesso!');
            console.log(image);
            console.log(name);
            console.log(description);
            console.log(price);
            handleSend();

            // !res.data.error ? setImage() : '';
            // !res.data.error ? setName() : '';
            // !res.data.error ? setDescription() : '';
            // !res.data.error ? setPrice() : '';
        });
        }else if(edit){

            const params = new FormData();
            params.append('name', name);
            params.append('description', description);
            params.append('price', price),
            params.append('file', image);
    
            const config = {
                'Content-Type' : 'multipart/form-data'
            }
            api.patch(`${route}${deleteProduct}`,params, config).then(res => {
                console.log(res);
                res.data.error ? setError(true) : setError(false);
                res.data.error ? alert('Erro ao Criar Produto!') : alert('Produto criado com sucesso!');
                console.log(image);
                console.log(name);
                console.log(description);
                console.log(price);
                handleSend();
                setEdit(false);
    
                // !res.data.error ? setImage() : '';
                // !res.data.error ? setName() : '';
                // !res.data.error ? setDescription() : '';
                // !res.data.error ? setPrice() : '';
            });
        } 

    }

    const handleUpload = (files) => {
        const uploadFiles = files.map(file => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: fileSize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null,
        }))
        console.log(uploadFiles);

        setUpload({upload: uploadFiles});
        setImage(upload ? upload.upload ? upload.upload[0].file : '' : '');

        // uploadFiles.forEach(processUpload);
    };

    const updateFile = (id, data) => {
        setUpload({ uploadFiles: upload.map(uploadFile => {
            return id === uploadFile.id ? { ...uploadFile, ...data } : uploadFile
        }) });
    }

    // const processUpload = (uploadFile) => {
    //     const data = new FormData();

    //     data.append('file', uploadFile.file, uploadFile.name);

    //     api.post('description/descriptionpost', data, {
    //     onUploadProgress: e => {
    //         const progress = parseInt(Math.round((e.loaded * 100) / e.total));

    //         updateFile(updateFile.id, {
    //             progress,
    //         })
    //     }
    //     }
    //     ).then(res => console.log(res));
    // }


    const renderDragMessage = (active, reject) => {
        if(!active){
            return <Modal.UploadMessage type="default">Arraste Arquivos Aqui!</Modal.UploadMessage >
        }
        if(reject){
            return <Modal.UploadMessage type="error" active={active} reject={reject}>Arquivo não Suportado!</Modal.UploadMessage>
        } 
        return <Modal.UploadMessage type='success'>Solte o Arquivo!</Modal.UploadMessage>

    }

    const testeImage = (e) => {
        setFileImage(e.target.files[0]);
        setImage(e.target.files[0]);
    }


    return (
        <>
        {modal || edit ? (
        <Modal ref={modalRef} onClick={CloseModal}>
                <Modal.Box>
                    <Modal.Close><IoIosCloseCircle size={30} color="black" cursor="pointer" onClick={() => {edit ? setEdit(!edit) : modal ? setModal(!modal) : ''}} /></Modal.Close>
                    <Modal.Form onSubmit={handleSubmit}>
                        {edit ? (<h3>Editar prato</h3>) : (<h3>Adicionar novo prato</h3>)}
                        <Modal.Image>
                            <Dropzone accept="image/*" onDropAccepted={handleUpload}>
                                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
                                    return(
                                        <Modal.DropsContainer 
                                        {...getRootProps()}
                                        isDragActive={isDragActive}
                                        isDragReject={isDragReject}
                                        >
                                            <input {...getInputProps()} />
                                            {renderDragMessage(isDragActive, isDragReject)}
                                        </Modal.DropsContainer>
                                    );
                                }}
                            </Dropzone>
                            {/* <input type="file" onChange={testeImage}/> */}
                            <CircularProgressbar className="circular" styles={{
                                root: { width: 24 },
                                path: { stroke: '#2fc461' }
                            }}
                            strokeWidth={10}
                            value={upload}
                            />
                        </Modal.Image>
                        <Modal.Photo img={edit ? idProduct.url : upload ? upload.upload ? upload.upload[0].preview : '' : ''} />
                        <Modal.Name>
                            <label>Nome do prato</label>
                            <input type="text" defaultValue={edit ? idProduct.name : ''} onChange={(e) => setName(e.target.value)} />
                        </Modal.Name>
                        <Modal.Description>
                            <label>Descrição do prato</label>
                            <textarea type="text" defaultValue={edit ? idProduct.description : ''} onChange={(e) => setDescription(e.target.value)} />
                        </Modal.Description>
                        <Modal.Price>
                            <label>Preço</label>
                            <input type="text" defaultValue={edit ? idProduct.price : ''} onChange={(e) => setPrice(e.target.value)} />
                        </Modal.Price>
                        <Modal.Button>
                            <button type="submit">{edit ? 'Atualizar' : 'Cadastrar'}</button>
                        </Modal.Button>
                    </Modal.Form>
                </Modal.Box>
        </Modal>
        )
        : null}
        </>
    )
}