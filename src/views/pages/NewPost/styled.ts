import styled from 'styled-components';

export const NewPostContainer = styled.div`
    max-width: 60%;
    margin-left : auto;
    margin-right : auto;
    margin-top : 5%;
`;

export const NewPostInput = styled.input`
    display : block;
    margin : 0 0 2% 0;
    padding : .75rem 1.25rem;
    border: 1px solid gray;
    border-radius: 1px;
    font-size : 1.25rem;
    width : 100%;
    box-sizing: border-box;
`;

export const NewPostInputArticle = styled.input`
    display : block;
    margin : 0 0 2% 0;
    padding : .75rem 1.25rem 7.75rem 1.25rem;
    border: 1px solid gray;
    border-radius: 1px;
    font-size : 1.25rem;
    width : 100%;
    box-sizing: border-box;
`;

export const NewPostSignInForm = styled.form`
    margin-top : 5%;
`;

export const NewPostButton = styled.button`
    padding : 15px;
    color : white;
    background: green;
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 1.25rem;
    float : right;
`;

export const NewPostFieldSet = styled.fieldset`
    min-width: 0;
    margin : 0;
    padding : 0;
    border : 0;
`;