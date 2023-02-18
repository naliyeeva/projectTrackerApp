import styled from "styled-components";

export const Textarea = styled.textarea`
    background-color: rgba(66, 66, 66, 0.5);
    border-radius: 3px;
    border: none;
    outline: none;
    padding: 10px 15px;
    color: #ECEFF1;
    font-size: 15px;
    transition: border .1s;
    width: 100%;
    margin-bottom: 15px;
    
    &:focus {
      border: 1px solid #ECEFF1;
    }
`