import styled, { css } from 'styled-components';

const ContainerVariants = {

    default: css`
         background: ${({theme}) => theme.colors.primary.main};
    `,
    sucess: css`
         background: ${({theme}) => theme.colors.sucess.main};
    `,
    danger: css`
         background: ${({theme}) => theme.colors.danger.main};
    `,

}

export const Container = styled.div`

    padding: 16px 32px;
    ${({type}) => ContainerVariants[type] || ContainerVariants.default};
    color: #fff;
    border-radius:4px;
    display:flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 20px 20px -16px rgba(0,0,0.25);

    & + & {
        margin-top:12px;
    }

    strong{
        margin-left:8px;
    }

`;
