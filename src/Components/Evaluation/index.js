import styled from 'styled-components';
import { Modals } from '../ModalsEditAndDelete';

export const Eval = styled.div`
    h2{
        color: black;
    }
`;

Eval.Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3%;
`;

Eval.Table = styled.table`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-collapse: collapse;

    tr{
        color: black;

        th,td{
            border: 1px solid black;
            border-collapse: collapse;
            padding: 15px;
            }
        }

        @media screen and (max-width: 900px){
            display: block;
            position: relative;
            width: 100%;
            
            thead,tbody,th,td{
                display: block;
            }

            th,td{
                height: 35px;
            }
            thead{
                float: left;
            }

            tbody{
                width: auto;
                position: relative;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                white-space: nowrap;

                ::-webkit-scrollbar {
                    width: 15px;
                    height: 8px;
                    cursor: pointer;
                }
                
                ::-webkit-scrollbar-thumb {
                    -webkit-border-radius: 10px;
                    border-radius: 10px;
                    background: ${({ theme }) => theme.colors.panelColor};
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
                    cursor: pointer;
                }
                            }

            tbody{
                tr{
                    display: inline-block;
                }
            }
        }

    td{
        color: black;
        text-align: center;
        button{
            width: 100px;
            height: 40px;

            margin-top: 20px;

            border: 0px;
            outline: none;
            cursor: pointer;

            color: ${({ theme }) => theme.colors.secundary};
            background-color: ${({ theme }) => theme.colors.colorButtonDelete};

            &:hover{
                transform: scale(1.04);
            }
        }
    }
`;

// Eval.Modal = styled.div`
//     width: 100%;
//     height: 100%;

//     position: fixed;
// `;

// Eval.ModalContent = styled.div`
//     width: 300px;
//     height: 400px;

//     background: rgba(255,255,255);
// `;