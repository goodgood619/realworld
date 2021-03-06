import styled from 'styled-components';

export const CommentContainer = styled.div`
    margin-left : 15%;
    margin-right : 15%;
`;

export const CommentSignContainer = styled.div`
    margin-top : 5%;
    margin-left : 35%;
`;

export const CommentUlTag = styled.ul`
    padding : 0;
    margin-top : 5%;
    padding-bottom: 10px;
`;

export const CommentLiItem = styled.li`
    float : left;
    border : 1px solid gray;
    border-radius: 5px;
    font-size : 0.75rem;
    padding : .12rem .25rem;
    margin : 0 .12rem .12rem .12rem;
    color : gray;
`;

export const CommentListContainer = styled.div`
    margin-top : 5%;
    margin-left : 15%;
    margin-right: 10%;
    margin-bottom: 5%;
    width : 65%;
`;

export const CommentTextArea = styled.textarea`
    width  : 100%;
    padding : .75rem 1.25rem 2.5rem .75rem;
    box-sizing: border-box;
    font-size : 1.25rem;
    border : 1px solid black;
    border-radius: 5px;
`;

export const CommentFooterUserContainer = styled.div`
    display: block;
    background: #f5f5f5;
    width : 100%;
    padding : .75rem 0 .75rem .75rem;
    box-sizing: border-box;
    margin-bottom: 5%;
    border : 1px solid #f5f5f5;
    border-radius: 5px;
`;

export const CommentFooterContainter = styled.div`
    display : block;
    width : 100%;
    background: #f5f5f5;
    padding : .75rem 0 .75rem .75rem;
    box-sizing: border-box;
    border : 1px solid #f5f5f5;
    border-radius: 5px;
    margin-bottom : 3%;
`;

export const CommentPostButton = styled.button`
    float : right;
    background : green;
    color : white;
    margin : .40em 1.25rem;
    padding : .40rem .75rem;
`;

export const CommentSpanOther = styled.span`
    font-size : 0.75rem;
    color : green;
    margin : 0 1% 0 1%;
`;

export const CommentSpanOtherCreated = styled.span`
    font-size : 0.75rem;
    color : gray;
`;

export const CommentTrashButton = styled.button`
    border : 0;
    width : 30px;
    height : 30px;
`;