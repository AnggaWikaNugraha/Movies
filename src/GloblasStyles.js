import styled from "@emotion/styled";

export const Gap = styled.div`
    width: ${props => props.width ? props.width : '0px'};
    height: ${props => props.height ? props.height : '0px'};
`

export const Input = styled.input`
    width : ${props => props.width ? props.width : '100%'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
    border: none;
    padding: 0 10px 0 10px;
    :focus{
        outline: none;
    }
`