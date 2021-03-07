import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavHeader = styled.nav`
    margin-left : 15%;
    margin-right : 15%;
    margin-bottom : -1%;
`;

export const LeftAHeader = styled(Link)`
    color : green;
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 5%;

    &:hover {
        font-weight : bold;
    }
`;

export const UlHeader = styled.ul`
    float : right;
    cursor: pointer;
    color : gray;
    position: relative;
    font-size : 1.1rem;
    padding-inline-start: 0px;
    margin-top : 1%;
`;

export const NavALink = styled(Link)`
    font-size :0.9rem;
    color : black;

    &:hover {
        font-weight : bold;
    }
`;

export const CommentSign = styled.a`
    font-size : 0.9rem;
    color : green;
`;

export const IconHeader = styled.img`
    width : 30px;
    height : 20px;
    margin-bottom : -2.5%;
`;