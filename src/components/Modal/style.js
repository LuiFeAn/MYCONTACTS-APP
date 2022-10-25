import styled from "styled-components";

export const Overlay = styled.div`

    width:100%;
    background:rgba(0,0,0,0.6);
    backdrop-filter: blur(5px);
    position: absolute;
    height: 100%;
    left:0px;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0px;

`;


export const Container = styled.div`

    width: 100%;
    background:#fff;
    padding:24px;
    border-radius:24px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
    max-width: 450px;

    h1{
        font-size:22px;
        color:${({theme,danger}) => (
            danger ? theme.colors.danger.main : theme.colors.gray[400]
        )}
    }

    p{
        margin-top:8px;
    }

`;

export const Footer = styled.footer`

    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cancel-button{
        background:transparent;
        border:none;
        font-size:16px;
        margin-right: 16px;
        color:${({theme}) => theme.colors.gray[200]};
    }

`;
