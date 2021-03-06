import styled from 'styled-components';

export const TagListContainer = styled.div`
    margin-top: -3%;
    font-size : 0.89rem;
`;

export const TagListInnerContainer = styled.div`
    background: #f3f3f3;
    display: inline-block;
    padding: 0% 7% 5% 3%;
    margin-bottom : 5%;
`;

export const TagListAItem = styled.a`
    background: rgba(10, 9, 9, 0.356);
    border : 1px solid gray;
    border-radius : 10px;
    color : white;
    display: inline-block;
    margin-bottom : 3px;
    margin-right : 3px;
    cursor: pointer;
    font-size : 0.8rem;
    padding : .25rem;

    &:hover {
        background: rgb(15, 14, 14);
    }
`;