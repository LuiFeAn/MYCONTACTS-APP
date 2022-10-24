import styled from "styled-components";

export default styled.select`

    width: 100%;
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
    height: 52px;
    border-radius: 4px;
    padding: 0 16px;
    border: none;
    font-size:16px;
    transition: outline 0.2s ease-in;
    margin-top:10px;

    &:focus{
        outline: 2px solid ${({theme}) => theme.colors.primary.main};

    }

`;
