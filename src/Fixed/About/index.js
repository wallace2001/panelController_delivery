import React from 'react'
import { Contain } from '../../Components/About';

export const About = ({ 
    scroll,
    edit, 
    setEdit, 
    setIsAbout, 
    setIsPromo ,
    setIsDessert,
    setIsHamburguer,
    about,
    setInfoContact,
    setIdProduct,
    setRoute,
    setDeleteProduct,
    setIsContact  }) => {
        const handleClick = (e) => {
            const id = e.target.id;
            setEdit(!edit)
            setIsDessert(false); 
            setIsPromo(false);
            setIsHamburguer(false);
            setIsAbout(true);
            setIsContact(false);

            setIdProduct(about[id]);
            setDeleteProduct(about[id]._id);
            setRoute('about/sendupdate/');
            console.log(about[id]._id);
        }

    return (
        <Contain id={scroll[5].path}>
            <Contain.Content>
                {!about ? '' : about.map((item, index) => {
                    return(
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
                <button id='0' className="edit" onClick={handleClick}>Editar</button>
            </Contain.Content>
        </Contain>
    )
}