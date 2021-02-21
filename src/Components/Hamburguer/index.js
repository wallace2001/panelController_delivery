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
    justify-content: center;
    flex-direction: row;
`;

Div.BoxProduct = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;


    flex-wrap: wrap;

`;

Div.BoxAdd = styled.div`
    width: 20%;
    height: 100px;
    border-radius: 10px;


    background-color: #ccc;

    margin-top: 50px;
    margin-bottom: 50px;

    cursor: pointer;
    transition: 0.2s ease;
    transform: ${({ scal }) => scal ? 'scale(1.1)' : ''};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px){
        width: 40%;
    }
`;

Div.ContentProduct = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: row;

    flex-wrap: wrap;
`;

Div.Product = styled.div`
    width: 200px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 50px;


    img{
        width: 138px;
        height: 129px;

        border-radius: 10px;
        object-fit: cover;
    }

    h2{
        color: black;
        text-align: center;
    }

    p{
        color: black;
        text-align: center;
        padding: 0px 20% 0px 20%;
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
        margin-top: 10px;

        width: 81px;
        height: 27px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 15px;
        border-radius: 5px;
        
        color: ${({ theme }) => theme.colors.secundary};
        background-color: ${({ theme }) => theme.colors.colorButtonDelete};

        &:hover{
            transform: scale(1.04);
        }

        &:focus{
            border: 1px solid black;
        }
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