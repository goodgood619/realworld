import styled from 'styled-components';

export const BannerContainer = styled.div`
    margin-top : 2%;
    margin-bottom : 5%;
`;

export const BannerHeader = styled.h3`
    font-size : 3rem;
    padding-top: 2%;
    margin-bottom : 0.25%;
`;

export const BannerSecondHeader = styled.h4`
    margin-bottom: 0;
`;

export const BannerPItem = styled.p`
    font-size : 1.3rem;
`;

export const BannerHomeContainer = styled.div`
    background-color: rgb(88, 196, 88);
    width : 100%;
    padding-bottom: 1.75rem;
    color : white;
    text-align: center;
`;

export const BannerUserContainer = styled.div`
    background-color: #f3f3f3;
    width : 100%;
    padding-bottom: 1.85rem;
    color : black;
    text-align: center;
`;

export const BannerProfileContainer = styled.div`
    margin-right : 20%;
    margin-left : 20%;
    padding-top : 2%;
`;

export const BannerButton = styled.button`
    float : right;

    ${props => props.className === 'follow' && `
        background : gray;
    `}
`;

export const BannerImgProfile = styled.img`
    width : 100px;
    height : 100px;
    display: block;
    margin : 0 auto 0 auto;
`;