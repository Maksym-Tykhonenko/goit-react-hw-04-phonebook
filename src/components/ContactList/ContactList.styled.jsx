import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
`;

export const Name = styled.p`
    margin-bottom: 0.5rem;
    font-weight: bold;

`;
export const Number = styled.p`
    margin-bottom: 0.5rem;
    font-weight: bold;

`;
export const DelBtn = styled.button`
    width: 50px;
    height: 25px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: gold;
    :hover{
        border: 3px solid black;
    }
`;