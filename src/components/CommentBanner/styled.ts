import styled from 'styled-components';

export const CommentRootContainer = styled.div`
    display: inline-block;
    background-color: black;
    width : 100%;
    padding-bottom: 1.75rem;
    color : white;
    margin-bottom: 5%;
`;

export const CommentContainer = styled.div`
    margin-left : 15%;
    margin-right : 15%;
`; 

export const CommentTitle = styled.h1`
    font-size: 3.5rem;
`;

export const CommentAuthor = styled.div`
    display: inline-block;
    margin : 0 0 0 5px;
    width : 80%;
`;

export const CommentEditButton = styled.button`
    margin-left : 3%;
    border : 1px solid gray;
    background-color: none;
    color : gray;
`;

export const CommentDeleteButton = styled.button`
    border : 1px solid red;
    color : red;
`;

