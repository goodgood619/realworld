import styled from 'styled-components';

export const PageUl = styled.ul`
    list-style: none;
    display: inline-block;
    padding-inline-start: 0px;
    margin-top : 3%;
    margin-bottom: 5%;
`;

export const PageLi = styled.li`
    float : left;
`;

export const PageLink = styled.a`
    border : 1px solid gray;
    color : green;
    background: white;
    font-size : 1.2rem;
    padding : .5rem .75rem;
    position: relative;
    float : left;
    border-radius: 3px;

    &:hover {
        background : gray;
        text-decoration: underline;
        cursor: pointer;
    }

    ${props => props.className === 'cur-page-link' && `
        border : 1px solid gray;
        color : green;
        background:#5cb85c;
        font-size : 1.2rem;
        padding : .5rem .75rem;
        position: relative;
        float : left;
        border-radius: 3px;
    `}
`;


