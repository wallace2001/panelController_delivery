import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    h2{
        color: black;
    }
`;

Div.Modal = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

Div.Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    flex-direction: row;

    padding: 5% 3% 3% 3%;
`;

Div.BoxAdd = styled.div`
    width: 20%;
    height: 300px;
    border-radius: 10px;

    background-color: #ccc;

    cursor: pointer;
    transition: 0.2s ease;
    transform: ${({ scal }) => scal ? 'scale(1.1)' : ''};
    display: ${({ modal }) => modal ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
`;