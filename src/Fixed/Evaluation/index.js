import React, { useState } from 'react'
import { Eval } from '../../Components/Evaluation';
import { falseApiEvaluation } from '../../../pages/api/hello';
import { tableApi } from '../../../pages/api/hello';
import api from '../../../db';

// export const Status = () => {
//     return(
//         err ? (
//             <Eval.Modal>
//                 <Eval.ModalContent>
//                 <h2>Apagado com sucesso!</h2>
//                 </Eval.ModalContent>
//             </Eval.Modal>
//         ) : (
//             <Eval.Modal>
//                 <Eval.ModalContent>
//                     <h2>Erro ao apagar informação!</h2>
//                 </Eval.ModalContent>
//             </Eval.Modal>
//         )

//     );
// }

export const Evaluation = ({ scroll, evaluation }) => {
    const [err, setErr] = useState();
    const Api = falseApiEvaluation;
    const tableA = tableApi;

    const handleDelete = (e) => {
        const id = e.target.id;
        const delet = evaluation[id]._id;
        console.log(evaluation[id]);
        api.delete(`evaluation/deleteevaluation/${delet}`)
        .then(res => {
            setErr(res.data);
            if(!res.data.error){
                alert('Apagado com sucesso!');
            }else{
                alert('Erro ao apagar informação!');
            }
        });
    }

    return (
        <Eval id={scroll[3].path}>
            <Eval.Content>
                <Eval.Table>
                    <thead>
                    <tr>
                        {tableA.map((item,index) =>{
                            return(
                                <th key={index} >{item.table}</th>
                            );
                        })}
                    </tr>
                    </thead>
                    <tbody>
                        {!evaluation ? '' : evaluation.map((item, index) =>{
                            return(
                                <tr key={index}>
                                    <td >{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.description}</td>
                                    <td>{item.stars}</td>
                                    <td><button id={index} onClick={handleDelete}>Deletar</button></td>
                                </tr>
                            );
                        })}
                        </tbody>
                    {/* <tr>
                        <th>Firstname</th>
                        <th>Lastname</th> 
                        <th>Age</th>
                        <th>Year</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td>1999</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                        <td>1888</td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>80</td>
                        <td>1950</td>
                    </tr> */}
                </Eval.Table>
            </Eval.Content>
        </Eval>
    )
}