import styled from 'styled-components';

export const Modal = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;



    @media screen and (max-width: 1600px){
        margin-left: 100px;
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
    }


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
    border-radius: 10px;
    position: fixed;

    background-color: white;

    padding: 0px 3% 3% 3%;

    @media screen and (max-width: 1100px){
        margin-left: 50%;
    }
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

    input{
        width: 350px;
        height: 30px;
    }
`;

Modal.Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;

    textarea{
        width: 350px;
        height: 50px;
        resize: none;
    }
`;

Modal.Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;

    input{
        width: 350px;
        height: 30px;
    }
`;

Modal.Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        margin-top: 30px;
    }
`;