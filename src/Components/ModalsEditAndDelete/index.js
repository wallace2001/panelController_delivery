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
    height: auto;

    position: fixed;


    background-color: ${({ theme }) => theme.colors.colorContent};

    @media screen and (max-width: 900px){
        width: 50%;
    }

    @media screen and (max-width: 550px){
        width: 70%;
    }

    @media screen and (max-width: 400px){
        width: 90%;
    }

`;

Modals.Wrap = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15%;

    flex-direction: column;

        h3{
            color: ${({ theme }) => theme.colors.primary};
            text-align: center;
    }

    /* .delete{
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
    } */

    
`;

Modals.Ham = styled.div`
    width: 100%;
    height: 100%;
    padding: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 200px;
        height: 150px;
    }

    h2{
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }
    p{
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }

    .price{
        margin-top: 10px;

        width: 138px;
        height: 47px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 20px;
        border-radius: 5px;
        
        color: ${({ theme }) => theme.colors.secundary};
        background-color: ${({ theme }) => theme.colors.colorButtonPrice};

        &:hover{
            transform: scale(1.04);
        }

        &:focus{
            border: 1px solid black;
        }

    }

    .delete{
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

`;

Modals.Dessert = styled.div`
    width: 100%;
    height: 100%;
    padding: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 200px;
        height: 150px;
    }

    h2{
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }
    p{
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }

    .price{
        margin-top: 10px;

        width: 138px;
        height: 47px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 20px;
        border-radius: 5px;
        
        color: ${({ theme }) => theme.colors.secundary};
        background-color: ${({ theme }) => theme.colors.colorButtonPrice};

        &:hover{
            transform: scale(1.04);
        }

        &:focus{
            border: 1px solid black;
        }

    }

    .delete{
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

`;

Modals.Promo = styled.div`
    width: 100%;
    height: 100%;
    padding: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 200px;
        height: 150px;
    }

    h2{
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }
    p{
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }

    .price{
        margin-top: 10px;

        width: 138px;
        height: 47px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 20px;
        border-radius: 5px;
        
        color: ${({ theme }) => theme.colors.secundary};
        background-color: ${({ theme }) => theme.colors.colorButtonPrice};

        &:hover{
            transform: scale(1.04);
        }

        &:focus{
            border: 1px solid black;
        }

    }

    .delete{
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

`;

Modals.About = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div{
        display: flex;
        align-items: center;
        justify-content: space-around;

        .delete{
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

    .nodelete{
        width: 100px;
        height: 40px;

        border: 0px;
        outline: none;
        cursor: pointer;

        margin-top: 20px;
        margin-left: 20px;

        color: ${({ theme }) => theme.colors.secundary};
        background-color: ${({ theme }) => theme.colors.colorButtonEdit};

        &:hover{
            transform: scale(1.04);
        }

        @media screen and (max-width: 990px){
            margin-top: 20px;
            margin-left: 0px;
        }
    }
        @media screen and (max-width: 990px){
            flex-direction: column;
        }
    }


`;
