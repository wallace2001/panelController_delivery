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
    background-position: center;
`;

Login.Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3%;
`;

Login.Box = styled.form`
    width: 400px;
    height: 490px;
    border-radius: 10px;
    padding: 2%;


    h6{
        text-align: center;
        color: red;
    }
    background-color: ${({ theme }) => theme.colors.boxLogin};

    h2{
        text-align: center;
        color: ${({ theme }) => theme.colors.loginColor};
    }

    h4{
        text-align: center;
        color: ${({ theme }) => theme.colors.loginInvalid};
    }
`;

Login.Input = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 20px;

    label{
        width: 50px;
        margin-bottom: 10px;    
        color: ${({ theme }) => theme.colors.loginLabelColor};
        position: relative;
        left: 70px;
    }

    input{
        width: 200px;
        height: 30px;
        margin: 0 auto;
        border: ${({ err, theme }) => err ? `1px solid ${theme.colors.loginInvalid }`: "1px solid black"};
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

        color: ${({ theme }) => theme.colors.loginButtonWord};
        border: none;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.loginButtonColor};
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