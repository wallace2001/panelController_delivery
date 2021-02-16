import styled from 'styled-components';

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;


    transition: 0.2s ease;
    /* margin-bottom: 50%;

    @media screen and (max-width: 1600px){
        margin-left: 100px;
        margin-bottom: 120%;
    }

    @media screen and (max-width: 1400px){
        margin-left: 400px;
        margin-top: 50px;
    }

    @media screen and (max-width: 1100px){
        margin-left: 80px;
        margin-top: 100px;
    }

    @media screen and (max-width: 700px){
        margin-left: 50px;
    } */

    position: absolute;


`;

Modal.Close = styled.div`
    width: 32px;
    height: 32px;

    position: relative;
    top: 0px;
    left: 370px;

    @media screen and (max-width: 1600px){
        top: 0px;
        left: 360px;
    }

    @media screen and (max-width: 1300px){
        top: 0px;
        left: 350px;
    }

    @media screen and (max-width: 1100px){
        top: 0px;
        left: 340px;
    }
`;

Modal.Box = styled.div`

    /* height: 600px; */
    border-radius: 10px;
    position: fixed;

    background-color: ${({ theme }) => theme.colors.colorContent};

    //margin-top: 50%;
    padding: 0% 3% 3% 3%;

    /* @media screen and (max-width: 1400px){
        margin-top: 70%;
    }

    @media screen and (max-width: 1100px){
        margin-top: 90%;
    }

    @media screen and (max-width: 900px){

    }

    @media screen and (max-width: 800px){
        margin-top: 120%;
    }

    @media screen and (max-width: 700px){
        margin-top: 180%;
    } */
`;

Modal.Form = styled.form`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    padding: 3%;

    h3{
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 20px;
    }
`;

Modal.Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 20px;

    label{
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 10px;
    }

`;

Modal.Photo = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;

    background-color: #ccc;
`;

Modal.Name = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;

    label{
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.primary};
    }

    input{
        width: 350px;
        height: 30px;

        border-radius: 10px;
        border: 1px solid black;

        &:focus{
            border: 1px solid black;
        }
    }
`;

Modal.Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;

    label{
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.primary};
    }

    textarea{
        width: 350px;
        height: 50px;
        resize: none;

        border-radius: 10px;
        border: 1px solid black;

        &:focus{
            border: 1px solid black;
        }
    }
`;

Modal.Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;

    label{
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.primary};
    }

    input{
        width: 350px;
        height: 30px;

        border-radius: 10px;
        border: 1px solid black;

        &:focus{
            border: 1px solid black;
        }
    }
`;

Modal.Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        width: 150px;
        height: 40px;

        background-color: ${({ theme }) => theme.colors.loginButtonColor};
        color: ${({ theme }) => theme.colors.loginButtonWord};
        cursor: pointer;

        border-radius: 10px;
        border: none;
        outline: none;
        margin-top: 30px;

        &:hover{
            transform: scale(1.04);
        }

        &:focus{
            border: 1px solid black;
        }
    }
`;