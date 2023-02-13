import styled from "styled-components";

export const Input = styled.input`
    background-color: rgba(66, 66, 66, 0.5);
    border-radius: 3px;
    border: none;
    outline: none;
    padding: 10px 15px;
    color: #ECEFF1;
    font-size: 15px;
    transition: border .1s;
    
    &:focus {
      border: 1px solid #ECEFF1;
    }
`