import styled from 'styled-components'

// export const CustomText = styled.p`
//     font-size: 34px;
//     color: white;
//     font-weight: bold;
// `;



export const CustomText = styled.Image`    
    font-size: ${({ theme}) => theme.metrics.rx(24)}px;
    color: ${({ color, theme }) => color || theme.colors.light};
    font-weight: bold;
    justifyContent: center;
    alignItems: center;
    alignSelf: center;
`;
