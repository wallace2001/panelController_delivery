import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 1000;

    background-color: ${({ color, scrollNav, theme }) => scrollNav ? theme.colors.panelColorFixed  : color};

    .logout{
        display: flex;
        justify-content: center;
        align-items: center;

        label{
            margin-left: 20px;
        }

        @media screen and (max-width: 800px){
            h5{
                display: none;
            }
        }
    }
`;

Header.content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 4% 0px 4%;

`;


Header.Icon = styled.div`
    width: 50px;
    height: 50px;
    z-index: 999;

    opacity: ${({ onclick }) => onclick ? 0 : 1};

    border-radius: 10px;
    position: relative;

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

        @media screen and (max-width: 1000px){
            left: ${({ navbar }) => navbar ? '360%' : '15%'};
        }

        @media screen and (max-width: 600px){
            left: ${({ navbar }) => navbar ? '400%' : '15%'};
        }
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

        @media screen and (max-width: 1000px){
            left: ${({ navbar }) => navbar ? '360%' : '15%'};
        }

        @media screen and (max-width: 600px){
            left: ${({ navbar }) => navbar ? '400%' : '15%'};
        }
    }
`;

Header.Menu = styled.div`

`;


Header.Logo = styled.div`

`;

Header.Nav = styled.div`
    width: 100%;
    height: 100%;
    background-color: #15171c;

    width: 250px;
    height: 100vh;

    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ navbar }) => navbar ? '0' : '-100%'};
    transition: 350ms;
    z-index: 10;
`;


Header.Wrap = styled.div`
    padding-top: 40%;
    width: 100%;
    position: relative;
`;

Header.Space = styled.div``;