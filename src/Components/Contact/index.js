import styled from 'styled-components';

export const Contain = styled.div`
    width: 100%;
    height: 100%;
`;

Contain.Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0px 0px 4% 0px;

    h2{
        color: black;
    }

    @media screen and (max-width: 1100px){
        flex-wrap: wrap;
    }
`;

Contain.Fixed = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    h2:not(:first-child){
        margin-right: 20px;
    }

    h2:nth-of-type(3){
        margin-right: 20px;
    }

    h2{
        text-align: center;
        color: black;
    }

    @media screen and (max-width: 1100px){
        display: none;
    }
`;

Contain.Wrap = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    h2{
        display: none;
    }

    h4{
        display: flex;
        color: black;
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

    @media screen and (max-width: 1100px){
        h2{
            margin-top: 10px;
            display: block;
        }
    }
`;

Contain.Add = styled.div`
    width: 70px;
    height: 70px;

    cursor: pointer;
    
    margin-top: 20px;
    border-radius: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ccc;

    &:hover{
        transform: scale(1.03);
    }
`;