import React from 'react'
import { Eval } from '../../Components/Evaluation';
import { falseApiEvaluation } from '../../../pages/api/hello';
import { tableApi } from '../../../pages/api/hello';

export const Evaluation = ({ scroll }) => {
    const Api = falseApiEvaluation;
    const tableA = tableApi;
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
                        {Api.map((item, index) =>{
                            return(
                                <tr key={index}>
                                    <td >{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.description}</td>
                                    <td>{item.stars}</td>
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