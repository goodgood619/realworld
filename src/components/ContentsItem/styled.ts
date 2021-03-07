import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ContentsHeaderContainer = styled.div`
    display : block;
    margin-top : 30px;
`;

export const ContentHeaderInfoContainer = styled.div`
    display: inline-block;
    margin : 1px 0px 1px 10px;
`;

export const ContentLikeButtonContainer = styled.div`
    float : right;
`;

export const ContentImgButton = styled.img`
    width : 15px; 
    height : 15px;
`;

export const ContentBodyContainer = styled.div`
    margin-bottom: 2%;
`;

export const ContentTagContainer = styled.div`
    display : inline-block;
    padding: 0;
    width : 100%;
`;

export const ContentUlTag = styled.ul`
    margin : 0;
    padding : 0;
    float : right;
    width : 40%;
`;

export const ContentLiItem = styled.li`
    float : right;
    border : 1px solid gray;
    border-radius: 5px;
    font-size : 0.75rem;
    padding : .12rem .25rem;
    margin : 0 .12rem .12rem .12rem;
    color : gray;
`;

export const ContentLikeButton = styled.button`

    &:hover {
        cursor : pointer;
    }
    
    ${props => props.className === 'like_button' && `
        background : #5cb85c;
    `}
`;

export const ContentNoArticleContainer = styled.div`
    margin-top : 3%;
`;

export const ContentLink = styled(Link)`
    color : black;
`;