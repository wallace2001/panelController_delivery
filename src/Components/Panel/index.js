import styled from 'styled-components';
import db from '../../../pages/api/config.json';
const panel = db.theme.colors.panelColor;
const word = db.theme.colors.primary;

export const Panel = styled.div`
    width: 100%;
    height: 100%;
`;

Panel.Bg = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${({ backgroundImg }) => backgroundImg ? backgroundImg : ''});
    background-size: cover;
`;

Panel.Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;

    padding: 0px 5% 0px 5%;

`;

Panel.Navigation = styled.div`
    width: 200px;
    height: 100px;
    background-color: #ccc
`;

Panel.Box = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items:${({ info }) => info ? 'flex-start' : 'flex-end'};
    flex-direction: column;

    padding-top: 5%;
    /* padding-right: 10%; */
    /* padding-left: ${({ info }) => info ? '5%' : ''}; */

    @media screen and (max-width: 1400px){
        display: ${({ info }) => info ? 'none' : 'flex'};
        align-items: center;
    }
`;

Panel.Control = styled.div`
    width: ${({ info }) => info ? '250px' : `900px`};
    height: ${({ info, model }) => info ? '100%' : model ? '461px' : '80px'};
    background-color: #fff;

    display: ${({ info }) => info ? "flex" : ''};
    justify-content: center;
    flex-direction: ${({ info }) => info ? "column" : ''};

    margin-bottom: 100px;
    border-radius: ${({ info }) => info ? "0" : '10px 10px 10px 10px'};

    transition: 0.2s ease;

    @media screen and (max-width: 1100px){
        width: 80%;
        height: ${({ model }) => model ? '400px' : '80px'};
    }

    label{
        color: ${({ theme }) => theme.colors.primary};


    }
    
`;

Panel.Form = styled.form`
    width: 100%;
    height: 100%;

    input{
        display: none;
    }

`;

Panel.Div = styled.div`
    background-color: ${({ data_selected }) => data_selected ? 'blue' : '#ccc'};
`;

Panel.Title = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;


    border-radius: ${({ info }) => info ? "0" : '10px 10px 0px 0px'};

    background-color: ${({ active, data_selected, theme }) => active ? `${theme.colors.panelColor}` : `${data_selected ? `${panel}` : ''}`};
    color: ${({ active, data_selected, theme }) => active ? `${ theme.colors.secundary }` : `${data_selected ? `${ theme.colors.secundary }` : `${ theme.colors.primary }`}`};

    

    border-bottom: ${({ bottom }) => bottom ? '1px solid black' : ''};
    cursor: ${({ p }) => p ? 'pointer' : ''};
    /* background-color: ${({ theme }) => theme.colors.panelColor}; */


    /* &:hover{
        background-color: blue;
        color: white;

        h3{
            color: black;
        }

        div{
            background-color: white;
        }
    } */

    icon{
        margin-top: 10px;
        margin-right:20px;
    }

    h4{
        margin-left: 20px;

    }

    div{
        width: 32px;
        height: 32px;

        border-radius: 16px;
        background-color: ${({ active }) => active ? 'white' : 'blue'};

        position: relative;
        top: 8px;
        right: 10%; 

        h3{
            text-align: center;
            color: ${({ active, theme }) => active ? `${theme.colors.primary}` : `${ theme.colors.secundary }`};
            font-size: 15px;
            position: relative;
            bottom: 8px;
        }

        
    }
`;