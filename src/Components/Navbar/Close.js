import styled from 'styled-components';


export const Close = styled.div`
    width: 50px;
    height: 50px;
    z-index: 999;

    opacity: ${({ navbar }) => navbar ? 1 : 0};

    border-radius: 10px;
    position: relative;
    left: 40%;

    cursor: pointer;


    &::after{
        content: '';
        width: ${({ navbar }) => navbar ? "50%" : "70%"};
        height: 2px;

        position: absolute;
        top: ${({ navbar }) => navbar ? '45%' : '35%'};
        left: ${({ navbar }) => navbar ? '290%' : '5%'};


        transition: 1s ease;
        transform: ${({ navbar }) => navbar ? 'rotate(225deg)' : ''};

        background-color: ${({ theme }) => theme.colors.colorMenu};
    }

    &::before{
        content: '';
        width: ${({ navbar }) => navbar ? "50%" : "47%"};
        height: 2px;

        position: absolute;
        top: ${({ navbar }) => navbar ? '45%' : '62%'};
        left: ${({ navbar }) => navbar ? '290%' : '24%'};

        transition: 1s ease;
        transform: ${({ navbar }) => navbar ? 'rotate(310deg)' : ''};

        background-color: ${({ theme }) => theme.colors.colorMenu};
    }
`;