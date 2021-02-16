import styled from 'styled-components';
import { Link } from "react-scroll";

export const SidebarLink = styled(Link)`
    height: 60px;
    padding: 10px 20px;
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding-left: 3rem;
    position: sticky;

    &:hover{
        background-color: #252832;
        border-left: 3px solid #632ce4;
    }

`;

SidebarLink.DropDownLink = styled(Link)`
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #414757;
    padding-left: 3rem;
    cursor: pointer;

    &:hover{
        background-color: #632ce4;
        border-left: 3px solid white;
    }


`;

SidebarLink.Label = styled.span`
    font-size: 16px;
    text-align: center;
    
    text-decoration: none;
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-left: 10px;

`;

SidebarLink.Label1 = styled.span`
    font-size: 15px;
    text-align: center;
    
    text-decoration: none;
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-left: 10px;

    &:hover{
        transform: scale(1.03);
    }
`;

SidebarLink.first = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    text-align: center;

    margin-top: 20px;
`;
