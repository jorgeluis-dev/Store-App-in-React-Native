import styled from 'styled-components'

// export const CustomText = styled.p`
//     font-size: 34px;
//     color: white;
//     font-weight: bold;
// `;



export const CustomText = styled.Image`    
    font-size: 34px;
    color: ${({ color }) => color || 'white'};
    font-weight: bold;
    justifyContent: center;
    alignItems: center;
    alignSelf: center;
`;
