import React from 'react';
import { HeroContainer, HeroImageBackground, HeroGradient } from './styles';
import { colors } from '../../../styles/colors'


export const Hero = () => {
    return (
        <HeroContainer>
            <HeroImageBackground source={{uri: 'https://i.pinimg.com/736x/d5/a1/78/d5a1786d554610f584c922bde13833d6--star-trek--star-trek-movies.jpg'}}>
                <HeroGradient colors={[colors.blue, 'transparent', colors.blue]}/>

                </HeroImageBackground>

        </HeroContainer>
    );
            
}