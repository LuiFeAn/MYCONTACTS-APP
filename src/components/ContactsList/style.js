import styled from "styled-components";

export const  Container = styled.div`

    margin-top: 32px;

`;

export const Header = styled.header`


    display: flex;
    align-items: center;
    justify-content:space-between;

    strong{
        font-size:24px;
        color:#222;
    }

    a{
        color:${({theme}) => theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        padding: 8px;
        border: 2px solid ${({theme}) => theme.colors.primary.main};
        border-radius: 4px;
        transition: all 0.2 ease-in;

        &:hover{
            background:${({theme}) => theme.colors.primary.main};
        }
    }

`;

export const ListContainer = styled.div`

    margin-top:24px;
    margin-bottom: 8px;

    button {
        background:transparent;
        border:none;
        display: flex;
        align-items: center;

        span{
            margin-right: 8px;
            font-weight: bold;
            color:${({theme}) => theme.colors.primary.main}
        }
    }

`;

export const Card = styled.div`

    background:#FFFF;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
    padding: 16px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    .info{

        .contact-name{
            display: flex;
            align-items: center;

            small{
                background: ${({theme}) => theme.colors.primary.lighter};
                color:  ${({theme}) => theme.colors.primary.main};
                font-weight: bold;
                text-transform: uppercase;
                padding:4px;
                margin-left:4px;
                border-radius: 4px;
            }
        }

        span{
            display: block;
            font-size:14px;
            color: ${({theme}) => theme.colors.gray[200]};
        }
    }

    & + & {
        margin-top:16px;
    }

    .actions{

        display: flex;
        align-items: center;

        button{
            background:transparent;
            border: none;
            margin-left:8px;
        }

    }

`;
