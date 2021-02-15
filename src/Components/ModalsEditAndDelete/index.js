import styled from 'styled-components';

export const Modals = styled.div`
    width: 100%;
    height: 100%;

    z-index: 999;
    display: ${({ edit, delet, addContact }) => edit || delet || addContact ? 'block' : 'none'};

    position: absolute;
`;

Modals.Close = styled.div`
    width: 50px;
    height: 50px;

    position: relative;
    top: 0px;
    left: 95%;
`;

Modals.Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

Modals.Content = styled.div`
    width: 30%;
    height: 300px;

    position: fixed;


    background-color: ${({ theme }) => theme.colors.colorContent};

`;

Modals.Wrap = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

        h3{
            color: ${({ theme }) => theme.colors.primary};
            text-align: center;
    }


    .delete{
        width: 100px;
        height: 40px;

        border: 0px;
        outline: none;
        cursor: pointer;

        color: ${({ theme }) => theme.colors.secundary};
        background-color: ${({ theme }) => theme.colors.colorButtonDelete};

        &:hover{
            transform: scale(1.04);
        }
    }

    .nodelete{
        width: 100px;
        height: 40px;

        border: 0px;
        outline: none;
        cursor: pointer;

        margin-top: 20px;

        color: ${({ theme }) => theme.colors.secundary};
        background-color: ${({ theme }) => theme.colors.colorButtonEdit};

        &:hover{
            transform: scale(1.04);
        }
    }

    
`;