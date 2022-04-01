import styled from 'styled-components/native';

export const CardCointainer = styled.View`
    width: ${({ theme}) => theme.metrics.px(88)}px;
    height: ${({ theme }) => theme.metrics.px(124)}px;
    border-radius: ${({ theme}) => theme.metrics.px(8)}px;
`;


export const CardImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;