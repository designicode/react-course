import styled from 'styled-components';

const StyledSolidButton = styled.button`
    border: 1px solid white;
    box-shadow: 1px 1px 6px 3px rgba(0,0,0,0.1);
    border-radius: 5px;
    background: white;
    color: black;
    padding: 7px 10px;
    font-size: 16px;
    margin: 5px;
    transition: 0.75s all ease-in-out;
    &:hover {
        cursor: pointer;
        background: black;
        border:  1px solid black;
        color: white;
    }
    ${props => props.type === 'primary' && `
        background: #3535b2;
        color: white;
        border: 1px solid  #3535b2;
        &:hover {
            background: white;
            border: 1px solid #3535b2;
            color: #3535b2;
        }
    `}
    ${props => props.type === 'danger' && `
        background: #b21111;;
        color: white;
        border: 1px solid  #b21111;;
        &:hover {
            background: white;
            border: 1px solid #b21111;;
            color: #b21111;;
        }
    `}
    ${props => props.type === 'success' && `
        background: #46a346;
        color: white;
        border: 1px solid #46a346;
        &:hover {
            background: white;
            border: 1px solid #46a346;
            color: #46a346;
        }
    `}
`;

export default StyledSolidButton;