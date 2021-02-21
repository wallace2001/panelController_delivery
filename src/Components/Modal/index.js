import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #2fc461;
`;

const dragReject = css`
    border-color: #e57878;
`;

const messageColor = {
    default: '#999',
    error: '#e57878',
    success: '#2fc461'
}

export const Modal = styled.div`
    width: 100%;
    height: calc(100% + 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;


    transition: 0.2s ease;

    position: absolute;

    @media screen and (max-height: 800px){
        padding-top: 10%;
        padding-bottom: 10%;
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
    height: auto;
    border-radius: 10px;
    position: fixed;

    background-color: ${({ theme }) => theme.colors.colorContent};

    //margin-top: 50%;
    padding: 0% 3% 3% 3%;


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
        display: ${({ error }) => error ? 'none' : 'block'};
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 20px;
    }
`;

Modal.Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;

    .circular{
        margin-left: 10px;
    }

`;

Modal.DropsContainer = styled.div.attrs({ 
    className: "dropzone"
 })`
    width: 300px;
    height: 50px;
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;

    transition: height 0.2s ease;

    ${({isDragActive}) => isDragActive ? dragActive : '#ddd'};
    ${({isDragReject}) => isDragReject ? dragReject : '#ddd'};

    h5{
        color: black;
        text-align: center;
    }
`;

Modal.UploadMessage = styled.p`
    display: flex;
    color: ${({ type }) => messageColor[type]};
    justify-content: center;
    align-items: center;
`;

Modal.Photo = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;

    background-image: url(${({ img }) => img ? img : ''});
    background-color: ${({ img }) => img ? '' : '#ccc'};
    background-size: 100% 100%;
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