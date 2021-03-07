import styled from 'styled-components';

export const FeedItem = styled.li`
    color : black;
    padding-right : 1.25rem;
    float : left;
    cursor: pointer;

    &:hover {
        cursor : pointer;
    }

    ${props => props.className === 'Active' && `
        color : #5cb85c;
        cursor : pointer;
    `}
`;