import styled from 'styled-components';

export const Login = styled.div`
    width: 100%;
    height: 100%;
`;

Login.Bg = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${({ backgroundImg }) => backgroundImg ? backgroundImg : ''});
    background-size: cover;
`;

Login.Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3%;
`;

Login.Box = styled.div`
    width: 400px;
    height: 490px;
    border-radius: 10px;
    padding: 2%;



    background-color: rgba(255,255,255);

    h2{
        text-align: center;
        color: black;
    }
`;

Login.Input = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 40px;

    label{
        margin-bottom: 10px;    
        color: black;
        position: relative;
        left: 20%;
    }

    input{
        width: 200px;
        height: 30px;
        margin: 0 auto;
        border: 1px solid black;
    }
`;


Login.Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 50px;



    button{
        width: 180px;
        height: 50px;

        color: white;
        border: none;
        border-radius: 10px;
        background-color: #0057FF;
        outline: none;
        cursor: pointer;

        &:hover{
            transform: scale(1.02);
        }

        &:focus{
            border: 0.5px solid black;
        }
    }
`;