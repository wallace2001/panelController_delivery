import styled from 'styled-components';

export const Contain = styled.div`
    width: 100%;
    height: 100%;
`;

Contain.Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 0px 15% 5% 15%;

    h2, p{
        color: black;
    }

    .edit{
        margin-top: 10px;

        width: 81px;
        height: 27px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 15px;
        border-radius: 5px;
        
        color: ${({ theme }) => theme.colors.secundary};
        background-color: ${({ theme }) => theme.colors.colorButtonEdit};

        &:hover{
            transform: scale(1.04);
        }

        &:focus{
            border: 1px solid black;
        }
    }
`;
