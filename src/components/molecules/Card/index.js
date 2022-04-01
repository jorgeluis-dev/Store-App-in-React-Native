import React from 'react'

import { CardCointainer, CardImage} from './styles'

export const Card = ({ item}) => {
    return (
        <CardCointainer>
            <CardImage source={{ uri: item.image_url }} />
        </CardCointainer>
    )
}