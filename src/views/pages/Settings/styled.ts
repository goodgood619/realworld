import styled from 'styled-components';

export const SettingHeader = styled.h1`
    text-align: center;
`;

export const SettingContainer = styled.div`
    max-width: 40%;
    margin-left : auto;
    margin-right : auto;
    margin-top : 5%;
`;

export const SettingInputPost = styled.input`
    display : block;
    margin : 0 0 2% 0;
    padding : .75rem 1.25rem;
    border: 1px solid gray;
    border-radius: 5px;
    font-size : 1.25rem;
    width : 100%;
    box-sizing: border-box;

    ${props => props.className === 'Article' && `
        padding : .75rem 1.25rem 7.75rem 1.25rem;
    `}
`;


export const SettingSignInForm = styled.form`
    margin-top : 5%;
`;

export const SettingSignInButton = styled.button`
    padding : 15px;
    color : white;
    background: green;
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 1.25rem;
    float : right;
`;

export const SettingLogOutButton = styled.button`
    float : left;
    padding : .5rem 1rem;
    border : 1px solid #b85c5c;
    background-color: white;
    border-radius: 5px;
    color : #b85c5c;
    font-size: 1.25rem;
`;

export const SettingFieldSet = styled.fieldset`
    min-width: 0;
    margin : 0;
    padding : 0;
    border : 0;
`;