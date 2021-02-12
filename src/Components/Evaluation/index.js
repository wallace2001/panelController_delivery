import styled from 'styled-components';

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

    td{
        color: black;
        text-align: center;
    }
`;